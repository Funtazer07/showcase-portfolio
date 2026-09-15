import FeaturedProjects from '@/components/FeaturedProjects'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sidebar from '@/components/Sidebar'
import TechStack from '@/components/TechStack'

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Sidebar />

      <div className="lg:pl-[220px]">
        <Header />
        <Hero />

        <main className="mx-auto max-w-5xl px-6 py-16">
          <FeaturedProjects />
          <TechStack />
        </main>
      </div>
    </div>
  )
}

export default App
