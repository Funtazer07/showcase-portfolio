import { Code2, Link2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { heroContent, socialLinks } from '@/data/portfolioData'

function Hero() {
  return (
    <section id="home" className="scroll-mt-20 px-6 py-28 sm:py-36 lg:py-40">
      <div className="mx-auto flex max-w-5xl flex-col-reverse items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-16">
        <div className="flex flex-col items-center gap-6 text-center lg:items-start lg:text-left">
          <span className="rounded-full bg-accent px-3 py-1.5 text-sm font-semibold tracking-widest text-accent-foreground uppercase">
            {heroContent.eyebrow}
          </span>
          <p className="font-mono text-base text-muted-foreground">
            {heroContent.terminalLine}
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold tracking-tight text-balance sm:text-6xl lg:text-7xl">
            {heroContent.title}
          </h1>
          <p className="max-w-xl text-lg text-muted-foreground">{heroContent.bio}</p>

          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Button size="lg" render={<a href="#projects" />}>
              {heroContent.primaryCtaLabel}
            </Button>
            <Button size="lg" variant="outline" render={<a href="#contact" />}>
              {heroContent.secondaryCtaLabel}
            </Button>
            <Button
              variant="ghost"
              size="icon-lg"
              render={
                <a
                  href={socialLinks.github.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={socialLinks.github.label}
                />
              }
            >
              <Code2 className="size-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon-lg"
              render={
                <a
                  href={socialLinks.linkedin.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={socialLinks.linkedin.label}
                />
              }
            >
              <Link2 className="size-5" />
            </Button>
          </div>
        </div>

        <img
          src={heroContent.photoUrl}
          alt={heroContent.photoAlt}
          width={280}
          height={340}
          className="h-[320px] w-[264px] shrink-0 rounded-2xl object-cover sm:h-[400px] sm:w-[330px] lg:h-[460px] lg:w-[379px]"
        />
      </div>
    </section>
  )
}

export default Hero
