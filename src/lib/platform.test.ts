import { afterEach, describe, expect, it, vi } from 'vitest'
import { getShortcutLabel } from './platform'

function setUserAgent(userAgent: string) {
  Object.defineProperty(navigator, 'userAgent', {
    value: userAgent,
    configurable: true,
  })
}

const ORIGINAL_USER_AGENT = navigator.userAgent

describe('getShortcutLabel', () => {
  afterEach(() => {
    setUserAgent(ORIGINAL_USER_AGENT)
  })

  it('returns the Mac shortcut symbol on macOS user agents', () => {
    setUserAgent(
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15'
    )

    expect(getShortcutLabel()).toBe('⌘K')
  })

  it('returns the Mac shortcut symbol on iPhone user agents', () => {
    setUserAgent('Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X)')

    expect(getShortcutLabel()).toBe('⌘K')
  })

  it('returns the fallback on non-Mac user agents', () => {
    setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64)')

    expect(getShortcutLabel()).toBe('Ctrl K')
  })

  it('returns a custom fallback when provided', () => {
    setUserAgent('Mozilla/5.0 (X11; Linux x86_64)')

    expect(getShortcutLabel('Ctrl+K')).toBe('Ctrl+K')
  })

  it('returns the fallback when navigator is unavailable', () => {
    vi.stubGlobal('navigator', undefined)

    expect(getShortcutLabel()).toBe('Ctrl K')

    vi.unstubAllGlobals()
  })
})
