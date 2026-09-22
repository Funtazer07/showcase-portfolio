import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { navItems, siteMeta, socialLinks } from '@/data/portfolioData'
import Sidebar from './Sidebar'

describe('Sidebar', () => {
  it('renders every nav item as a link to its section', () => {
    render(<Sidebar onSearchClick={vi.fn()} />)
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        item.href
      )
    }
  })

  it('calls onSearchClick when the search button is clicked', async () => {
    const onSearchClick = vi.fn()
    const user = userEvent.setup()
    render(<Sidebar onSearchClick={onSearchClick} />)

    await user.click(screen.getByRole('button', { name: /search/i }))

    expect(onSearchClick).toHaveBeenCalledTimes(1)
  })

  it('links GitHub and LinkedIn to their real profiles in a new tab', () => {
    render(<Sidebar onSearchClick={vi.fn()} />)

    const github = screen.getByRole('link', { name: socialLinks.github.label })
    expect(github).toHaveAttribute('href', socialLinks.github.href)
    expect(github).toHaveAttribute('target', '_blank')

    const linkedin = screen.getByRole('link', { name: socialLinks.linkedin.label })
    expect(linkedin).toHaveAttribute('href', socialLinks.linkedin.href)
    expect(linkedin).toHaveAttribute('target', '_blank')
  })

  it('renders the sidebar copyright notice', () => {
    render(<Sidebar onSearchClick={vi.fn()} />)
    expect(screen.getByText(siteMeta.sidebarCopyright)).toBeInTheDocument()
  })
})
