import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import {
  commandMenuContent,
  contactContent,
  siteMeta,
} from '@/data/portfolioData'
import App from './App'

describe('App', () => {
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

  it('renders every major section', () => {
    render(<App />)

    expect(screen.getByRole('heading', { name: siteMeta.projectsHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: siteMeta.techStackHeading })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: contactContent.heading })).toBeInTheDocument()
  })

  it('opens the command palette with Ctrl+K and closes it with Ctrl+K again', async () => {
    const user = userEvent.setup()
    render(<App />)

    expect(
      screen.queryByPlaceholderText(commandMenuContent.placeholder)
    ).not.toBeInTheDocument()

    await user.keyboard('{Control>}k{/Control}')
    expect(screen.getByPlaceholderText(commandMenuContent.placeholder)).toBeInTheDocument()

    await user.keyboard('{Control>}k{/Control}')
    expect(
      screen.queryByPlaceholderText(commandMenuContent.placeholder)
    ).not.toBeInTheDocument()
  })

  it('opens the command palette from the header search button', async () => {
    const user = userEvent.setup()
    render(<App />)

    const searchButtons = screen.getAllByRole('button', { name: /search/i })
    await user.click(searchButtons[0])

    expect(screen.getByPlaceholderText(commandMenuContent.placeholder)).toBeInTheDocument()
  })
})
