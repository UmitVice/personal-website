# Portfolio implementation review

Implemented locally for review. No deployment, push, DNS changes, secret changes, or changes to the linked product applications were made.

## Positioning and presentation

The main role is **AI Engineer & Senior Full Stack Engineer**. Immediately below it, the site names hands-on team leadership at Marti Technologies and Optimus Software, grounded in direct software development. The introduction, leadership section, opportunity statement, footer, metadata and new social preview support that narrative.

The existing dark/green visual identity, portrait, product screenshots, résumé, contact links and section anchors remain. The navigation now names Individual Projects and Company Projects, including on mobile. The nine existing project records are represented once each. The summary is the first paragraph of each description; a native disclosure exposes the remaining paragraphs without duplicating the summary. Categories remain visible before and after expansion. Roles stay visible on mobile.

## Project mapping

| Record | Category | Contribution |
| --- | --- | --- |
| Vaniras | Individual Project | Independent Developer |
| Life World | Individual Project | Independent Developer |
| Bolt Insight | Company Project | Software Engineer |
| Marti Technologies | Company Project | Team Lead and Software Engineer |
| Vodafone enterprise and mobile work | Company Project | Software Engineer |
| HB Campaign Panel | Company Project | Software Engineer |
| Talent500 / AI Planety | Company Project | Software Engineer / End-to-End Product Ownership |
| Talent500 / Canvas migration | Company Project | Software Engineer |
| Optimus Software | Company Project | Team Lead and Software Engineer |

Technology fields are separate from ownership category and domain/capability tags. AI Planety has no application-specific framework claims. Python at Talent500 is described as broader company experience, not as the migration application's implementation. HB Campaign Panel keeps a short description based on existing portfolio context.

## Changed files

- `src/lib/projects.ts`: shared project records, categories, descriptions, technologies, domains and labeled references.
- `src/lib/data.ts`: profile and metadata alignment, evidence-supported AI/mobile skill emphasis, project re-export, and AI Planety spelling correction in the existing experience text.
- `src/app/page.tsx`: existing sections connected to shared data, positioning, project roles, leadership, navigation and contact copy.
- `src/components/sections/project-content.tsx`: shared native disclosure, badges, tags and external links.
- `src/components/sections/projects.tsx`: existing reusable project section updated to consume the same content.
- `src/app/globals.css`: readable project typography, responsive layout, visible roles, focus states and mobile navigation.
- `src/app/social-image/route.tsx`: static social preview generated from shared profile text. The old image file remains preserved.
- `public/favicon.svg`: UV icon matching the site's existing wordmark, resolving the missing favicon request found in browser checks.
- `tsconfig.json`: portfolio type-check scope narrowed to `src`, Next configuration and generated Next types, preserving the unrelated nested `life-world/` app.
- `PORTFOLIO_REVIEW.md`: this report.

No dependency or lockfile changes.

## Sources and links

The entire supplied one-page PDF, including its ownership section and all embedded URI annotations, was extracted and visually inspected. The actual supplied filename was `Umit_Vice_Selected_Web_Mobile_Projects.pdf`; it was available despite the different filename in the pasted instructions. It has not been copied into the website. The live portfolio matched the repository's existing layout and records.

The following pages were opened successfully during this task. This verifies public identity/reachability, not personal responsibility for every feature or authenticated application behavior.

