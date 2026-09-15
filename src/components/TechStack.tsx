import { Braces, Layers, Wrench } from 'lucide-react'
import {
  siteMeta,
  techCategoryLabels,
  techStack,
  type TechCategory,
} from '@/data/portfolioData'

const categoryOrder: TechCategory[] = ['language', 'framework', 'tooling-ui']

const categoryIcon: Record<TechCategory, typeof Braces> = {
  language: Braces,
  framework: Layers,
  'tooling-ui': Wrench,
}

const categoryIconBg: Record<TechCategory, string> = {
  language: 'bg-[#3d7ae5]',
  framework: 'bg-[#47c7bf]',
  'tooling-ui': 'bg-[#e58c4d]',
}

function TechStack() {
  return (
    <section id="stack" className="mt-16 flex scroll-mt-20 flex-col gap-4">
      <h2 className="text-2xl font-semibold tracking-tight">
        {siteMeta.techStackHeading}
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {categoryOrder.map((category) => {
          const Icon = categoryIcon[category]
          const items = techStack.filter((tech) => tech.category === category)

          return (
            <div
              key={category}
              className="flex flex-col gap-4 rounded-xl border border-border bg-card p-6"
            >
              <span
                className={`flex size-8 items-center justify-center rounded-lg text-white ${categoryIconBg[category]}`}
              >
                <Icon className="size-4" />
              </span>
              <h3 className="text-sm font-semibold">
                {techCategoryLabels[category]}
              </h3>
              <ul className="flex flex-col gap-2 font-mono text-[13px] text-muted-foreground">
                {items.map((tech) => (
                  <li key={tech.name} className="flex items-center gap-2">
                    <span aria-hidden className="text-primary">
                      /
                    </span>
                    {tech.name}
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default TechStack
