import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navItems, siteMeta, socialLinks } from '@/data/portfolioData'

interface SidebarProps {
  onSearchClick: () => void
}

function Sidebar({ onSearchClick }: SidebarProps) {
  return (
    <aside className="fixed inset-y-0 left-0 hidden w-[220px] flex-col justify-between border-r border-border p-8 lg:flex">
      <div className="flex flex-col gap-8">
        <a href="#home" className="font-semibold">
          {siteMeta.brand}
        </a>

        <nav className="flex flex-col gap-3 text-sm">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-muted-foreground hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          onClick={onSearchClick}
          className="flex items-center gap-2 rounded-md border border-border px-3 py-1.5 text-sm text-muted-foreground"
        >
          <Search className="size-4" />
          {siteMeta.searchLabel}
          <kbd className="ml-auto rounded border border-border px-1.5 py-0.5 font-sans text-xs">
            {siteMeta.searchShortcut}
          </kbd>
        </button>

        <Button size="sm" render={<a href={siteMeta.cvUrl} target="_blank" rel="noreferrer" />}>
          {siteMeta.cvLabel}
        </Button>
      </div>

      <div className="flex flex-col gap-3 border-t border-border pt-4 text-xs text-muted-foreground">
        <div className="flex gap-3">
          <a
            href={socialLinks.github.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            {socialLinks.github.label}
          </a>
          <a
            href={socialLinks.linkedin.href}
            target="_blank"
            rel="noreferrer"
            className="hover:text-foreground"
          >
            {socialLinks.linkedin.label}
          </a>
        </div>
        <p>{siteMeta.sidebarCopyright}</p>
      </div>
    </aside>
  )
}

export default Sidebar
