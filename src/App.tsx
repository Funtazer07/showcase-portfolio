import { useEffect, useState } from 'react'
import About from '@/components/About'
import CommandMenu from '@/components/CommandMenu'
import FeaturedProjects from '@/components/FeaturedProjects'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Sidebar from '@/components/Sidebar'
import TechStack from '@/components/TechStack'
import { Toaster } from '@/components/ui/toast'

function App() {
  const [commandMenuOpen, setCommandMenuOpen] = useState(false)

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault()
        setCommandMenuOpen((open) => !open)
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Toaster />
      <CommandMenu open={commandMenuOpen} onOpenChange={setCommandMenuOpen} />
      <Sidebar onSearchClick={() => setCommandMenuOpen(true)} />

      <div className="lg:pl-[220px]">
        <Header onSearchClick={() => setCommandMenuOpen(true)} />
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
