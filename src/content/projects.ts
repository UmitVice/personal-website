/**
 * Products (independently built) and company projects shown in the work rails
 * and case-study pages.
 *
 * Vaniras is a commercial product: describe what it does and how it is
 * evaluated, never which libraries or model families power it.
 */

export type LinkKind = "live" | "source" | "docs" | "reference";

export interface ProjectLink {
  label: string;
  href: string;
  kind: LinkKind;
}

export type ProductVisual =
  | { kind: "vaniras-forecast" }
  | { kind: "image"; src: string; alt: string; width: number; height: number };

export interface CaseStudySection {
  heading: string;
  body?: string;
  bullets?: readonly string[];
  /** Rendered as an ordered flow, e.g. a request pipeline. */
  steps?: readonly { title: string; body: string }[];
}

export interface CaseStudy {
  seoTitle: string;
  seoDescription: string;
  /** ISO date of the last content update. */
  updatedAt: string;
  facts: readonly { label: string; value: string }[];
  sections: readonly CaseStudySection[];
  pullQuote?: string;
  callout?: { title: string; body: string };
  disclaimer?: string;
  schema: {
    applicationCategory: string;
    isAccessibleForFree?: boolean;
    codeRepository?: string;
    programmingLanguage?: readonly string[];
    license?: string;
  };
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  status: string;
  role: string;
  summary: string;
  highlights: readonly string[];
  tags: readonly string[];
  links: readonly ProjectLink[];
  visual: ProductVisual;
  /** Host shown in the browser-frame address bar. */
  host: string;
  tone: "blue" | "green" | "ink";
  caseStudy?: CaseStudy;
}

export interface CompanyProject {
  id: string;
  company: string;
  name: string;
  role: string;
  period: string;
  highlights: readonly string[];
  tags: readonly string[];
  links: readonly ProjectLink[];
}

