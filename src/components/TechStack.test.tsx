import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { siteMeta, techCategoryLabels, techStack } from '@/data/portfolioData'
import TechStack from './TechStack'

describe('TechStack', () => {
  it('renders the section heading', () => {
    render(<TechStack />)
    expect(
      screen.getByRole('heading', { name: siteMeta.techStackHeading, level: 2 })
    ).toBeInTheDocument()
  })

  it('groups every technology under its category heading', () => {
    render(<TechStack />)

    for (const category of Object.values(techCategoryLabels)) {
      expect(screen.getByRole('heading', { name: category })).toBeInTheDocument()
    }

    for (const tech of techStack) {
      const categoryLabel = techCategoryLabels[tech.category]
      const categoryHeading = screen.getByRole('heading', { name: categoryLabel })
      const card = categoryHeading.closest('div')
      expect(card).not.toBeNull()
      expect(within(card as HTMLElement).getByText(tech.name)).toBeInTheDocument()
    }
  })
})
