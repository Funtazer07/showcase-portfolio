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
  cvUrl: string
  cvLabel: string
  searchLabel: string
  searchShortcut: string
  sidebarCopyright: string
}

export interface SocialLink {
  label: string
  href: string
}

export interface SocialLinks {
  github: SocialLink
  linkedin: SocialLink
}

export interface HeroContent {
  eyebrow: string
  terminalLine: string
  titlePrefix: string
  name: string
  bio: string
  primaryCtaLabel: string
  secondaryCtaLabel: string
  photoUrl: string
  photoAlt: string
}

export interface AboutContent {
  heading: string
  bio: string
  tags: string[]
  codeLabel: string
  code: string
}

export interface ContactContent {
  heading: string
  subheading: string
  email: string
  copyEmailLabel: string
  copiedTitle: string
  copiedDescription: string
  copyErrorTitle: string
  copyErrorDescription: string
  copyright: string
}

export interface CommandMenuContent {
  title: string
  description: string
  placeholder: string
  emptyLabel: string
  navigateGroupLabel: string
  actionsGroupLabel: string
  viewResumeLabel: string
  copyEmailLabel: string
  openGithubLabel: string
  openLinkedinLabel: string
}

export type TechCategory = 'language' | 'framework' | 'tooling-ui'

export interface TechStackItem {
  name: string
  category: TechCategory
}

export const techCategoryLabels: Record<TechCategory, string> = {
  language: 'Languages',
  framework: 'Frameworks',
  'tooling-ui': 'Tooling & UI',
}

export interface Project {
  id: string
  title: string
  description: string
  /** Names matching `TechStackItem.name` entries in `techStack`, or a project-specific tag. */
  techStack: string[]
  /** Specific engineering solutions worth calling out (state optimization, type safety, test coverage, etc.). */
  highlights: string[]
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
  cvUrl: '/resume.pdf',
  cvLabel: 'Resume',
  searchLabel: 'Search',
  searchShortcut: 'Ctrl K',
  sidebarCopyright: '© 2026 Andrejs Dvoskins',
}

export const commandMenuContent: CommandMenuContent = {
  title: 'Command Menu',
  description: 'Search for a page or action to run.',
  placeholder: 'search or run a command',
  emptyLabel: 'No results found.',
  navigateGroupLabel: '// navigate',
  actionsGroupLabel: '// actions',
  viewResumeLabel: 'View résumé',
  copyEmailLabel: 'Copy email address',
  openGithubLabel: 'Open GitHub profile',
  openLinkedinLabel: 'Open LinkedIn profile',
}

export const socialLinks: SocialLinks = {
  github: { label: 'GitHub', href: 'https://github.com/Funtazer07' },
  linkedin: { label: 'LinkedIn', href: 'https://linkedin.com/in/andrejsdvoskins/' },
}

export const heroContent: HeroContent = {
  eyebrow: '"QUIET BUILDER"',
  terminalLine: '$ whoami → frontend developer',
  titlePrefix: "Hi, I'm ",
  name: 'Andrejs Dvoskins',
  bio: 'Frontend Developer with the discipline of a World Karate Champion — building fast, type-safe, accessible interfaces with the same precision and complete follow-through I learned on the mat.',
  primaryCtaLabel: 'View Projects',
  secondaryCtaLabel: 'Get in Touch',
  photoUrl: '/hero-photo.jpg',
  photoAlt: 'Andrejs Dvoskins in a karate sparring stance at a competition',
}

export const aboutContent: AboutContent = {
  heading: 'About Me',
  bio: 'I approach frontend development as a Quiet Builder — prioritizing functional utility, architectural stability, and clarity over visual noise. My background as a World Karate Champion built the discipline, strict time management, and habit of bringing every project to a complete state that now shapes how I ship software: useful, clear, and complete.',
  tags: ['Useful', 'Clear', 'Complete'],
  codeLabel: 'about.ts',
  code: `const developer = {
  name: 'Andrejs Dvoskins',
  role: 'Frontend Developer',
  focus: ['Type Safety', 'Performance', 'UX'],
  mindset: 'Quiet Builder',
  building: 'Reliable products that solve real problems.',
};`,
}

export const contactContent: ContactContent = {
  heading: 'Say hello',
  subheading: 'Open to frontend opportunities — reach out any time.',
  email: 'hello@andrejsdvoskins.dev',
  copyEmailLabel: 'Copy email',
  copiedTitle: 'Email copied',
  copiedDescription: 'hello@andrejsdvoskins.dev is on your clipboard.',
  copyErrorTitle: 'Could not copy email',
  copyErrorDescription: 'Copy hello@andrejsdvoskins.dev manually instead.',
  copyright: '© 2026 Andrejs Dvoskins. All rights reserved.',
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
    highlights: [
      'Memoized cart state and colocated Stripe Elements to cut checkout re-renders',
      'Modeled checkout steps with discriminated unions for full type safety end to end',
      'Covered critical checkout paths with Testing Library integration tests',
    ],
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
    highlights: [
      'Cached and deduped dashboard queries with TanStack Query to cut redundant API calls',
      'Typed every widget config end to end, catching invalid chart props at compile time',
      'Unit tested the data transforms powering each widget',
    ],
    repoUrl: 'https://github.com/Funtazer07/TODO-saas-analytics-dashboard',
    demoUrl: 'https://TODO-saas-analytics-dashboard.example.com',
    featured: true,
  },
]
