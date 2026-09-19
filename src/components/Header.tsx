import { Search } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { navItems, siteMeta } from '@/data/portfolioData'
import { getShortcutLabel } from '@/lib/platform'
import { useActiveSection } from '@/lib/useActiveSection'

interface HeaderProps {
  onSearchClick: () => void
}

function Header({ onSearchClick }: HeaderProps) {
  const shortcutLabel = getShortcutLabel(siteMeta.searchShortcut)
  const activeHref = useActiveSection(navItems)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur lg:hidden">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-6 py-4">
        <a href="#home" className="font-semibold">
          {siteMeta.brand}
        </a>

        <nav className="hidden gap-6 text-sm text-muted-foreground sm:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              aria-current={item.href === activeHref ? 'true' : undefined}
              className={
                item.href === activeHref
                  ? 'font-semibold text-primary'
                  : 'hover:text-foreground'
              }
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onSearchClick}
            aria-label={`${siteMeta.searchLabel} (${shortcutLabel})`}
            className="flex items-center gap-2 rounded-md border border-border px-2.5 py-1.5 text-sm text-muted-foreground sm:px-3"
          >
            <Search className="size-4" />
            <span className="hidden sm:inline">{siteMeta.searchLabel}</span>
            <kbd className="hidden rounded border border-border px-1.5 py-0.5 font-sans text-xs sm:inline-block">
              {shortcutLabel}
            </kbd>
          </button>
          <Button size="sm" render={<a href={siteMeta.cvUrl} target="_blank" rel="noreferrer" />}>
            {siteMeta.cvLabel}
          </Button>
        </div>
      </div>
    </header>
  )
}

export default Header
