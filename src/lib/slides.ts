import { Slide } from './types';

export const slides: Slide[] = [
  // Slide 1: Title
  {
    id: 1,
    type: 'title',
    title: "You're Absolutely Right!",
    subtitle: "over",
    subtitleAfter: "tokens later...",
    subtitleImage: "/images/token-count.png",
    footer: "🗓️  July 15, 2025",
    githubLink: "https://github.com/kevinsalter/ai-tech-talk",
  },

  // Slide 2: Three Tiers of AI Help
  {
    id: 2,
    type: 'content',
    title: "Where AI Actually Helps Me",
    specialComponent: 'tier-cards',
    footer: "",
  },

  // Slide 3: Foundation - Guardrails
  {
    id: 3,
    type: 'content',
    title: "Guardrails = Confidence",
    subtitle: "",
    bullets: [
      "config files - `claude.md`, `.cursorrules`, `settings.local.json`",
      "unit tests",
      "linters",
      "`docs/` with PRDs, guides, etc.",
      "Git checkpoints",
    ],
    content: "",
    footer: "\"The more guardrails, the more confident you can be\nin 'accept all edits' mode\"",
    links: [{ text: "Can add elements from: Mobile Engineering Guidebook →", url: "#" }],
  },

  // Slide 4: Git Sidebar Pro Tip
  {
    id: 4,
    type: 'content',
    title: "Git Sidebar > File Tree",
    subtitle: "",
    content: "Helps me:\n• Stay aware of changes in real-time\n• Proof read AI's work as it's created\n• Catch unwanted changes immediately",
    footer: "",
    specialComponent: 'git-sidebar-image',
  },

  // Slide 5: The Grunt Work (Tier 1)
  {
    id: 5,
    type: 'content',
    title: "I want to delegate grunt work",
    subtitle: "",
    bullets: [
      "Forms, validation, a11y, responsive layouts",
      "Database migrations + RLS policies",
      "Unit and integration tests with all the dependencies automatically mocked",
      "Git Commit Messages",
    ],
    content: "Any boilerplate:\n- Data fetching patterns\n- Zustand store structures\n- Loading states and error boundaries\n- Accessibility (a11y) improvements",
    footer: "💡 AI can deliver the first draft of these things 10x faster",
    links: [
        { text: "How to Write a Git Commit Message", url: "https://cbea.ms/git-commit/" },
    ],
  },

  // Slide 6: The Documentation Skip (Tier 2)
  {
    id: 6,
    type: 'content',
    title: "Things I Kinda Know",
    bullets: [
      "Database migrations:\n\"Create a migration for user preferences with JSON column\"\n→ Perfect Postgres syntax without checking docs",
      "RLS policies:\n\"Add policy for users to only see their own data\"\n→ Correct syntax I'd otherwise Google",
      "AWS configurations:\n\"Set up S3 bucket with proper CORS for uploads\"\n→ No more diving through AWS docs",
    ],
    footer: "✨ I understand enough to verify, but skip the research",
  },

  // Slide 7: Process Task List
  {
    id: 7,
    type: 'content',
    title: "Process Task List",
    subtitle: "AI workflow control that actually works",
    bullets: [
      "📋 Controls AI workflow systematically",
      "🎯 One task at a time - no wandering",
      "✅ Clear completion criteria",
      "🔄 Prevents AI from jumping ahead",
    ],
    content: "Example usage:\n```\nuse @ai-dev-tasks/process-task-list.md to start section 3.0 in @docs/dev-tasks.md\n```\n\nThe AI will:\n1. Read the task list\n2. Complete one task\n3. Mark it done\n4. Move to next task",
    footer: "No more \"I've also improved X, Y, and Z for you\" 🎉",
    links: [
      { text: "github.com/snarktank/ai-dev-tasks", url: "https://github.com/snarktank/ai-dev-tasks" },
    ],
  },

  // Slide 8: Claude Hooks
  {
    id: 8,
    type: 'content',
    title: "Claude Hooks = Git Hooks for AI",
    subtitle: "Add deterministic actions to Claude's behaviour",
    bullets: [
      "🔊 Play sound when Claude stops (my favourite!)",
      "📝 Auto-save on tool use",
      "🚨 Alert on errors",
      "📊 Track usage metrics",
    ],
    content: "",
    specialComponent: 'hooks-image',
    footer: "Configure in .claude/settings.json",
    links: [
      { text: "Claude hooks documentation", url: "https://docs.anthropic.com/en/docs/claude-code/settings#hooks" },
    ],
  },

  // Slide 9: Claude Code Commands
  {
    id: 9,
    type: 'content',
    title: "Claude Code Slash Commands",
    specialComponent: 'code-commands',
    footer: "",
    links: [
        { text: "Custom slash commands", url: "https://docs.anthropic.com/en/docs/claude-code/slash-commands#custom-slash-commands" },
      ],
  },

  // Slide 10: SuperWhisper
  {
    id: 10,
    type: 'content',
    title: "SuperWhisper",
    subtitle: "Voice → Code",
    bullets: [
      "⚡ Faster than typing for complex logic",
      "💭 Great for brainstorming and pseudo-code",
    ],
    content: "",
    footer: "",
    links: [
      { text: "superwhisper.com", url: "https://superwhisper.com" },
    ],
  },

  // Slide 11: MCP Servers & Screen Sharing
  {
    id: 11,
    type: 'content',
    title: "Give it eyes 👀",
    subtitle: "MCP servers that allow AI to see and interact with your running app",
    bullets: [],
    content: "📸\u00A0\u00A0Snap Happy \n- AI sees your React Native simulator\n\n🌐\u00A0\u00A0Puppeteer/Playwright \n- Automate a web browser",
    footer: "",
    links: [
      { text: "github.com/supabase/mcp", url: "https://github.com/supabase/mcp" },
      { text: "Snap Happy on Github", url: "https://github.com/badlogic/lemmy/tree/main/apps/snap-happy" },
      { text: "playwright.dev", url: "https://playwright.dev" },
    ],
  },

  // Slide 12: Ultrathink
  {
    id: 12,
    type: 'content',
    title: "When You Need Deep Analysis",
    subtitle: "The magic words:",
    content: "\"think, think hard, ultrathink\"\n\nForces Claude to engage its deepest reasoning\nbefore responding to complex problems\n\nPerfect for:\n• Architecture decisions\n• Debugging tricky issues\n• Performance optimisation\n• Security analysis",
    footer: "From Anthropic's Claude Code Best Practices",
    links: [
      {
        text: "→ Full guide: anthropic.com/engineering/claude-code-best-practices",
        url: "https://arc.net/l/quote/kosniooo"
      },
    ],
  },

  // Slide 13: Ask AI How to Be Prompted
  {
    id: 13,
    type: 'content',
    title: "Let AI Guide the Conversation",
    subtitle: "",
    bullets: [
      "\"How would you like me to describe this design?\"",
      "\"What details do you need to implement this perfectly?\"",
      "\"What could go wrong with this approach?\"",
      "\"What questions should I be asking you?\"",
    ],
    content: "The AI knows what it needs to know\n\nLet it tell you how to provide context",
    footer: "Stop guessing what AI needs - just ask!",
  },

  // Slide 14: My Favourite Experiment
  {
    id: 14,
    type: 'content',
    title: "From Idea to Production in One Day",
    subtitle: "My favourite experiment so far:",
    content: "🌅 Morning: Had an idea for an app\n\n📝 Lunch Break: Wrote the PRD\n\n🌆 Evening:\n💳 Bought the domain name\n🚀 Built the entire app\n🌙 Deployed to production by midnight",
    links: [
        {
          text: "→ creasetracker.com",
          url: "https://creasetracker.com"
        },
      ],
    footer: "",
  },

  // Slide 15: What's Next - Background Agents
  {
    id: 15,
    type: 'content',
    title: "What's Next: Background Agents",
    subtitle: "Almost there, doesn't feel far off",
    bullets: [
      "🤖 Background agents fixing bugs and submitting PRs",
      "🔄 Building different iterations of solutions for a given problem or feature",
      "🧹 Automatic tech debt cleanup",
      "📝 Documentation that writes itself",
    ],
    content: "Imagine: You write feature code,\nwhile AI handles everything else in the background:\n\n• Test coverage improves automatically\n• Performance optimisations appear overnight\n• Code review suggestions before you ask",
    footer: "🚀",
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
