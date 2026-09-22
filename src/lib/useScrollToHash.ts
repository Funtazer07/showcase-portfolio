import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function useScrollToHash() {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const el = document.getElementById(hash.slice(1))
    // Instant, not smooth: this fires on initial load/route change, matching
    // how a browser's native scroll-to-fragment behaves (never animated).
    el?.scrollIntoView({ behavior: 'instant', block: 'start' })
  }, [hash])
}
