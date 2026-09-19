import { useState } from 'react'
import { Check, Copy } from 'lucide-react'
import { toast } from '@/components/ui/toast'
import { contactContent, socialLinks } from '@/data/portfolioData'
import { copyToClipboard } from '@/lib/clipboard'

function Footer() {
  const [copied, setCopied] = useState(false)

  async function handleCopyEmail() {
    const succeeded = await copyToClipboard(contactContent.email)

    if (succeeded) {
      setCopied(true)
      toast.add({
        title: contactContent.copiedTitle,
        description: contactContent.copiedDescription,
        type: 'success',
      })
      setTimeout(() => setCopied(false), 2000)
    } else {
      toast.add({
        title: contactContent.copyErrorTitle,
        description: contactContent.copyErrorDescription,
        type: 'error',
      })
    }
  }

  return (
    <footer id="contact" className="mt-16 scroll-mt-20 border-t border-border py-16 text-center">
      <h2 className="text-2xl font-semibold tracking-tight">{contactContent.heading}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{contactContent.subheading}</p>

      <button
        type="button"
        onClick={handleCopyEmail}
        aria-label={contactContent.copyEmailLabel}
        className="mx-auto mt-6 flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm hover:bg-accent hover:text-accent-foreground"
      >
        {contactContent.email}
        {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
      </button>

      <div className="mt-8 flex justify-center gap-4 text-sm text-muted-foreground">
        <a
          href={socialLinks.github.href}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
        >
          {socialLinks.github.label}
        </a>
        <a
          href={socialLinks.linkedin.href}
          target="_blank"
          rel="noreferrer"
          className="hover:text-foreground"
        >
          {socialLinks.linkedin.label}
        </a>
      </div>

      <p className="mt-6 text-xs text-muted-foreground">{contactContent.copyright}</p>
    </footer>
  )
}

export default Footer
