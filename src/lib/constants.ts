export const PRESENTATION_CONFIG = {
  title: "You're Absolutely Right!",
  subtitle: "Some ideas and approaches I've been finding useful with AI",
  date: "July 15, 2025",
  totalSlides: 12,
  slideTransitionDuration: 300,
  keyboardShortcuts: {
    next: ['ArrowRight', ' ', 'Enter'],
    previous: ['ArrowLeft'],
    home: ['Home'],
    end: ['End'],
  },
} as const;

export const THEME = {
  colors: {
    background: '#0a0a0a',
    foreground: '#ffffff',
    primary: '#3b82f6',
    secondary: '#8b5cf6',
    success: '#10b981',
    warning: '#f59e0b',
    danger: '#ef4444',
    muted: '#6b7280',
  },
  fontSize: {
    title: 'text-6xl md:text-7xl lg:text-8xl',
    subtitle: 'text-3xl md:text-4xl lg:text-5xl',
    heading: 'text-4xl md:text-5xl lg:text-6xl',
    body: 'text-xl md:text-2xl lg:text-3xl',
    small: 'text-lg md:text-xl lg:text-2xl',
  },
  spacing: {
    slide: 'p-8 md:p-12 lg:p-16',
    section: 'mb-8 md:mb-12',
    item: 'mb-4 md:mb-6',
  },
} as const;

export const RESOURCE_CATEGORIES = {
  guardrails: 'Guardrails Examples',
  commands: 'Command Gists',
  tools: 'Tool Links',
  templates: 'Templates',
  docs: 'Documentation',
} as const;

export const TIER_COLORS = {
  green: {
    border: 'border-green-500',
    bg: 'bg-green-500/10',
    text: 'text-green-400',
  },
  blue: {
    border: 'border-blue-500',
    bg: 'bg-blue-500/10',
    text: 'text-blue-400',
  },
  yellow: {
    border: 'border-yellow-500',
    bg: 'bg-yellow-500/10',
    text: 'text-yellow-400',
  },
} as const;