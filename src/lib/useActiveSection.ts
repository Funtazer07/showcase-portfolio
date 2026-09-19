import { useEffect, useState } from 'react'
import type { NavItem } from '@/data/portfolioData'

export function useActiveSection(items: NavItem[]): string {
  const [activeHref, setActiveHref] = useState(items[0]?.href ?? '')

  useEffect(() => {
    const sections = items
      .map((item) => document.getElementById(item.href.slice(1)))
      .filter((el): el is HTMLElement => el !== null)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)

        if (visible[0]) {
          setActiveHref(`#${visible[0].target.id}`)
        }
      },
      { rootMargin: '-45% 0px -50% 0px' }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [items])

  return activeHref
}
