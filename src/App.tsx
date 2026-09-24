import { useEffect, useState } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import CommandMenu from '@/components/CommandMenu'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import Sidebar from '@/components/Sidebar'
import { Toaster } from '@/components/ui/toast'
import HomePage from '@/pages/HomePage'
import ProjectDetailPage from '@/pages/ProjectDetailPage'

interface AppShellProps {
  commandMenuOpen: boolean
  onOpenCommandMenu: () => void
  setCommandMenuOpen: (open: boolean) => void
}

function AppShell({ commandMenuOpen, onOpenCommandMenu, setCommandMenuOpen }: AppShellProps) {
  const { pathname } = useLocation()
  const showSidebar = !pathname.startsWith('/projects/')

  return (
    <div className="min-h-svh bg-background text-foreground">
      <Toaster />
      <CommandMenu open={commandMenuOpen} onOpenChange={setCommandMenuOpen} />
      {showSidebar && <Sidebar onSearchClick={onOpenCommandMenu} />}

      <div className={showSidebar ? 'lg:pl-[220px]' : undefined}>
        <Header onSearchClick={onOpenCommandMenu} />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects/:projectId" element={<ProjectDetailPage />} />
        </Routes>

        <Footer />
      </div>
    </div>
  )
}

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
    <BrowserRouter>
      <AppShell
        commandMenuOpen={commandMenuOpen}
        onOpenCommandMenu={() => setCommandMenuOpen(true)}
        setCommandMenuOpen={setCommandMenuOpen}
      />
    </BrowserRouter>
  )
}

export default App
