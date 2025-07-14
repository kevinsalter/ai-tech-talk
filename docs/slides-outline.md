# Slide 1: Title
# You're Absolutely Right!
## Some ideas and approaches I've been finding useful with AI

July 15, 2025

📱 All resources: [short-url]

---

# Slide 2: The Development Loop
# My Development Loop

[ARROW DIAGRAM showing circular flow]:
Brainstorm →
Generate PRD →
Scrutinize PRD →
Create Task List →
Scrutinize Order & Dependencies of Task List →
Complete Tasks →
Commit →
Generate Tests →
Create Manual QA Steps →
Write helper scripts (if needed) →
Write Documentation →
[loops back to Brainstorm]

Each step leverages AI differently

---

# Slide 3: Three Tiers of AI Help
# Where AI Actually Helps Me

## 🚀 Tier 1: Things I Know Well
Blazing speed execution

## 📚 Tier 2: Things I Kinda Know
Skip the documentation diving

## ⚠️ Tier 3: Things I Don't Know
Confidently wrong answers + I can't guide it = Danger

*This talk focuses on Tiers 1 & 2*

---

# Slide 4: Foundation - Guardrails
# Guardrails = Confidence

## My setup:
- `claude.md` - Project context and conventions
- `.cursorrules` - Editor-specific instructions
- `docs/` folder - Living documentation
- Git checkpoints before AI sessions

💡 Pro tip: I keep the git tab open in my editor sidebar now
instead of the file tree - helps me stay aware of changes and
proof read what's being created while it's in progress

Can add elements from: [Mobile Engineering Guidebook →]

"The more guardrails, the more confident you can be
in 'accept all edits' mode"

---

# Slide 5: Guardrails Example
# What goes in guardrails?

[Split screen showing]:

claude.md:
- Tech stack details
- Code conventions
- Component patterns
- Common pitfalls

.cursorrules:
- Import conventions
- File structure
- Testing approach
- Style preferences

process-task-list.md:
- Controls AI workflow
- One task at a time
- Example: "use @ai-dev-tasks/process-task-list.md
  to start section 3.0 in @docs/dev-tasks.md"

[Links to example files →]

---

# Slide 6: The Grunt Work (Tier 1)
# What I Delegate - Things I Know Well

The obvious:
- Forms, validation, wizards
- Database migrations + RLS policies
- Unit tests with all the mocks

Any boilerplate:
- Data fetching patterns
- Zustand store structures
- Loading states and error boundaries
- Accessibility (a11y) improvements

💡 I know how to do these, AI just does them 10x faster

---

# Slide 7: The Documentation Skip (Tier 2)
# Things I Kinda Know

Database migrations:
"Create a migration for user preferences with JSON column"
→ Perfect Postgres syntax without checking docs

RLS policies:
"Add policy for users to only see their own data"
→ Correct syntax I'd otherwise Google

AWS configurations:
"Set up S3 bucket with proper CORS for uploads"
→ No more diving through AWS docs

✨ I understand enough to verify, but skip the research

---

# Slide 8: Claude Code Commands
# Claude Code Commands

/sanity-check → Instant code review
[gist.github.com/kevinsalter/fa5e...]

/prime → Load context efficiently
[gist.github.com/kevinsalter/c68e...]

/commit → Meaningful commit messages
[gist.github.com/kevinsalter/1cd2...]

Death to "fixed stuff" and "updates" 🎉

---

# Slide 9: My Toolkit
# Right Tool for the Job

🧠 Claude + Claude Code - Deep reasoning, complex tasks
   [claude.ai] [Claude Code CLI]

💬 ChatGPT - Quick questions, alternatives
   [chat.openai.com]

🔮 Gemini + Gemini Code - Different perspective
   [gemini.google.com] [Gemini Code]

✨ Cursor - Flow state coding
   - Background agents for continuous improvement
   [cursor.sh] [docs: background agents]

🎤 SuperWhisper - Voice → code
   [superwhisper.com]

---

# Slide 10: MCP Servers & Screen Sharing
# AI Can See What You See

## MCP Servers (read-only!):
📊 Supabase MCP - Database queries without fear
   [github.com/supabase/mcp]

## Screen Sharing:
📱 Snap Happy - AI sees your React Native simulator
   [snaphappy.app]

🌐 Puppeteer/Playwright - Web equivalent
   AI can interact with your running app
   [playwright.dev]

Let AI see context = better suggestions

---

# Slide 11: Advanced Prompting
# Level Up Your Prompts

From Anthropic's Claude Code Best Practices:

"think, think hard, ultrathink"

Forces deeper analysis before responding

Also powerful:
- "How would you like me to describe this design?"
- "What could go wrong with this approach?"
- "Generate QA steps for what we just built"

[→ Full guide: anthropic.com/engineering/claude-code-best-practices]

---

# Slide 12: My Favorite Experiment
# From Idea to Production in One Day

My favorite experiment so far:

🌅 Morning: Had an idea for an app
📝 Wrote the PRD on my lunch break

🌆 In the evening I challenged myself to ship the project in that same day:
💳 Bought the domain name
🚀 Built the entire app
🌙 Deployed to production by midnight

→ creasetracker.com

This is the kind of productivity I'm talking about with building things I'm familiar with

Just a reaction to a conversation with my son the previous weekend

---

# Slide 13: Resources
# Resources

[short-url]

Everything mentioned:
- Example guardrail files
- Command gists
- Tool links & configs
- MCP server examples
- Templates
- This presentation

If you try any of these things, let me know!

[your-email/slack]
