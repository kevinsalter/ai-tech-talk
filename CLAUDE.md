# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview
This is a Next.js 15.3.5 presentation application for an AI tech talk. The app displays a 12-slide presentation about AI development workflows and tools, with custom navigation and interactive components.

## Commands
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm install framer-motion lucide-react react-use-keypress @vercel/analytics --legacy-peer-deps` - Install required dependencies (use --legacy-peer-deps due to React 19)

## Architecture
The application is built with:
- **Next.js 15.3.5** with App Router
- **TypeScript** with strict mode
- **Tailwind CSS v4** via PostCSS
- **React 19**

### Slide System
- Dynamic routing: `/slide/[id]` for individual slides
- Keyboard navigation (arrow keys, spacebar)
- Slide progress indicators
- Resources page at `/resources`

### Special Components
- **ArrowDiagram**: Circular flow diagram showing development loop
- **TierCard**: Color-coded cards for different AI usage tiers
- **CodeBlock**: Syntax-highlighted code snippets
- **ResourceLink**: External links with proper icons

## Development Guidelines

### File Structure
```
/src/app/         - Next.js App Router pages
/components/      - Reusable React components
/lib/            - Core logic and slide data
/public/images/  - Screenshots and visual assets
```

### Slide Data Structure
Slides are defined in `/lib/slides.ts` with:
- Title, content, type (title/content/split/emoji-list)
- Special component references
- Navigation metadata

### Styling Conventions
- Dark theme by default
- Large, readable text for presentations
- Consistent spacing using Tailwind utilities
- Responsive design for different screen sizes

### Component Patterns
- Use TypeScript interfaces for all props
- Implement keyboard navigation with react-use-keypress
- Add Framer Motion transitions between slides
- Ensure all interactive elements are accessible

## Implementation Notes
Based on `/docs/dev-tasks.md`, the following features need implementation:
1. Dynamic slide routing system
2. Keyboard/touch navigation
3. Special visualization components (ArrowDiagram, TierCard)
4. Resources page with categorized links
5. Slide progress indicators
6. Responsive design for presentation screens

The presentation content outline is in `/docs/slides-outline.md` and should be faithfully implemented as the slide content.