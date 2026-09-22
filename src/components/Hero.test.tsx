import { render, screen } from '@testing-library/react'
import { beforeEach, describe, expect, it, vi } from 'vitest'
import { heroContent, socialLinks } from '@/data/portfolioData'
import Hero from './Hero'

describe('Hero', () => {
  beforeEach(() => {
    // avoid depending on TypedName's timer-based animation in these tests
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

  it('renders the full name as an accessible heading', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        level: 1,
        name: `${heroContent.titlePrefix}${heroContent.name}`,
      })
    ).toBeInTheDocument()
  })

  it('renders the bio', () => {
    render(<Hero />)
    expect(screen.getByText(heroContent.bio)).toBeInTheDocument()
  })

  it('points the primary and secondary CTAs at the right sections', () => {
    render(<Hero />)
    expect(
      screen.getByRole('button', { name: heroContent.primaryCtaLabel })
    ).toHaveAttribute('href', '#projects')
    expect(
      screen.getByRole('button', { name: heroContent.secondaryCtaLabel })
    ).toHaveAttribute('href', '#contact')
  })

  it('links the GitHub and LinkedIn icon buttons to the real profiles', () => {
    render(<Hero />)
    expect(
      screen.getByRole('button', { name: socialLinks.github.label })
    ).toHaveAttribute('href', socialLinks.github.href)
    expect(
      screen.getByRole('button', { name: socialLinks.linkedin.label })
    ).toHaveAttribute('href', socialLinks.linkedin.href)
  })

  it('renders the profile photo with descriptive alt text', () => {
    render(<Hero />)
    const photo = screen.getByRole('img', { name: heroContent.photoAlt })
    expect(photo).toHaveAttribute('src', heroContent.photoUrl)
  })
})
