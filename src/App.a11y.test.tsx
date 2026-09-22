import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, it, vi } from 'vitest'
import { commandMenuContent } from '@/data/portfolioData'
import { expectNoA11yViolations } from '@/test/axe'
import App from './App'

describe('App accessibility', () => {
  beforeEach(() => {
    window.matchMedia = vi.fn().mockImplementation((query: string) => ({
      matches: true,
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
  })

  it('has no axe violations on initial render', async () => {
    render(<App />)
    await expectNoA11yViolations(document.body)
  })

  it('has no axe violations with the command palette open', async () => {
    const user = userEvent.setup()
    render(<App />)

    await user.keyboard('{Control>}k{/Control}')
    await screen.findByPlaceholderText(commandMenuContent.placeholder)

    await expectNoA11yViolations(document.body)
  })
})
