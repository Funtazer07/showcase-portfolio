import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { aboutContent } from '@/data/portfolioData'
import About from './About'

describe('About', () => {
  it('renders the heading, bio, and tags', () => {
    render(<About />)

    expect(
      screen.getByRole('heading', { name: aboutContent.heading })
    ).toBeInTheDocument()
    expect(screen.getByText(aboutContent.bio)).toBeInTheDocument()

    for (const tag of aboutContent.tags) {
      expect(screen.getByText(tag)).toBeInTheDocument()
    }
  })

  it('renders the code snippet with numbered lines matching the source', () => {
    render(<About />)

    const lines = aboutContent.code.split('\n')
    const codeBlock = screen.getByText(aboutContent.codeLabel).closest('div')?.parentElement
    expect(codeBlock).not.toBeNull()

    lines.forEach((line, index) => {
      expect(screen.getByText(String(index + 1))).toBeInTheDocument()
      if (line.trim().length > 0) {
        expect(screen.getByText(line.trim())).toBeInTheDocument()
      }
    })
  })
})
