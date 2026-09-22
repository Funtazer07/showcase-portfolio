import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { navItems, siteMeta } from '@/data/portfolioData'
import { render, screen } from '@/test/render'
import Header from './Header'

describe('Header', () => {
  it('renders the brand link pointing at #home', () => {
    render(<Header onSearchClick={vi.fn()} />)
    const brand = screen.getByRole('link', { name: siteMeta.brand })
    expect(brand).toHaveAttribute('href', '/#home')
  })

  it('renders every nav item as a link to its section', () => {
    render(<Header onSearchClick={vi.fn()} />)
    for (const item of navItems) {
      expect(screen.getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        `/${item.href}`
      )
    }
  })

  it('calls onSearchClick when the search button is clicked', async () => {
    const onSearchClick = vi.fn()
    const user = userEvent.setup()
    render(<Header onSearchClick={onSearchClick} />)

    await user.click(screen.getByRole('button', { name: /search/i }))

    expect(onSearchClick).toHaveBeenCalledTimes(1)
  })

  it('links the Resume button to the CV, opening in a new tab', () => {
    render(<Header onSearchClick={vi.fn()} />)
    const resumeLink = screen.getByRole('button', { name: siteMeta.cvLabel })

    expect(resumeLink).toHaveAttribute('href', siteMeta.cvUrl)
    expect(resumeLink).toHaveAttribute('target', '_blank')
    expect(resumeLink).toHaveAttribute('rel', 'noreferrer')
  })
})