export const products: readonly Product[] = [
  {
    slug: "vaniras",
    name: "Vaniras",
    tagline: "AI/ML stock intelligence platform",
    status: "Live product",
    role: "Creator · sole engineer",
    summary:
      "A live research product that turns market and company data into probabilistic price forecasts and 0–100 factor scores for 1,000+ U.S. stocks. I train the forecasting models myself and built everything around them: data pipelines, APIs and the web app.",
    highlights: [
      "3-, 6-, 9- and 12-month forecasts, each with Lower (P10), Median (P50) and Upper (P90) estimates.",
      "0–100 scorecard for Overall, Value, Quality, Growth, Safety and Momentum, benchmarked against sector peers.",
      "AI research assistant that explains model outputs but can never create or change a number.",
    ],
    tags: ["Own ML models", "Quantile forecasting", "Factor scoring", "LLM narratives", "Full stack product"],
    links: [
      { label: "Live product", href: "https://www.vaniras.com/", kind: "live" },
      { label: "Methodology", href: "https://www.vaniras.com/methodology", kind: "docs" },
    ],
    visual: { kind: "vaniras-forecast" },
    host: "vaniras.com",
    tone: "blue",
    caseStudy: {
      seoTitle: "Vaniras: AI/ML Stock Forecasting Platform",
      seoDescription:
        "Vaniras by Umithan Vice: self-trained ML models forecast 1,000+ U.S. stocks at 3–12 months with P10/P50/P90 ranges, plus 0–100 factor scores.",
      updatedAt: "2026-10-23",
      facts: [
        { label: "Role", value: "Creator · sole engineer" },
        { label: "Status", value: "Live · free and paid plans" },
        { label: "Coverage", value: "1,000+ U.S. stocks" },
        { label: "Horizons", value: "3, 6, 9 and 12 months" },
      ],
      sections: [
        {
          heading: "Overview",
          body: "A single price target hides how uncertain the future is. Vaniras shows a range instead: for every covered stock, my models estimate where the price could land on four future dates, with a lower, a median and an upper estimate, and the product puts those numbers next to company fundamentals and peer-relative scores.",
        },
        {
          heading: "What the product offers",
          bullets: [
            "Model forecasts: independent 3-, 6-, 9- and 12-month estimates with Lower (P10), Median (P50) and Upper (P90) values, each measured from a stated starting price.",
            "Scorecard: 0–100 readings for Overall, Value, Quality, Growth, Safety and Momentum, plus Cash generation and Balance strength, compared with sector peers.",
            "Company analysis: financials, valuation and sector context on an open page for every covered company.",
            "Discovery: screener, side-by-side comparison, heatmap and watchlists across the coverage universe.",
            "AI research assistant: answers questions using only the data available to the user's plan.",
          ],
        },
        {
          heading: "How I built it",
          bullets: [
            "Data pipelines that collect market prices, company financials and macro context and turn them into point-in-time features.",
            "Quantile forecasting models that I design and train myself, run on a schedule for four independent target dates.",
            "A scoring engine that compares each company with eligible sector peers on a common, dated snapshot.",
            "Forecast APIs and backend services that publish dated, versioned snapshots to the product.",
            "The full web product: research pages, interactive charts, screening, accounts, plans and billing.",
            "An LLM narrative layer with versioned prompts, compact structured inputs, strict JSON outputs, missing-data rules and token budgets.",
          ],
        },
        {
          heading: "Model quality and guardrails",
          bullets: [
            "Point-in-time inputs: every feature uses only data available on the forecast date, with documented publication lags.",
            "Time-ordered, walk-forward validation with an embargo between training and evaluation. No random train/test splits.",
            "Out-of-sample evaluation with pinball loss, interval coverage and interval width.",
            "Invalid or crossed estimates fail closed instead of being repaired for display.",
            "Numbers and narrative stay separate: the language model only interprets estimates the models already produced.",
          ],
        },
      ],
      pullQuote: "The language model can explain a forecast. It can never create, replace or recalculate one.",
      callout: {
        title: "What a free account shows",
        body: "Every company page is open. A free account includes 12-month forecasts with P10, P50 and P90 estimates, the Overall, Safety and Momentum scores, company financials, the basic screener and stock comparison. Paid plans add the 3-, 6- and 9-month horizons, factor-level scoring and deeper research.",
      },
      disclaimer: "Vaniras forecasts are model estimates, not financial advice.",
      schema: { applicationCategory: "FinanceApplication", isAccessibleForFree: true },
    },
  },
  {
    slug: "evidencedesk",
    name: "EvidenceDesk",
    tagline: "RAG support copilot with human review",
    status: "Open source · live demo",
    role: "Independent · sole engineer",
    summary:
      "Turns a support ticket into a source-backed draft note that a person reviews before anything is saved. It shows how retrieval, structured AI output and human approval fit together in a complete product.",
    highlights: [
      "Hybrid retrieval: PostgreSQL full-text search and pgvector similarity, fused with reciprocal rank fusion.",
      "Bounded LangGraph workflow with citation checks. Model output never writes directly; approval saves the exact reviewed proposal in one transaction.",
      "API, database, browser and failure tests in CI, plus a retrieval evaluation published separately from answer quality.",
    ],
    tags: ["Python", "FastAPI", "LangGraph", "pgvector", "Next.js"],
    links: [
      { label: "Live demo", href: "https://evidencedesk-web.vercel.app/", kind: "live" },
      { label: "Source code", href: "https://github.com/UmitVice/evidencedesk", kind: "source" },
      { label: "Evaluation", href: "https://evidencedesk-web.vercel.app/evaluations", kind: "docs" },
    ],
    visual: {
      kind: "image",
      src: "/projects/evidencedesk-preview.png",
      alt: "EvidenceDesk support copilot showing sample tickets and the human review workflow",
      width: 1440,
      height: 1139,
    },
    host: "evidencedesk-web.vercel.app",
    tone: "green",
    caseStudy: {
      seoTitle: "EvidenceDesk: RAG Copilot with Human Review",
      seoDescription:
        "How Umithan Vice built EvidenceDesk: hybrid retrieval with pgvector and RRF, a bounded LangGraph workflow, citation checks and human approval before any write.",
      updatedAt: "2026-10-23",
      facts: [
        { label: "Role", value: "Independent · sole engineer" },
        { label: "Status", value: "Open source (MIT) · live demo" },
        { label: "Built", value: "2026" },
        { label: "Stack", value: "Python, FastAPI, LangGraph, PostgreSQL + pgvector, Next.js" },
      ],
      sections: [
        {
          heading: "The problem",
          body: "Support agents lose time searching documentation, and a generic chatbot answer is hard to trust. EvidenceDesk drafts a reply note grounded in retrieved documentation, shows which sources support each claim and leaves the final decision to a person.",
        },
        {
          heading: "Architecture",
          steps: [
            { title: "Retrieve", body: "PostgreSQL full-text search and pgvector similarity search over the documentation." },
            { title: "Fuse", body: "Reciprocal rank fusion merges both result lists into one ranked context." },
            { title: "Draft", body: "A bounded LangGraph workflow produces a structured note, with Cloudflare Workers AI for embeddings and generation." },
            { title: "Verify", body: "Citation and quotation checks tie generated claims to the retrieved sources." },
            { title: "Review", body: "A person approves or rejects the proposal in the Next.js and TypeScript interface." },
            { title: "Save", body: "Approval stores the exact reviewed proposal in one database transaction; retry handling prevents duplicate notes." },
          ],
        },
        {
          heading: "Guardrails",
          bullets: [
            "Model output can never write to the database directly. Only an explicit human approval can.",
            "Session and tenant authorization restrict access to records.",
            "Retries are designed to be idempotent, so a repeated request cannot create a second note.",
          ],
        },
        {
          heading: "Testing and evaluation",
          bullets: [
            "Automated API, database, browser and failure-scenario tests run in CI/CD.",
            "Retrieval evaluation is published separately from answer-quality assessment.",
            "Limitations are documented: the demo uses fictional support cases, and human review of semantic answer quality is still pending.",
          ],
        },
      ],
      schema: {
        applicationCategory: "BusinessApplication",
        isAccessibleForFree: true,
        codeRepository: "https://github.com/UmitVice/evidencedesk",
        programmingLanguage: ["Python", "TypeScript"],
        license: "https://opensource.org/licenses/MIT",
      },
    },
  },
  {
    slug: "life-world",
    name: "Life World",
    tagline: "Real estate marketplace",
    status: "Live demo",
    role: "Independent · sole engineer",
    summary:
      "A property marketplace for discovering homes by location and type, with listing pages that bring images, amenities and pricing together so visitors can compare them.",
    highlights: [
      "Search by location and property type across a database-backed listing catalog.",
      "Listing pages with images, amenities and pricing, designed for comparison.",
      "Built end to end: data model, application structure and the browsing experience.",
    ],
    tags: ["Next.js", "TypeScript", "MongoDB", "Jest"],
    links: [
      { label: "Live demo", href: "https://life-world.vercel.app/", kind: "live" },
      { label: "Source code", href: "https://github.com/UmitVice/life-world", kind: "source" },
    ],
    visual: {
      kind: "image",
      src: "/projects/life-world-preview.png",
      alt: "Life World real estate marketplace preview",
      width: 1729,
      height: 910,
    },
    host: "life-world.vercel.app",
    tone: "ink",
  },
];

