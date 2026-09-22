import { describe, expect, it } from 'vitest'
import { cn } from './utils'

describe('cn', () => {
  it('merges class names, dropping falsy values', () => {
    const showB: boolean = false
    expect(cn('a', showB && 'b', undefined, 'c')).toBe('a c')
  })

  it('resolves conflicting Tailwind classes in favor of the last one', () => {
    expect(cn('px-2', 'px-4')).toBe('px-4')
  })
})
