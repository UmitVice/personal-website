# umitvice.com

Portfolio of Umithan Vice, Senior AI & Full Stack Engineer. Live at [www.umitvice.com](https://www.umitvice.com).

## Stack

| Concern | Choice |
|---|---|
| Framework | Next.js 16 (App Router, React Server Components, TypeScript) |
| Styling | Hand-written CSS on design tokens in `src/app/globals.css` (Tailwind only for preflight) |
| Fonts | Geist and Geist Mono via `next/font` |
| Icons | lucide-react |
| Client JavaScript | One island: the horizontal project rail |
| Package manager | Yarn 4 |

## Structure

```
src/
  app/
    page.tsx                         Home: hero, proof points, product and company rails,
                                     experience, capabilities, contact
    projects/[slug]/page.tsx         Statically generated case studies
    projects/[slug]/opengraph-image  Per-project social cards
    opengraph-image.tsx              Home social card
    robots.ts, sitemap.ts            Crawling and indexing
    globals.css                      Tokens, layout and component styles
  components/
    rail.tsx                         Accessible scroll-snap carousel (client)
    product-slide.tsx, company-card.tsx, browser-frame.tsx, ...
  content/
    profile.ts                       Hero copy, roles, skills, principles
    projects.ts                      Products, case studies and company projects
  lib/
    site.ts                          Canonical URL, name and contact constants
    seo.ts                           Page metadata and JSON-LD builders
    og.tsx                           Shared Open Graph card renderer
```

Content changes happen in `src/content`; pages and metadata read from there.

## Design notes

- Projects are browsed sideways. The rail uses native scroll snapping, so it works with touch, trackpads and the keyboard, and its content is server-rendered and scrollable without JavaScript. Buttons, jump chips, a position counter and screen-reader announcements are progressive enhancements.
- No autoplay, no scroll hijacking, and reduced-motion preferences are respected.
- Each page sets its own canonical URL, Open Graph data and JSON-LD (`ProfilePage` and `Person` on the home page; `SoftwareApplication` and breadcrumbs on case studies).

## Development

```bash
yarn install
yarn dev        # frees port 3000 if a stale dev server holds it, then starts Next.js
yarn typecheck
yarn build      # static export into out/
```

No environment variables are required. Every route is statically generated.

## Hosting

The static export is served by the Cloudflare Worker `umitvice` (Workers static assets, Free plan) on
`www.umitvice.com`; `cloudflare/worker.js` redirects the apex domain to `www`. `public/_headers` sets the
content type of the extensionless Open Graph images and caching for hashed assets. The `umitvice.com`
DNS zone lives in the same Cloudflare account.

```bash
yarn deploy     # next build && wrangler deploy (needs `wrangler login` with access to the account)
```
