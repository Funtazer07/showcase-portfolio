import { useEffect, useState } from 'react'
import type { NavItem } from '@/data/portfolioData'

/** Distance from the top of the viewport treated as the "current section" line. */
const ACTIVATION_OFFSET = 100

export function useActiveSection(items: NavItem[]): string {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? '')

  useEffect(() => {
    const sections = items
      .map((item) => ({ href: item.href, el: document.getElementById(item.href.slice(1)) }))
      .filter((section): section is { href: string; el: HTMLElement } => section.el !== null)

    if (sections.length === 0) return

    function updateActiveSection() {
      let current = sections[0].href
      for (const section of sections) {
        if (section.el.getBoundingClientRect().top <= ACTIVATION_OFFSET) {
          current = section.href
        }
      }
      setActiveHref(current)
    }

    updateActiveSection()

    let ticking = false
    function onScroll() {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        updateActiveSection()
        ticking = false
      })
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [items])

  return activeHref
}
