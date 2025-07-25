export type SlideType = 'title' | 'content' | 'split' | 'emoji-list';

export interface Slide {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
  subtitleImage?: string;
  subtitleAfter?: string;
  content?: string | string[];
  bullets?: string[];
  leftContent?: {
    title: string;
    items: string[];
  };
  rightContent?: {
    title: string;
    items: string[];
  };
  emojiItems?: Array<{
    emoji: string;
    title: string;
    description: string;
    link?: string;
  }>;
  specialComponent?: 'tier-cards' | 'code-commands' | 'git-sidebar-image' | 'hooks-image' | 'ultrathink-image' | 'auto-accept-edits-image';
  backgroundImage?: string;
  links?: Array<{
    text: string;
    url: string;
  }>;
  footer?: string;
  notes?: string;
  githubLink?: string;
}

export interface SlideNavigation {
  currentSlide: number;
  totalSlides: number;
  nextSlide: () => void;
  previousSlide: () => void;
  goToSlide: (slideNumber: number) => void;
}

export interface ResourceLink {
  title: string;
  url: string;
  description?: string;
  category: 'guardrails' | 'commands' | 'tools' | 'templates' | 'docs';
}

export interface TierCardProps {
  emoji: string;
  title: string;
  description: string;
  color: 'green' | 'blue' | 'yellow';
}

export interface ArrowDiagramStep {
  id: string;
  label: string;
  position: {
    x: number;
    y: number;
  };
}