export interface NavItem {
  label: string
  href: string
}

export interface SiteMeta {
  brand: string
  projectsHeading: string
  techStackHeading: string
  repoLinkLabel: string
  demoLinkLabel: string
}

export type TechCategory = 'language' | 'framework' | 'tooling-ui'

export interface TechStackItem {
  name: string
  category: TechCategory
}

export interface Project {
  id: string
  title: string
  description: string
  /** Names matching `TechStackItem.name` entries in `techStack`, or a project-specific tag. */
  techStack: string[]
  repoUrl: string
  demoUrl: string
  featured?: boolean
}

export const siteMeta: SiteMeta = {
  brand: 'AD.',
  projectsHeading: 'Featured Projects',
  techStackHeading: 'Tech Stack',
  repoLinkLabel: '$ source',
  demoLinkLabel: '$ live',
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Projects', href: '#projects' },
  { label: 'Stack', href: '#stack' },
  { label: 'About', href: '#about' },
]

export const techStack: TechStackItem[] = [
  { name: 'TypeScript (strict)', category: 'language' },
  { name: 'JavaScript (ES6+)', category: 'language' },
  { name: 'React (Vite)', category: 'framework' },
  { name: 'Next.js', category: 'framework' },
  { name: 'Tailwind CSS', category: 'tooling-ui' },
  { name: 'Shadcn UI / Radix', category: 'tooling-ui' },
  { name: 'Lucide React', category: 'tooling-ui' },
]

export const projects: Project[] = [
  {
    id: 'ecommerce-platform-redesign',
    title: 'E-commerce Platform Redesign',
    description:
      'Rebuilt a legacy checkout flow into a fast, accessible React application, cutting cart abandonment.',
    techStack: ['React', 'TypeScript', 'Stripe'],
    repoUrl: 'https://github.com/Funtazer07/TODO-ecommerce-platform-redesign',
    demoUrl: 'https://TODO-ecommerce-platform-redesign.example.com',
    featured: true,
  },
  {
    id: 'saas-analytics-dashboard',
    title: 'SaaS Analytics Dashboard',
    description:
      'Real-time metrics dashboard with customizable widgets for usage, retention, and revenue data.',
    techStack: ['Next.js', 'TanStack Query', 'Tailwind'],
    repoUrl: 'https://github.com/Funtazer07/TODO-saas-analytics-dashboard',
    demoUrl: 'https://TODO-saas-analytics-dashboard.example.com',
    featured: true,
  },
]
