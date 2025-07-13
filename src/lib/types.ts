export type SlideType = 'title' | 'content' | 'split' | 'emoji-list';

export interface Slide {
  id: number;
  type: SlideType;
  title: string;
  subtitle?: string;
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
  specialComponent?: 'arrow-diagram' | 'tier-cards' | 'code-commands';
  links?: Array<{
    text: string;
    url: string;
  }>;
  footer?: string;
  notes?: string;
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