import About from '@/components/About'
import FeaturedProjects from '@/components/FeaturedProjects'
import Hero from '@/components/Hero'
import TechStack from '@/components/TechStack'
import { useScrollToHash } from '@/lib/useScrollToHash'

function HomePage() {
  useScrollToHash()

  return (
    <>
      <Hero />
      <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6 sm:py-16">
        <FeaturedProjects />
        <TechStack />
        <About />
      </main>
    </>
  )
}

export default HomePage
