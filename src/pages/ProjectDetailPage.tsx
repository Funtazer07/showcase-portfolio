import { ArrowLeft, ArrowRight, ImageOff } from 'lucide-react'
import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { projectDetailPageContent, projects } from '@/data/portfolioData'

function ProjectDetailPage() {
  const { projectId } = useParams()
  const project = projects.find((p) => p.id === projectId)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [projectId])

  if (!project || !project.detail) {
    return (
      <main className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-6 py-24 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">
          {projectDetailPageContent.notFoundTitle}
        </h1>
        <p className="text-muted-foreground">{projectDetailPageContent.notFoundBody}</p>
        <a href="/" className="text-sm font-medium text-primary hover:underline">
          {projectDetailPageContent.backHomeLabel}
        </a>
      </main>
    )
  }

  const { detail } = project
  const nextProject = projects.find(
    (p) => p.detail && p.id !== project.id
  )

  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <a
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
      >
        <ArrowLeft className="size-4" />
        {projectDetailPageContent.backToProjectsLabel}
      </a>

      <div className="mt-8 flex flex-col gap-4">
        <div className="flex flex-wrap gap-2">
          {detail.metaBadges.map((badge) => (
            <span
              key={badge}
              className="rounded bg-muted px-2.5 py-1 text-xs font-semibold tracking-wide text-muted-foreground uppercase"
            >
              {badge}
            </span>
          ))}
        </div>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
          {project.title}
        </h1>
        <p className="max-w-3xl text-[15px] text-muted-foreground">{detail.summary}</p>
      </div>

      <div className="mt-10 flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-border bg-muted/30 py-24 text-center text-sm text-muted-foreground">
        <ImageOff className="size-6" />
        {detail.screenshotsNote && <span>{detail.screenshotsNote}</span>}
      </div>

      <div className="mt-10 grid gap-8 border-y border-border py-8 sm:grid-cols-3">
        <div>
          <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {projectDetailPageContent.challengeLabel}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{detail.challenge}</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {projectDetailPageContent.solutionLabel}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{detail.solution}</p>
        </div>
        <div>
          <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {projectDetailPageContent.resultLabel}
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">{detail.result}</p>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
          {projectDetailPageContent.techStackUsedLabel}
        </h2>
        <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted-foreground">
          {project.techStack.map((tech) => (
            <li key={tech} className="flex items-center gap-2">
              <span aria-hidden className="text-primary">
                /
              </span>
              {tech}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex flex-wrap gap-x-12 gap-y-6 border-y border-border py-6">
        {detail.stats.map((stat) => (
          <div key={stat.label} className="flex flex-col gap-1.5">
            <span className="text-2xl font-semibold tracking-tight">{stat.value}</span>
            <span className="text-xs tracking-wide text-muted-foreground">
              {stat.label}
            </span>
          </div>
        ))}
      </div>

      {nextProject && (
        <div className="mt-10 flex items-center gap-2 text-sm">
          <span className="text-muted-foreground">
            {projectDetailPageContent.nextProjectLabel}
          </span>
          <Link
            to={`/projects/${nextProject.id}`}
            className="inline-flex items-center gap-1.5 font-medium hover:text-primary"
          >
            {nextProject.title}
            <ArrowRight className="size-4" />
          </Link>
        </div>
      )}
    </main>
  )
}

export default ProjectDetailPage
