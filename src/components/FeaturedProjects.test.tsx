import { describe, expect, it } from 'vitest'
import { projects, siteMeta } from '@/data/portfolioData'
import { render, screen, within } from '@/test/render'
import FeaturedProjects from './FeaturedProjects'

describe('FeaturedProjects', () => {
  it('renders the section heading', () => {
    render(<FeaturedProjects />)
    expect(
      screen.getByRole('heading', { name: siteMeta.projectsHeading })
    ).toBeInTheDocument()
  })

  it('renders every project with its description, tech badges, and highlights', () => {
    render(<FeaturedProjects />)

    for (const project of projects) {
      const card = screen.getByRole('heading', { name: project.title }).closest('article')
      expect(card).not.toBeNull()
      const scoped = within(card as HTMLElement)

      expect(scoped.getByText(project.description)).toBeInTheDocument()

      for (const tech of project.techStack) {
        expect(scoped.getByText(tech)).toBeInTheDocument()
      }

      for (const highlight of project.highlights) {
        expect(scoped.getByText(highlight)).toBeInTheDocument()
      }
    }
  })

  it('links repo and demo buttons to the correct URLs in a new tab, when present', () => {
    render(<FeaturedProjects />)

    for (const project of projects) {
      const card = screen.getByRole('heading', { name: project.title }).closest('article')
      const scoped = within(card as HTMLElement)

      if (project.repoUrl) {
        const repoLink = scoped.getByRole('button', { name: new RegExp(siteMeta.repoLinkLabel.replace('$', '\\$')) })
        expect(repoLink).toHaveAttribute('href', project.repoUrl)
        expect(repoLink).toHaveAttribute('target', '_blank')
      }

      if (project.demoUrl) {
        const demoLink = scoped.getByRole('button', { name: new RegExp(siteMeta.demoLinkLabel.replace('$', '\\$')) })
        expect(demoLink).toHaveAttribute('href', project.demoUrl)
        expect(demoLink).toHaveAttribute('target', '_blank')
      }
    }
  })

  it('links the case study button to the project detail page, when present', () => {
    render(<FeaturedProjects />)

    for (const project of projects) {
      if (!project.detail) continue
      const card = screen.getByRole('heading', { name: project.title }).closest('article')
      const scoped = within(card as HTMLElement)

      const caseStudyLink = scoped.getByRole('button', { name: siteMeta.caseStudyLabel })
      expect(caseStudyLink).toHaveAttribute('href', `/projects/${project.id}`)
    }
  })
})
