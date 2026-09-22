import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { toast } from '@/components/ui/toast'
import { contactContent, socialLinks } from '@/data/portfolioData'
import { copyToClipboard } from '@/lib/clipboard'
import Footer from './Footer'

vi.mock('@/lib/clipboard', () => ({
  copyToClipboard: vi.fn(),
}))

describe('Footer', () => {
  it('renders the contact heading, subheading, email, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: contactContent.heading })).toBeInTheDocument()
    expect(screen.getByText(contactContent.subheading)).toBeInTheDocument()
    expect(screen.getByText(contactContent.email)).toBeInTheDocument()
    expect(screen.getByText(contactContent.copyright)).toBeInTheDocument()
  })

  it('links GitHub and LinkedIn to the real profiles in a new tab', () => {
    render(<Footer />)

    const github = screen.getByRole('link', { name: socialLinks.github.label })
    expect(github).toHaveAttribute('href', socialLinks.github.href)
    expect(github).toHaveAttribute('target', '_blank')

    const linkedin = screen.getByRole('link', { name: socialLinks.linkedin.label })
    expect(linkedin).toHaveAttribute('href', socialLinks.linkedin.href)
    expect(linkedin).toHaveAttribute('target', '_blank')
  })

  it('copies the email and shows a success toast when the copy succeeds', async () => {
    vi.mocked(copyToClipboard).mockResolvedValue(true)
    const toastAdd = vi.spyOn(toast, 'add')
    const user = userEvent.setup()

    render(<Footer />)
    await user.click(screen.getByRole('button', { name: contactContent.copyEmailLabel }))

    expect(copyToClipboard).toHaveBeenCalledWith(contactContent.email)
    expect(toastAdd).toHaveBeenCalledWith(
      expect.objectContaining({ title: contactContent.copiedTitle, type: 'success' })
    )
  })

  it('shows an error toast when every copy method fails', async () => {
    vi.mocked(copyToClipboard).mockResolvedValue(false)
    const toastAdd = vi.spyOn(toast, 'add')
    const user = userEvent.setup()

    render(<Footer />)
    await user.click(screen.getByRole('button', { name: contactContent.copyEmailLabel }))

    expect(toastAdd).toHaveBeenCalledWith(
      expect.objectContaining({ title: contactContent.copyErrorTitle, type: 'error' })
    )
  })
})
