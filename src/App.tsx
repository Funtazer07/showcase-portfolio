import { Code2, ExternalLink } from 'lucide-react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sidebar from '@/components/Sidebar'
import { Button } from '@/components/ui/button'
import { projects, siteMeta, techStack } from '@/data/portfolioData'

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Sidebar />

      <div className="lg:pl-[220px]">
        <Header />
        <Hero />

        <main className="mx-auto max-w-3xl px-6 py-16">
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
                  <p className="text-sm text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-accent px-2.5 py-0.5 text-xs font-medium text-accent-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex gap-2 pt-2">
                    <Button
                      size="sm"
                      variant="outline"
                      render={
                        <a href={project.repoUrl} target="_blank" rel="noreferrer" />
                      }
                    >
                      <Code2 className="size-4" />
                      {siteMeta.repoLinkLabel}
                    </Button>
                    <Button
                      size="sm"
                      render={
                        <a href={project.demoUrl} target="_blank" rel="noreferrer" />
                      }
                    >
                      <ExternalLink className="size-4" />
                      {siteMeta.demoLinkLabel}
                    </Button>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="stack" className="mt-16 flex scroll-mt-20 flex-col gap-4">
            <h2 className="text-2xl font-semibold tracking-tight">
              {siteMeta.techStackHeading}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {techStack.map((tech) => (
                <li
                  key={tech.name}
                  className="rounded-md border border-border px-3 py-1.5 text-sm"
                >
                  {tech.name}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  )
}

export default App
