# Umit Vice — Portfolio Website

Senior Full Stack Engineer portfolio built with **Next.js 16**, **Tailwind CSS v4**, and **shadcn/ui**.

## Stack

| Concern | Technology |
|---|---|
| Framework | Next.js 16 (App Router, RSC, TypeScript) |
| Styling | Tailwind CSS v4 + `@theme` design tokens |
| UI Primitives | shadcn/ui (Radix, CVA, tailwind-merge) |
| Fonts | Geist + Geist Mono via `next/font/google` |
| Icons | lucide-react (tree-shaken) |
| Animations | Pure CSS + IntersectionObserver (no JS animation lib) |
| Package Manager | Yarn 4 |

## Design

The visual system follows the **Coastal Tech Engineering Portfolio** design spec:
- **Glassmorphism** surfaces with backdrop-blur + translucent white fills
- **Sky Blue** (#0ea5e9) primary palette inspired by coastal horizons
- **Sandy Beige** (#fef3c7) accent for tech tags
- Generous whitespace and 8px spacing base unit

## Sections

1. **Hero** — Name, title, quick-stats glass card, CTA buttons, tech chips
2. **About** — Summary, initials tile, three pillar highlights
3. **Skills & Technologies** — Four groups (Frontend, Mobile, Backend, AI/DevOps) with tag chips
4. **Experience Timeline** — Vertical timeline with glass cards, scroll-reveal animation
5. **Featured Projects** — 2-column glass card grid with highlight badges
6. **Education & Certifications** — 4-column glass card layout
7. **Contact** — Glass CTA panel with email, copy, download, and social tiles

## Performance Targets

- **Lighthouse**: 100/100 Performance, 100/100 Accessibility, 100/100 Best Practices, 100/100 SEO
- Server Components by default — minimal client JavaScript
- `next/font` self-hosts Geist — zero CLS from fonts
- Pure CSS aurora background — no JS animation overhead
- Static prerendering — instant load from edge cache

## Getting Started

```bash
# Install dependencies
yarn install

# Development server (with Turbopack)
yarn dev

# Production build
yarn build

# Start production server
yarn start
```

## Environment

No environment variables required. The site is fully static and edge-deployable.

## Deployment

Deploy to Vercel with zero configuration:

```bash
yarn build
# → .next/ folder is ready for Vercel
```

Or any static hosting: `yarn build` produces fully static output.