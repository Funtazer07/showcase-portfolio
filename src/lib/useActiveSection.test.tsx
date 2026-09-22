import { act, renderHook } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import type { NavItem } from '@/data/portfolioData'
import { useActiveSection } from './useActiveSection'

const items: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
]

function mockRect(top: number): DOMRect {
  return {
    top,
    bottom: top + 400,
    left: 0,
    right: 0,
    width: 0,
    height: 400,
    x: 0,
    y: top,
    toJSON: () => ({}),
  }
}

function createSection(id: string, top: number) {
  const el = document.createElement('div')
  el.id = id
  el.getBoundingClientRect = vi.fn(() => mockRect(top))
  document.body.appendChild(el)
  return el
}

describe('useActiveSection', () => {
  beforeEach(() => {
    // run the rAF-throttled scroll handler synchronously in tests
    vi.stubGlobal('requestAnimationFrame', (cb: FrameRequestCallback) => {
      cb(0)
      return 0
    })
  })

  afterEach(() => {
    document.body.innerHTML = ''
    vi.unstubAllGlobals()
  })

  it('defaults to the first item when no sections exist in the DOM', () => {
    const { result } = renderHook(() => useActiveSection(items))
    expect(result.current).toBe('#home')
  })

  it('picks the section whose top has crossed the activation line on mount', () => {
    createSection('home', -50)
    createSection('projects', 500)
    createSection('stack', 1000)

    const { result } = renderHook(() => useActiveSection(items))

    expect(result.current).toBe('#home')
  })

  it('updates the active section as the page scrolls', () => {
    const home = createSection('home', 0)
    const projects = createSection('projects', 500)
    createSection('stack', 1000)

    const { result } = renderHook(() => useActiveSection(items))
    expect(result.current).toBe('#home')

    // simulate scrolling down: home and projects have both crossed the
    // activation line, projects is last so it should win
    home.getBoundingClientRect = vi.fn(() => mockRect(-600))
    projects.getBoundingClientRect = vi.fn(() => mockRect(-20))

    act(() => {
      window.dispatchEvent(new Event('scroll'))
    })

    expect(result.current).toBe('#projects')
  })

  it('removes the scroll listener on unmount', () => {
    createSection('home', 0)
    createSection('projects', 500)
    createSection('stack', 1000)

    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener')
    const { unmount } = renderHook(() => useActiveSection(items))

    unmount()

    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function))
  })
})
