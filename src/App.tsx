import FeaturedProjects from '@/components/FeaturedProjects'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sidebar from '@/components/Sidebar'
import { siteMeta, techStack } from '@/data/portfolioData'

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Sidebar />

      <div className="lg:pl-[220px]">
        <Header />
        <Hero />

        <main className="mx-auto max-w-3xl px-6 py-16">
          <FeaturedProjects />

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
