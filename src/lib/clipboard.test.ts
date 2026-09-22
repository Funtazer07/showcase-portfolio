import { afterEach, describe, expect, it, vi } from 'vitest'
import { copyToClipboard } from './clipboard'

/**
 * jsdom's real `navigator.clipboard` self-reinstalls via a lazy getter, so
 * mutating properties on it directly gets silently undone. Replacing the
 * whole `navigator` global for the duration of a test sidesteps that. This
 * file renders nothing, so it's safe to swap navigator out entirely.
 */
function mockClipboard(writeText: ((text: string) => Promise<void>) | undefined) {
  vi.stubGlobal('navigator', {
    userAgent: navigator.userAgent,
    clipboard: writeText ? { writeText } : undefined,
  })
}

describe('copyToClipboard', () => {
  afterEach(() => {
    vi.unstubAllGlobals()
    vi.restoreAllMocks()
  })

  it('returns true and uses the Clipboard API when available', async () => {
    const writeText = vi.fn().mockResolvedValue(undefined)
    mockClipboard(writeText)

    const result = await copyToClipboard('hello@andrejsdvoskins.dev')

    expect(result).toBe(true)
    expect(writeText).toHaveBeenCalledWith('hello@andrejsdvoskins.dev')
  })

  it('falls back to execCommand when the Clipboard API is unavailable', async () => {
    mockClipboard(undefined)
    const execCommand = vi.spyOn(document, 'execCommand').mockReturnValue(true)

    const result = await copyToClipboard('fallback text')

    expect(result).toBe(true)
    expect(execCommand).toHaveBeenCalledWith('copy')
  })

  it('falls back to execCommand when the Clipboard API rejects', async () => {
    mockClipboard(vi.fn().mockRejectedValue(new Error('denied')))
    const execCommand = vi.spyOn(document, 'execCommand').mockReturnValue(true)

    const result = await copyToClipboard('denied text')

    expect(result).toBe(true)
    expect(execCommand).toHaveBeenCalledWith('copy')
  })

  it('returns false when every copy method fails', async () => {
    mockClipboard(undefined)
    vi.spyOn(document, 'execCommand').mockReturnValue(false)

    const result = await copyToClipboard('unlucky text')

    expect(result).toBe(false)
  })

  it('removes the temporary textarea it creates for the fallback', async () => {
    mockClipboard(undefined)
    vi.spyOn(document, 'execCommand').mockReturnValue(true)

    await copyToClipboard('cleanup text')

    expect(document.querySelector('textarea')).toBeNull()
  })
})
