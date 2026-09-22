import '@testing-library/jest-dom/vitest'
import { vi } from 'vitest'

if (!window.matchMedia) {
  window.matchMedia = vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }))
}

if (!('ResizeObserver' in window)) {
  class ResizeObserverStub {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
  }
  // @ts-expect-error -- test-only polyfill
  window.ResizeObserver = ResizeObserverStub
}

if (!('IntersectionObserver' in window)) {
  class IntersectionObserverStub {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
    takeRecords = vi.fn(() => [])
  }
  // @ts-expect-error -- test-only polyfill
  window.IntersectionObserver = IntersectionObserverStub
}

Element.prototype.scrollIntoView ??= vi.fn()
Element.prototype.hasPointerCapture ??= vi.fn(() => false)
Element.prototype.setPointerCapture ??= vi.fn()
Element.prototype.releasePointerCapture ??= vi.fn()

// jsdom doesn't implement execCommand at all; stub it as a real function so
// tests can vi.spyOn() it to simulate the clipboard fallback path.
document.execCommand ??= () => false
