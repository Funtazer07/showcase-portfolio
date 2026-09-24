import { Check, Code2, ExternalLink, FileText } from 'lucide-react'
import { Link } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { projects, siteMeta } from '@/data/portfolioData'

function FeaturedProjects() {
  return (
    <section id="projects" className="flex scroll-mt-20 flex-col gap-6">
      <h2 className="text-3xl font-semibold tracking-tight">
        {siteMeta.projectsHeading}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.id}
            className="flex flex-col gap-3 rounded-lg border border-border bg-card p-5 text-card-foreground"
          >
            <h3 className="font-medium">{project.title}</h3>
            <p className="text-sm text-muted-foreground">{project.description}</p>

            <div className="flex flex-wrap gap-1.5">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-accent px-2.5 py-1 font-mono text-xs font-medium text-accent-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <ul className="flex flex-col gap-1.5 text-sm text-muted-foreground">
              {project.highlights.map((highlight) => (
                <li key={highlight} className="flex items-start gap-2">
                  <Check className="mt-0.5 size-3.5 shrink-0 text-primary" />
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap gap-2 pt-2">
              {project.detail && (
                <Button size="sm" render={<Link to={`/projects/${project.id}`} />}>
                  <FileText className="size-4" />
                  {siteMeta.caseStudyLabel}
                </Button>
              )}
              {project.repoUrl && (
                <Button
                  size="sm"
                  variant="outline"
                  render={<a href={project.repoUrl} target="_blank" rel="noreferrer" />}
                >
                  <Code2 className="size-4" />
                  {siteMeta.repoLinkLabel}
                </Button>
              )}
              {project.demoUrl && (
                <Button
                  size="sm"
                  variant={project.detail ? 'outline' : 'default'}
                  render={<a href={project.demoUrl} target="_blank" rel="noreferrer" />}
                >
                  <ExternalLink className="size-4" />
                  {siteMeta.demoLinkLabel}
                </Button>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default FeaturedProjects
