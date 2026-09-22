import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { toast } from '@/components/ui/toast'
import { commandMenuContent, navItems, siteMeta, socialLinks } from '@/data/portfolioData'
import { copyToClipboard } from '@/lib/clipboard'
import CommandMenu from './CommandMenu'

vi.mock('@/lib/clipboard', () => ({
  copyToClipboard: vi.fn(),
}))

describe('CommandMenu', () => {
  afterEach(() => {
    vi.restoreAllMocks()
    window.location.hash = ''
  })

  it('renders nothing interactive when closed', () => {
    render(<CommandMenu open={false} onOpenChange={vi.fn()} />)
    expect(screen.queryByPlaceholderText(commandMenuContent.placeholder)).not.toBeInTheDocument()
  })

  it('renders the nav and action items when open', () => {
    render(<CommandMenu open onOpenChange={vi.fn()} />)

    expect(screen.getByPlaceholderText(commandMenuContent.placeholder)).toBeInTheDocument()

    for (const item of navItems) {
      expect(screen.getByText(item.label)).toBeInTheDocument()
    }

    expect(screen.getByText(commandMenuContent.viewResumeLabel)).toBeInTheDocument()
    expect(screen.getByText(commandMenuContent.copyEmailLabel)).toBeInTheDocument()
    expect(screen.getByText(commandMenuContent.openGithubLabel)).toBeInTheDocument()
    expect(screen.getByText(commandMenuContent.openLinkedinLabel)).toBeInTheDocument()
  })

  it('navigates to the section and closes when a nav item is selected', async () => {
    const onOpenChange = vi.fn()
    const user = userEvent.setup()
    render(<CommandMenu open onOpenChange={onOpenChange} />)

    await user.click(screen.getByText('Projects'))

    expect(window.location.hash).toBe('#projects')
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('opens GitHub in a new tab and closes when selected', async () => {
    const onOpenChange = vi.fn()
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    const user = userEvent.setup()
    render(<CommandMenu open onOpenChange={onOpenChange} />)

    await user.click(screen.getByText(commandMenuContent.openGithubLabel))

    expect(openSpy).toHaveBeenCalledWith(socialLinks.github.href, '_blank', 'noreferrer')
    expect(onOpenChange).toHaveBeenCalledWith(false)
  })

  it('opens the résumé in a new tab when selected', async () => {
    const openSpy = vi.spyOn(window, 'open').mockImplementation(() => null)
    const user = userEvent.setup()
    render(<CommandMenu open onOpenChange={vi.fn()} />)

    await user.click(screen.getByText(commandMenuContent.viewResumeLabel))

    expect(openSpy).toHaveBeenCalledWith(siteMeta.cvUrl, '_blank', 'noreferrer')
  })

  it('copies the email and shows a confirmation toast when selected', async () => {
    vi.mocked(copyToClipboard).mockResolvedValue(true)
    const toastAdd = vi.spyOn(toast, 'add')
    const onOpenChange = vi.fn()
    const user = userEvent.setup()
    render(<CommandMenu open onOpenChange={onOpenChange} />)

    await user.click(screen.getByText(commandMenuContent.copyEmailLabel))

    expect(onOpenChange).toHaveBeenCalledWith(false)
    expect(copyToClipboard).toHaveBeenCalled()
    expect(toastAdd).toHaveBeenCalledWith(
      expect.objectContaining({ type: 'success' })
    )
  })

  it('filters items as the visitor types', async () => {
    const user = userEvent.setup()
    render(<CommandMenu open onOpenChange={vi.fn()} />)

    await user.type(screen.getByPlaceholderText(commandMenuContent.placeholder), 'GitHub')

    expect(screen.getByText(commandMenuContent.openGithubLabel)).toBeInTheDocument()
    expect(screen.queryByText(commandMenuContent.viewResumeLabel)).not.toBeInTheDocument()
  })
})
