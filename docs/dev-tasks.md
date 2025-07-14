# AI Talk Slides - Development Tasks

## 1. Project Setup (~5 min)
- [x] Initialize Next.js project: `npx create-next-app@latest ai-tech-talk --typescript --tailwind --app --use-npm`
- [x] Navigate to project: `cd ai-tech-talk`
- [x] Install dependencies: `npm install framer-motion lucide-react react-use-keypress @vercel/analytics --legacy-peer-deps`
- [x] Initialize git repository
- [x] Create initial commit

## 2. File Structure Setup (~3 min) ✅
- [x] Create folder structure:
```
ai-tech-talk/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   ├── slide/
│   │   │   └── [id]/
│   │   │       └── page.tsx
│   │   └── resources/
│   │       └── page.tsx
│   ├── components/
│   │   ├── SlideLayout.tsx
│   │   ├── SlideNavigation.tsx
│   │   ├── ResourceLink.tsx
│   │   ├── ArrowDiagram.tsx
│   │   ├── TierCard.tsx
│   │   └── CodeBlock.tsx
│   └── lib/
│       ├── slides.ts
│       └── constants.ts
└── public/
    └── images/
        └── (screenshots will go here)
```
- [x] Set up TypeScript types for slides
- [x] Configure Tailwind for large text presentation

## 3. Core Layout & Navigation (~10 min) ✅
- [x] Create SlideLayout component with:
  - [x] Dark theme styling
  - [x] Consistent padding/margins
  - [x] Slide number indicator
  - [x] Resources button (floating)
- [x] Implement SlideNavigation:
  - [x] Arrow key navigation
  - [x] Spacebar for next
  - [x] Click/tap navigation
  - [x] Slide progress bar
- [x] Add keyboard event listeners

## 4. Slide Content Implementation (~15 min) ✅
- [x] Create slides data structure in `/lib/slides.ts`
- [x] Implement dynamic routing for slides
- [x] Create slide components:
  - [x] Title slide (centered, large)
  - [x] Content slide (bullets, text)
  - [x] Split screen slide (for guardrails)
  - [x] Emoji list slide (for toolkit)
- [x] Add slide transitions with Framer Motion

## 5. Special Components (~15 min)
- [ ] Build ArrowDiagram component:
  - [x] SVG-based circular flow
  - [ ] Animated arrows (optional)
  - [ ] Responsive sizing
  - [ ] Labels for each step
- [ ] Create TierCard component:
  - [ ] Color-coded borders
  - [ ] Emoji support
  - [ ] Clear typography
- [ ] Build CodeBlock component:
  - [ ] Syntax highlighting
  - [ ] File path display

## 6. Resources Page (~10 min)
- [ ] Create comprehensive resources layout
- [ ] Organize sections:
  - [ ] Guardrails Examples
  - [ ] Command Gists
  - [ ] Tool Links
  - [ ] Templates
- [ ] Implement ResourceLink component:
  - [ ] External link icon
  - [ ] Hover effects
  - [ ] Clear visual hierarchy
- [ ] Add copy-to-clipboard for code snippets

## 7. Content & Links (~10 min)
- [ ] Add all external links:
  - [ ] Claude/ChatGPT/Gemini URLs
  - [ ] Gist links (3 commands)
  - [ ] Tool documentation
  - [ ] Anthropic best practices
  - [ ] Mobile Engineering Guidebook
- [ ] Create example files:
  - [ ] Sample claude.md
  - [ ] Sample .cursorrules
  - [ ] PRD template
- [ ] Generate QR code for resources

## 8. Visual Assets (~10 min)
- [ ] Take/prepare screenshots:
  - [ ] Command line examples
  - [ ] Guardrails file examples
  - [ ] Code generation examples
- [ ] Create simple graphics:
  - [ ] Three tiers visualization
  - [ ] Tool logos/icons
- [ ] Optimize all images

## 9. Polish & Responsiveness (~10 min)
- [ ] Test on different screen sizes
- [ ] Ensure text readability from distance
- [ ] Add loading states
- [ ] Implement error boundaries
- [ ] Add meta tags and favicon
- [ ] Test all navigation methods

## 10. Deployment (~5 min)
- [ ] Build production version: `npm run build`
- [ ] Test locally: `npm start`
- [ ] Deploy to Vercel: `vercel`
- [ ] Configure custom domain or short URL
- [ ] Test all links in production
- [ ] Share link for feedback

## 11. Practice & Timing (~15 min)
- [ ] Run through presentation
- [ ] Time each slide (~25 seconds each)
- [ ] Adjust content if needed
- [ ] Test presenting from phone/tablet
- [ ] Prepare backup (PDF export)

## Quick Commands for Claude Code:
```bash
# Initial setup
npx create-next-app@latest ai-tech-talk --typescript --tailwind --app --use-npm && cd ai-tech-talk

# Install all dependencies at once
npm install framer-motion lucide-react react-use-keypress @vercel/analytics --legacy-peer-deps

# Run development
npm run dev

# Deploy when ready
vercel
```
