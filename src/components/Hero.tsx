import { Code2, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroContent, socialLinks } from '@/data/portfolioData'

function Hero() {
  return (
    <section
      id="home"
      className="flex scroll-mt-20 flex-col items-center gap-6 px-6 py-24 text-center sm:py-32"
    >
      <span className="text-xs font-medium tracking-widest text-muted-foreground uppercase">
        {heroContent.eyebrow}
      </span>
      <p className="font-mono text-sm text-muted-foreground">
        {heroContent.terminalLine}
      </p>
      <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
        {heroContent.title}
      </h1>
      <p className="max-w-xl text-muted-foreground">{heroContent.bio}</p>

      <div className="flex flex-wrap items-center justify-center gap-3">
        <Button render={<a href="#projects" />}>
          {heroContent.primaryCtaLabel}
        </Button>
        <Button variant="outline" render={<a href="#contact" />}>
          {heroContent.secondaryCtaLabel}
        </Button>
        <Button
          variant="ghost"
          size="icon"
          render={
            <a
              href={socialLinks.github.href}
              target="_blank"
              rel="noreferrer"
              aria-label={socialLinks.github.label}
            />
          }
        >
          <Code2 className="size-4" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          render={
            <a
              href={socialLinks.linkedin.href}
              target="_blank"
              rel="noreferrer"
              aria-label={socialLinks.linkedin.label}
            />
          }
        >
          <Link2 className="size-4" />
        </Button>
      </div>
    </section>
  )
}

export default Hero
