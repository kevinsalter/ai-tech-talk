import { Slide } from './types';

export const slides: Slide[] = [
  // Slide 1: Title
  {
    id: 1,
    type: 'title',
    title: "You're Absolutely Right!",
    subtitle: "Some ideas and approaches I've been finding useful with AI",
    footer: "July 15, 2025",
  },

  // Slide 2: The Development Loop
  {
    id: 2,
    type: 'content',
    title: "My Development Loop",
    specialComponent: 'arrow-diagram',
  },

  // Slide 3: Three Tiers of AI Help
  {
    id: 3,
    type: 'content',
    title: "Where AI Actually Helps Me",
    specialComponent: 'tier-cards',
    footer: "*This talk focuses on Tiers 1 & 2*",
  },

  // Slide 4: Foundation - Guardrails
  {
    id: 4,
    type: 'content',
    title: "Guardrails = Confidence",
    subtitle: "My setup:",
    bullets: [
      "`claude.md` - Project context and conventions",
      "`.cursorrules` - Editor-specific instructions",
      "`docs/` folder - Living documentation",
      "Git checkpoints before AI sessions",
    ],
    content: "💡 Pro tip: I keep the git tab open in my editor sidebar now\ninstead of the file tree - helps me stay aware of changes and\nproof read what's being created while it's in progress",
    footer: "\"The more guardrails, the more confident you can be\nin 'accept all edits' mode\"",
    links: [{ text: "Can add elements from: Mobile Engineering Guidebook →", url: "#" }],
  },

  // Slide 5: Guardrails Example
  {
    id: 5,
    type: 'split',
    title: "What goes in guardrails?",
    leftContent: {
      title: "claude.md:",
      items: [
        "Tech stack details",
        "Code conventions",
        "Component patterns",
        "Common pitfalls",
      ],
    },
    rightContent: {
      title: ".cursorrules:",
      items: [
        "Import conventions",
        "File structure",
        "Testing approach",
        "Style preferences",
      ],
    },
    content: "process-task-list.md:\n- Controls AI workflow\n- One task at a time\n- Example: \"use @ai-dev-tasks/process-task-list.md\n  to start section 3.0 in @docs/dev-tasks.md\"",
  },

  // Slide 6: The Grunt Work (Tier 1)
  {
    id: 6,
    type: 'content',
    title: "What I Delegate - Things I Know Well",
    subtitle: "The obvious:",
    bullets: [
      "Forms, validation, wizards",
      "Database migrations + RLS policies",
      "Unit tests with all the mocks",
    ],
    content: "Any boilerplate:\n- Data fetching patterns\n- Zustand store structures\n- Loading states and error boundaries\n- Accessibility (a11y) improvements",
    footer: "💡 I know how to do these, AI just does them 10x faster",
  },

  // Slide 7: The Documentation Skip (Tier 2)
  {
    id: 7,
    type: 'content',
    title: "Things I Kinda Know",
    bullets: [
      "Database migrations:\n\"Create a migration for user preferences with JSON column\"\n→ Perfect Postgres syntax without checking docs",
      "RLS policies:\n\"Add policy for users to only see their own data\"\n→ Correct syntax I'd otherwise Google",
      "AWS configurations:\n\"Set up S3 bucket with proper CORS for uploads\"\n→ No more diving through AWS docs",
    ],
    footer: "✨ I understand enough to verify, but skip the research",
  },

  // Slide 8: Claude Code Commands
  {
    id: 8,
    type: 'content',
    title: "Claude Code Commands",
    specialComponent: 'code-commands',
    footer: "Death to \"fixed stuff\" and \"updates\" 🎉",
  },

  // Slide 9: My Toolkit
  {
    id: 9,
    type: 'emoji-list',
    title: "Right Tool for the Job",
    emojiItems: [
      {
        emoji: "🧠",
        title: "Claude + Claude Code",
        description: "Deep reasoning, complex tasks",
        link: "https://claude.ai",
      },
      {
        emoji: "💬",
        title: "ChatGPT",
        description: "Quick questions, alternatives",
        link: "https://chat.openai.com",
      },
      {
        emoji: "🔮",
        title: "Gemini + Gemini Code",
        description: "Different perspective",
        link: "https://gemini.google.com",
      },
      {
        emoji: "✨",
        title: "Cursor",
        description: "Flow state coding\n- Background agents for continuous improvement",
        link: "https://cursor.sh",
      },
      {
        emoji: "🎤",
        title: "SuperWhisper",
        description: "Voice → code",
        link: "https://superwhisper.com",
      },
    ],
  },

  // Slide 10: MCP Servers & Screen Sharing
  {
    id: 10,
    type: 'content',
    title: "AI Can See What You See",
    subtitle: "MCP Servers (read-only!):",
    bullets: [
      "📊 Supabase MCP - Database queries without fear",
    ],
    content: "Screen Sharing:\n📱 Snap Happy - AI sees your React Native simulator\n\n🌐 Puppeteer/Playwright - Web equivalent\n   AI can interact with your running app",
    footer: "Let AI see context = better suggestions",
    links: [
      { text: "github.com/supabase/mcp", url: "https://github.com/supabase/mcp" },
      { text: "snaphappy.app", url: "https://snaphappy.app" },
      { text: "playwright.dev", url: "https://playwright.dev" },
    ],
  },

  // Slide 11: Advanced Prompting
  {
    id: 11,
    type: 'content',
    title: "Level Up Your Prompts",
    subtitle: "From Anthropic's Claude Code Best Practices:",
    content: "\"think, think hard, ultrathink\"\n\nForces deeper analysis before responding",
    bullets: [
      "\"How would you like me to describe this design?\"",
      "\"What could go wrong with this approach?\"",
      "\"Generate QA steps for what we just built\"",
    ],
    links: [
      { 
        text: "→ Full guide: anthropic.com/engineering/claude-code-best-practices", 
        url: "https://anthropic.com/engineering/claude-code-best-practices" 
      },
    ],
  },

  // Slide 12: My Favorite Experiment
  {
    id: 12,
    type: 'content',
    title: "From Idea to Production in One Day",
    subtitle: "My favorite experiment so far:",
    content: "🌅 Morning (lunch break): Had an idea for an app\n📝 Wrote the PRD\n\n🌆 Evening (after work):\n💳 Bought the domain name\n🚀 Built the entire app\n🌙 Deployed to production by midnight\n\n→ creasetracker.com",
    footer: "This is what Tier 1 productivity looks like with AI\n\nJust a reaction to a conversation with my son the previous weekend",
  },

  // Slide 13: Thank You
  {
    id: 13,
    type: 'content',
    title: "Thank You!",
    subtitle: "Key Takeaways:",
    bullets: [
      "Set up guardrails (claude.md, .cursorrules)",
      "Use AI for grunt work you already know",
      "Try different tools for different tasks",
      "Build your own development loop",
    ],
    content: "Links & Resources:\ngithub.com/kevinsalter/ai-tech-talk",
    footer: "Questions? Let's chat!\n\n[your-email/slack]",
  },
];

export const getSlideById = (id: number): Slide | undefined => {
  return slides.find(slide => slide.id === id);
};

export const getNextSlideId = (currentId: number): number | null => {
  const currentIndex = slides.findIndex(slide => slide.id === currentId);
  if (currentIndex >= 0 && currentIndex < slides.length - 1) {
    return slides[currentIndex + 1].id;
  }
  return null;
};

export const getPreviousSlideId = (currentId: number): number | null => {
  const currentIndex = slides.findIndex(slide => slide.id === currentId);
  if (currentIndex > 0) {
    return slides[currentIndex - 1].id;
  }
  return null;
};