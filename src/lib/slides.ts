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
    footer: "🗓️\u00A0\u00A0July 15, 2025",
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

  // Slide 3: The Documentation Skip (Tier 2)
  {
    id: 3,
    type: 'content',
    title: "Things I Kinda Know",
    backgroundImage: "/images/db.jpeg",
    bullets: [
      "Database migrations:\n\"Create a migration for user preferences with JSON column\"\n→ Perfect Postgres syntax without checking docs",
      "RLS policies in PostgreSQL:\n\"Add policy for users to only see their own data\"\n→ Correct syntax I'd otherwise Google",
      "AWS configurations:\n\"Set up S3 bucket with proper CORS for uploads\"\n→ No more diving through AWS docs",
    ],
    footer: "✨ I understand enough to verify, but skip the docs",
  },

  // Slide 4: Foundation - Guardrails
  {
    id: 4,
    type: 'content',
    title: "Guardrails = Confidence",
    subtitle: "",
    backgroundImage: "/images/guardrails.jpg",
    bullets: [
      "config files - `claude.md`, `.cursorrules`, `settings.local.json`",
      "unit tests",
      "linters",
      "`docs/` with PRDs, guides, etc.",
      "Git checkpoints",
    ],
    content: "",
    footer: "With more guardrails, you can move faster by enabling 'accept all edits' mode\n and worry less about it going rogue.",
    specialComponent: 'auto-accept-edits-image',
  },

  // Slide 5: Git Sidebar Pro Tip
  {
    id: 5,
    type: 'content',
    title: "Git Sidebar > File Tree",
    subtitle: "",
    content: "Helps me:\n• Stay aware of changes in real-time\n• Proof read AI's work as it's created\n• Catch unwanted changes immediately",
    footer: "",
    specialComponent: 'git-sidebar-image',
  },

  // Slide 6: The Grunt Work (Tier 1)
  {
    id: 6,
    type: 'content',
    title: "I want to delegate grunt work",
    subtitle: "",
    backgroundImage: "/images/grunt-work.png",
    bullets: [
      "Forms, validation, responsive layouts",
      "Database migrations + RLS policies",
      "Unit and integration tests with all the dependencies automatically mocked",
      "Git Commit Messages",
    ],
    content: "Any boilerplate:\n- Data fetching patterns\n- Zustand store structures\n- New React Context\n- Loading states and error boundaries\n- Accessibility (a11y) improvements\n- reworking the order of these slides!",
    footer: "💡 AI can deliver the first draft of these things 10x faster",
    links: [
        { text: "→ How to Write a Git Commit Message", url: "https://cbea.ms/git-commit/" },
    ],
  },

  // Slide 7: Process Task List
  {
    id: 7,
    type: 'content',
    title: "Process Task List",
    subtitle: "Control AI workflow with specific instructions",
    backgroundImage: "/images/task-list.jpeg",
    bullets: [
      "📋 Controls AI workflow systematically",
      "🎯 One task at a time - no wandering",
      "✅ Clear completion criteria",
      "🔄 Prevents AI from jumping ahead",
    ],
    content: "",
    footer: "",
    links: [
      { text: "→ github.com/snarktank/ai-dev-tasks", url: "https://github.com/snarktank/ai-dev-tasks" },
    ],
  },

  // Slide 8: Claude Hooks
  {
    id: 8,
    type: 'content',
    title: "Claude Hooks = Git Hooks for AI",
    subtitle: "Add deterministic actions to Claude's behaviour",
    bullets: [
      "🔊 Play sound when Claude stops",
      "🚨 Alert on errors",
      "📊 Track usage metrics",
    ],
    content: "",
    specialComponent: 'hooks-image',
    footer: "Configure in .claude/settings.json",
    links: [
      { text: "→ Claude hooks documentation", url: "https://docs.anthropic.com/en/docs/claude-code/settings#hooks" },
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
        { text: "→ Custom slash commands", url: "https://docs.anthropic.com/en/docs/claude-code/slash-commands#custom-slash-commands" },
      ],
  },

  // Slide 10: SuperWhisper
  {
    id: 10,
    type: 'content',
    title: "superwhisper",
    subtitle: "Voice → Code",
    backgroundImage: "/images/superwhisper.png",
    bullets: [
      "⚡ Faster than typing for complex logic",
      "💭 Great for brainstorming and pseudo-code",
    ],
    content: "",
    footer: "",
    links: [
      { text: "→ superwhisper.com", url: "https://superwhisper.com" },
    ],
  },

  // Slide 11: MCP Servers & Screen Sharing
  {
    id: 11,
    type: 'content',
    title: "Give it eyes 👀",
    subtitle: "MCP servers that allow AI to see and interact with your running app",
    backgroundImage: "/images/wall-of-eyes.png",
    bullets: [],
    content: "📸\u00A0\u00A0Snap Happy \n- AI sees your React Native simulator\n\n🌐\u00A0\u00A0Playwright \n- Automate a web browser",
    footer: "",
    links: [
      { text: "→ Snap Happy on Github", url: "https://github.com/badlogic/lemmy/tree/main/apps/snap-happy" },
      { text: "→ Using Playwright MCP with Claude Code", url: "https://til.simonwillison.net/claude-code/playwright-mcp-claude-code" },
    ],
  },

  // Slide 12: Ultrathink
  {
    id: 12,
    type: 'content',
    title: "When You Need Deep Analysis",
    subtitle: "The magic words:",
    backgroundImage: "/images/analysis.webp",
    content: "\"think, think hard, thinker harder, ultrathink\"\n\nPerfect for:\n• Architecture decisions\n• Debugging tricky issues\n• Performance optimisation\n• Security analysis",
    specialComponent: 'ultrathink-image',
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
    backgroundImage: "/images/dialog.webp",
    bullets: [
      "\"How would you like me to describe this design?\"",
      "\"What details do you need to implement this perfectly?\"",
      "\"What could go wrong with this approach?\"",
      "\"What questions should I be asking you?\"",
    ],
    content: "The AI knows what it needs to know\n\nLet it tell you how to provide context",
    footer: "",
  },

  // Slide 14: My Favourite Experiment
  {
    id: 14,
    type: 'content',
    title: "From Idea to Production in One Day",
    subtitle: "One of my favourite experiments so far:",
    backgroundImage: "/images/hockey-goalie-bg.jpg",
    content: "🌅 Morning: Had an idea for an app based on a conversation with my son\n\n📝 Lunch Break: Wrote the PRD\n\n🌆 Evening:\n💳 Bought the domain name\n🚀 Built the entire app\n🌙 Deployed to production by midnight",
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
    title: "What's Next?",
    subtitle: "",
    backgroundImage: "/images/the-future.jpg",
    bullets: [
      "🤖 Multiple Background agents, Sub-agents",
      "💪 It's an amplification, not a replacement",
      "🧑‍💻 Experienced developers and product managers become more valuable in the agentic coding era",
    ],
    content: "",
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
