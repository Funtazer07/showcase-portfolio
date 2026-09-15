import About from '@/components/About'
import FeaturedProjects from '@/components/FeaturedProjects'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sidebar from '@/components/Sidebar'
import TechStack from '@/components/TechStack'
import { Toaster } from '@/components/ui/toast'

function App() {
  return (
    <div className="min-h-svh bg-background text-foreground">
      <Toaster />
      <Sidebar />

      <div className="lg:pl-[220px]">
        <Header />
        <Hero />

        <main className="mx-auto max-w-5xl px-6 py-16">
          <FeaturedProjects />
          <TechStack />
          <About />
        </main>

        <Footer />
      </div>
    </div>
  )
}

export default App
