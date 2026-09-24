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
  caseStudyLabel: string
  cvUrl: string
  cvLabel: string
  searchLabel: string
  searchShortcut: string
  sidebarCopyright: string
}

export interface ProjectDetailPageContent {
  backToProjectsLabel: string
  challengeLabel: string
  solutionLabel: string
  resultLabel: string
  techStackUsedLabel: string
  nextProjectLabel: string
  notFoundTitle: string
  notFoundBody: string
  backHomeLabel: string
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

export interface ProjectStat {
  value: string
  label: string
}

export interface ProjectDetail {
  metaBadges: string[]
  summary: string
  challenge: string
  solution: string
  result: string
  stats: ProjectStat[]
  /** Shown in place of a hero screenshot when none can be published (e.g. confidential systems). */
  screenshotsNote?: string
}

export interface Project {
  id: string
  title: string
  description: string
  /** Names matching `TechStackItem.name` entries in `techStack`, or a project-specific tag. */
  techStack: string[]
  /** Specific engineering solutions worth calling out (state optimization, type safety, test coverage, etc.). */
  highlights: string[]
  /** Public source/demo links, when they exist. Internal or confidential projects may have neither. */
  repoUrl?: string
  demoUrl?: string
  featured?: boolean
  /** Present for projects with a full case-study page at /projects/:id. */
  detail?: ProjectDetail
}

export const siteMeta: SiteMeta = {
  brand: 'AD.',
  projectsHeading: 'Featured Projects',
  techStackHeading: 'Tech Stack',
  repoLinkLabel: '$ source',
  demoLinkLabel: '$ live',
  caseStudyLabel: '$ details',
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

export const projectDetailPageContent: ProjectDetailPageContent = {
  backToProjectsLabel: 'Back to projects',
  challengeLabel: 'The Challenge',
  solutionLabel: 'The Solution',
  resultLabel: 'The Result',
  techStackUsedLabel: 'Tech Stack Used',
  nextProjectLabel: 'Next project:',
  notFoundTitle: 'Project not found',
  notFoundBody: "That project doesn't exist or may have moved.",
  backHomeLabel: 'Back to home',
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
    id: 'stockui-warehouse-improvements',
    title: 'StockUI Warehouse Workflow Improvements',
    description:
      'Resolved prioritized user-reported issues in a warehouse mobile web app used daily for inbound deliveries, picking, and inventory control — improving workflow clarity while preserving ERP compatibility.',
    techStack: ['C#', 'React', 'ERP integration'],
    highlights: [
      'Shipped 8 prioritized fixes end to end, from delivery context to over-delivery handling',
      'Split Awaiting Labelling into its own screen, separated from the general picking flow',
      'Worked in Jira-tracked sprints with regular retrospectives alongside the warehouse team',
    ],
    featured: true,
    detail: {
      metaBadges: ['Web App', 'Completed', 'Company: Latakko SIA'],
      summary:
        'StockUI is a mobile web application warehouse employees rely on throughout the day for article lookup, inbound deliveries, picking, stock movements, and inventory control. This internship focused on resolving the highest-impact, user-reported issues while preserving ERP compatibility, working in Jira-tracked sprints with regular retrospectives.',
      challenge:
        'Warehouse staff reported workflow friction, unclear feedback, and synchronization issues between StockUI and the ERP backend — slowing down inbound deliveries, picking, and inventory checks, and adding extra load on the service desk.',
      solution:
        'Resolved the highest-impact issues incrementally across sprints: added delivery context and ticket comments, corrected Ready/Unloading status transitions, built a confirmable over-delivery flow, and separated Awaiting Labelling into its own screen with a more reliable label-reprinting flow.',
      result:
        'Warehouse employees complete deliveries with less confusion and fewer repeated steps. Status-transition and over-delivery logic are protected by unit tests and validated through code review before release.',
      stats: [
        { value: '8', label: 'Prioritized fixes shipped' },
        { value: '4', label: 'Workflows improved' },
        { value: 'C# / React', label: 'Tech stack' },
      ],
      screenshotsNote: 'Screenshots omitted — internal warehouse system with real client data.',
    },
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