export const companyProjects: readonly CompanyProject[] = [
  {
    id: "bolt-insight",
    company: "Bolt Insight",
    name: "AI market research products",
    role: "Full Stack Engineer",
    period: "2026",
    highlights: [
      "Production OpenAI and Anthropic integrations with persistent context, RAG and real-time streaming under latency constraints.",
      "Validation, retries, fallbacks and failure recovery for customer-facing AI features, verified through tests and observability.",
    ],
    tags: ["OpenAI & Anthropic", "RAG", "Node.js & Python", "AWS"],
    links: [{ label: "boltinsight.com", href: "https://www.boltinsight.com/", kind: "reference" }],
  },
  {
    id: "marti",
    company: "Marti Technologies",
    name: "Mobility web, mobile and real-time ops",
    role: "Senior Software Engineer & Tech Lead",
    period: "2025",
    highlights: [
      "Led frontend-focused engineering across high-traffic mobility products, from marti.tech to in-app WebViews.",
      "Real-time CRM maps and courier tracking over WebSockets, backed by Node.js and Python services on AWS and Kubernetes.",
    ],
    tags: ["React", "WebSockets", "Kubernetes", "AWS"],
    links: [
      { label: "marti.tech", href: "https://www.marti.tech/", kind: "reference" },
      { label: "App Store", href: "https://apps.apple.com/us/app/marti-tag-scooter/id1454358771", kind: "reference" },
      { label: "Google Play", href: "https://play.google.com/store/apps/details?id=com.martitech.marti", kind: "reference" },
    ],
  },
  {
    id: "vodafone",
    company: "Vodafone",
    name: "Red Konsol, CRM and ecommerce apps",
    role: "Senior Software Engineer",
    period: "2024 – 2025",
    highlights: [
      "Enterprise and ecommerce applications, including the Red Konsol business console and CRM, built with React, Next.js and TypeScript.",
      "Connected interfaces to PostgreSQL-backed services and REST APIs, with Jest tests, regression checks and performance work.",
    ],
    tags: ["React", "Next.js", "TypeScript", "PostgreSQL"],
    links: [
      { label: "Red Konsol", href: "https://www.vodafone.com.tr/vodafone-business/red-konsol", kind: "reference" },
      { label: "Yanımda iOS", href: "https://apps.apple.com/tr/app/vodafone-yan%C4%B1mda/id489845659?l=tr", kind: "reference" },
      { label: "Yanımda Android", href: "https://play.google.com/store/apps/details?id=com.vodafone.selfservis", kind: "reference" },
    ],
  },
  {
    id: "hb-campaign-panel",
    company: "Vodafone",
    name: "HB Campaign Panel",
    role: "Senior Software Engineer",
    period: "2024 – 2025",
    highlights: [
      "Internal campaign-management platform connecting campaign interfaces to database-backed functionality and external services.",
      "Built with Next.js, React and PostgreSQL and shipped through Vodafone's structured enterprise releases.",
    ],
    tags: ["Next.js", "React", "PostgreSQL", "Internal tools"],
    links: [],
  },
  {
    id: "ai-planet",
    company: "Talent500",
    name: "AI Planet",
    role: "Software Engineer · end-to-end owner",
    period: "2022 – 2024",
    highlights: [
      "Independently delivered an AI SaaS product from requirements and architecture through frontend, backend, integrations, testing and deployment.",
      "Collaborated on voice-agent and AI workflow integrations with external services and supported the product in production.",
    ],
    tags: ["AI SaaS", "Full stack", "Integrations", "Production support"],
    links: [{ label: "talent500.com", href: "https://talent500.com/", kind: "reference" }],
  },
  {
    id: "canvas",
    company: "Talent500",
    name: "Canvas: React to Next.js migration",
    role: "Software Engineer",
    period: "2022 – 2024",
    highlights: [
      "Contributed to migrating the Canvas HR platform from React to Next.js, including performance optimization.",
      "Worked with distributed U.S. and India product and engineering teams on third-party integrations.",
    ],
    tags: ["React", "Next.js", "Migration", "HR tech"],
    links: [],
  },
  {
    id: "optimus",
    company: "Optimus Software",
    name: "Trading, investment and fundraising platforms",
    role: "Senior Software Engineer & Team Lead",
    period: "2021 – 2022",
    highlights: [
      "Web trading experiences for clients including ING Yatırım and PhillipCapital, built with React, Node.js, Python and MongoDB.",
      "Led frontend-focused engineering and mentored engineers while staying hands-on in debugging and performance work.",
    ],
    tags: ["React", "Node.js", "Python", "MongoDB"],
    links: [
      { label: "Client references", href: "https://obt.com.tr/en/referanslarimiz/", kind: "reference" },
      { label: "ING Yatırım", href: "https://www.ingyatirim.com.tr/", kind: "reference" },
      { label: "PhillipCapital", href: "https://www.phillipcapital.com.tr/", kind: "reference" },
    ],
  },
];

export const caseStudies = products.filter(
  (product): product is Product & { caseStudy: CaseStudy } => product.caseStudy !== undefined,
);

export function getCaseStudy(slug: string) {
  return caseStudies.find((product) => product.slug === slug);
}
