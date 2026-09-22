import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import TypedName from './TypedName'

function mockMatchMedia(matches: boolean) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

describe('TypedName', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('types the text out character by character', () => {
    mockMatchMedia(false)
    vi.useFakeTimers()

    const { container } = render(<TypedName text="Hi" />)

    expect(container.textContent).toBe('')

    act(() => {
      vi.advanceTimersByTime(70)
    })
    expect(container.textContent).toBe('H')

    act(() => {
      vi.advanceTimersByTime(70)
    })
    expect(container.textContent).toBe('Hi')
  })

  it('shows a blinking cursor once typing completes', () => {
    mockMatchMedia(false)
    vi.useFakeTimers()

    const { container } = render(<TypedName text="Hi" />)
    const cursor = container.querySelector('[aria-hidden]')
    expect(cursor?.className).not.toContain('animate-')

    act(() => {
      vi.advanceTimersByTime(140)
    })

    expect(cursor?.className).toContain('animate-')
  })

  it('renders the full text immediately when reduced motion is preferred', () => {
    mockMatchMedia(true)

    const { container } = render(<TypedName text="Andrejs Dvoskins" />)

    expect(container.textContent).toBe('Andrejs Dvoskins')
    const cursor = container.querySelector('[aria-hidden]')
    expect(cursor?.className).toContain('animate-')
  })
})