| Project | Verified references | Scope / limitation |
| --- | --- | --- |
| Vaniras | [View Application](https://app.vaniras.com/) | Application home page; no inference about model accuracy, data freshness or release status. |
| Life World | [View Application](https://life-world.vercel.app/) | Chrome returned HTTP 200 and displayed city/property-type search and listings with photos, amenities/details and pricing. No authenticated flows tested. |
| Bolt Insight | [Company and Product Overview](https://www.boltinsight.com/) | Company/product reference. |
| Marti | [Company Website](https://www.marti.tech/), [iOS Application](https://apps.apple.com/us/app/marti-tag-scooter/id1454358771), [Android Application](https://play.google.com/store/apps/details?id=com.martitech.marti) | Official site and app-store pages. |
| Vodafone | [Red Konsol Product Page](https://www.vodafone.com.tr/vodafone-business/red-konsol), [Yanımda on iOS](https://apps.apple.com/tr/app/vodafone-yan%C4%B1mda/id489845659?l=tr), [Yanımda on Android](https://play.google.com/store/apps/details?id=com.vodafone.selfservis) | Direct Android listing verified as Vodafone Holding / Vodafone Telekomunikasyon; the PDF's Google Play search link was not used. |
| Talent500 | [Company Website](https://talent500.com/), [Canvas Portal](https://canvas.talent500.co/), [Hy Vee Experience Portal](https://hyvee.talent500.co/experience/login) | Canvas currently identifies as 1Recruit; its existing URL is preserved. Hy Vee returned HTTP 200 with an email/password login form. They remain separate references. No sign-in attempted. |
| Optimus | [Client References](https://obt.com.tr/en/referanslarimiz/), [ING Yatırım](https://www.ingyatirim.com.tr/), [PhillipCapital](https://www.phillipcapital.com.tr/) | Company/client references, not direct links to the exact trading applications developed. Optimus returned HTTP 200 in Chrome. |

The web reader could not initially retrieve Life World, Hy Vee and Optimus references; Chrome successfully opened those pages. No source material remained inaccessible. A specific AI Planety public product URL and Talent500 relationship could not be established from search; the card links only to Talent500 with the company label. HB Campaign Panel has no supplied public application URL and deliberately has no external application link. Private portal contents remain unverified.

## Checks

- `yarn lint`: failed because the existing script is `next lint`; Next.js 16 interprets `lint` as a nonexistent project directory. No ESLint configuration or test script exists in this repository. Lint is **not** reported as passing; no dependency was added solely to change the tooling.
- Initial `yarn exec tsc --noEmit` and `yarn build`: failed because the original broad TypeScript include scanned the unrelated nested `life-world/` application and its missing dependencies/aliases. Scoped the portfolio configuration without modifying that application.
- Final `yarn exec tsc --noEmit`: passed.
- Final `yarn build`: passed; portfolio, not-found page, robots, sitemap and social image were statically generated.
- `git diff --check`: passed.
- Production server: `yarn start -p 4317 --hostname 127.0.0.1`.
- Ad hoc Playwright checks use bundled Playwright with installed Chrome; the bundled default Chromium executable was unavailable. Checked 375px, 768px and 1440px widths, all nine project records, exact categories, contribution labels, keyboard disclosure opening, visible focus, navigation and overflow. Screenshots reviewed for hero, individual project and company entries. Checked reduced-motion behavior, native disclosure with JavaScript disabled, metadata/JSON-LD, résumé and image responses, contact/application links, and absence of nested interactive elements.
- The first browser runs found an existing missing `/favicon.ico` request. An explicit SVG favicon resolves it. Final Chrome checks passed at all three widths: all nine disclosures keyboard-opened, no horizontal overflow, visible roles and working navigation. Reduced motion, metadata, local assets, contact links, native details without JavaScript and absence of console/runtime errors also passed.

## Factual items retained for confirmation

The revised project copy and hero omit unsupported Lighthouse 100/100 results, +25% Core Web Vitals claims, total ecosystem ownership percentages, specific LLM vendors/RAG/agent frameworks, unverified application-specific technology badges and claimed latency improvements. The rewritten leadership section avoids invented team sizes, direct reports, mentoring duties and management-only positioning.

Per the requested historical boundary, employment titles, dates, locations, education and résumé are unchanged. The existing career timeline still contains stronger claims requiring separate evidence review: Bolt's specific vendors/agent architecture and performance percentage; Marti's total ownership and infrastructure claims; Vodafone's perfect Lighthouse result; Talent500's frontend-only ownership/framework details and Canvas performance claim; and Optimus's latency claim and LLM-tool statement. Only the alternate AI Planet spelling was corrected to AI Planety. The supplied evidence establishes broader AI Planety end-to-end ownership, reflected in the project entry; historical frontend-only wording remains for confirmation.

Bolt Insight still reads **Jan 2026 – Present**. The PDF does not establish an end date, so that ongoing-employment claim was not changed. Other historical skills/certifications outside the targeted AI/mobile presentation remain unverified and unchanged. The original canonical base `umitvice.dev` conflicted with the user-specified portfolio; canonical, sitemap and structured-data URLs now use `https://www.umitvice.com`.
