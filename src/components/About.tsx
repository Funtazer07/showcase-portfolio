import { aboutContent } from '@/data/portfolioData'

function About() {
  const codeLines = aboutContent.code.split('\n')

  return (
    <section id="about" className="mt-16 grid scroll-mt-20 gap-8 sm:grid-cols-2">
      <div className="flex flex-col gap-4">
        <h2 className="text-2xl font-semibold tracking-tight">
          {aboutContent.heading}
        </h2>
        <p className="text-sm text-muted-foreground">{aboutContent.bio}</p>
        <div className="flex flex-wrap gap-2">
          {aboutContent.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="border-b border-border px-4 py-2.5 text-xs text-muted-foreground">
          {aboutContent.codeLabel}
        </div>
        <pre
          tabIndex={0}
          role="group"
          aria-label={`${aboutContent.codeLabel} source`}
          className="overflow-x-auto p-4 font-mono text-[13px] leading-relaxed focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-ring"
        >
          <code>
            {codeLines.map((line, index) => (
              <div key={index} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="w-4 shrink-0 select-none text-right text-muted-foreground"
                >
                  {index + 1}
                </span>
                <span className="text-card-foreground">{line}</span>
              </div>
            ))}
          </code>
        </pre>
      </div>
    </section>
  )
}

export default About
