/**
 * Home page content, sourced from the latest resume.
 *
 * Keep every claim verifiable: no metrics, titles or dates that the resume
 * (or a public product page) does not state.
 */

export const hero = {
  availability: "Open to Senior AI & Full Stack Engineer roles",
  statement: ["I build AI products", "and the full stack around them."],
  intro:
    "Senior software engineer and technical lead with 8+ years of experience, 6 of them in TypeScript. I have shipped production OpenAI and Anthropic features with persistent context, RAG and streaming, and I build and run my own AI products end to end, from the models to the interface.",
  now: {
    label: "Now",
    text: "Building Vaniras, an AI/ML stock intelligence platform",
    href: "#vaniras",
  },
  location: "Istanbul, Türkiye · Remote with U.S. & U.K. teams",
  previously: ["Bolt Insight", "Marti (NYSE: MRT)", "Vodafone", "Talent500", "Optimus Software"],
  notes: [
    { title: "AI-native", body: "LLMs, RAG & my own ML models" },
    { title: "End to end", body: "From model to interface" },
  ],
} as const;

export const proofPoints = [
  { value: "8+", label: "Years shipping software", detail: "6 of them in TypeScript" },
  { value: "LLMs", label: "In production", detail: "OpenAI & Anthropic, RAG, streaming" },
  { value: "1,000+", label: "U.S. stocks forecast", detail: "By models I train myself" },
  { value: "Lead", label: "Tech & team lead", detail: "Marti (NYSE: MRT) & Optimus" },
] as const;

export const principles = [
  {
    title: "Guardrails before features",
    body: "AI output is validated before it can change anything that matters. EvidenceDesk saves nothing without human approval, and the Vaniras assistant can explain a forecast but never create or alter a number.",
  },
  {
    title: "Measure, then ship",
    body: "Retrieval evaluation published separately from answer quality, walk-forward model validation with interval-coverage checks, and API, database and browser tests running in CI.",
  },
  {
    title: "Lead while building",
    body: "As tech lead at Marti and team lead at Optimus, I guided architecture, reviewed code and mentored engineers while staying hands-on in the implementation.",
  },
] as const;

export const skillGroups = [
  {
    label: "LLMs & agents",
    skills: ["OpenAI", "Anthropic", "LangGraph", "Multi-step workflows", "Structured JSON outputs", "Versioned prompts"],
  },
  {
    label: "RAG & retrieval",
    skills: ["Embeddings", "pgvector", "PostgreSQL full-text search", "Hybrid retrieval", "Reciprocal rank fusion", "Citation checks"],
  },
  {
    label: "Applied ML",
    skills: ["Python", "Quantile forecasting", "Feature pipelines", "Walk-forward validation", "Model evaluation", "Scheduled inference"],
  },
  {
    label: "Full stack product",
    skills: ["TypeScript", "React", "Next.js", "Node.js", "FastAPI", "WebSockets"],
  },
  {
    label: "Data & cloud",
    skills: ["PostgreSQL", "Redis", "MongoDB", "Docker", "Kubernetes", "AWS & GCP"],
  },
  {
    label: "Quality & reliability",
    skills: ["API & browser tests", "CI/CD", "Observability", "Retries & fallbacks", "Human-in-the-loop approval", "Tenant authorization"],
  },
] as const;

export interface Role {
  company: string;
  title: string;
  /** ISO year-month (YYYY-MM), used for <time dateTime> and display labels. */
  start: string;
  end: string;
  location: string;
  summary: string;
  /** Id of the matching company project card. */
  projectId: string;
}

export const roles: readonly Role[] = [
  {
    company: "Bolt Insight",
    title: "Full Stack Engineer",
    start: "2026-01",
    end: "2026-06",
    location: "Remote · London, UK",
    summary:
      "Production LLM features for AI market research products: OpenAI and Anthropic integrations, persistent context, RAG and real-time streaming.",
    projectId: "bolt-insight",
  },
  {
    company: "Marti Technologies (NYSE: MRT)",
    title: "Senior Software Engineer & Tech Lead",
    start: "2025-07",
    end: "2025-12",
    location: "Istanbul, Türkiye",
    summary:
      "Led frontend-focused engineering for high-traffic mobility products while contributing to Node.js and Python services, real-time maps and courier tracking.",
    projectId: "marti",
  },
  {
    company: "Vodafone",
    title: "Senior Software Engineer",
    start: "2024-04",
    end: "2025-05",
    location: "Istanbul, Türkiye",
    summary:
      "Enterprise and ecommerce applications, including CRM, Red Konsol and the HB Campaign Panel, built with React, Next.js, Node.js and PostgreSQL.",
    projectId: "vodafone",
  },
  {
    company: "Talent500",
    title: "Software Engineer",
    start: "2022-04",
    end: "2024-04",
    location: "Remote · USA & India",
    summary:
      "International SaaS and HR products. Independently delivered AI Planet end to end and contributed to the Canvas React-to-Next.js migration.",
    projectId: "ai-planet",
  },
  {
    company: "Optimus Software",
    title: "Senior Software Engineer & Team Lead",
    start: "2021-11",
    end: "2022-03",
    location: "Istanbul, Türkiye",
    summary:
      "Led frontend-focused engineering across trading, ecommerce and fundraising platforms while contributing backend functionality and mentoring engineers.",
    projectId: "optimus",
  },
];

export const earlierRoles = [
  { company: "Freelance", title: "Full Stack Developer", period: "2021" },
  { company: "M&L Software", title: "Software Engineer", period: "2020" },
  { company: "Morplex Industry", title: "Frontend Developer & Designer", period: "2017" },
] as const;

export const education = {
  school: "Giresun University",
  degree: "A.S. in Computer Programming",
  period: "2014 – 2016",
} as const;

export const languages = [{ name: "English", level: "C1, professional" }] as const;

const monthFormat = new Intl.DateTimeFormat("en-US", { month: "short", year: "numeric", timeZone: "UTC" });

/** Formats a YYYY-MM string as "Jan 2026". */
export function formatMonth(isoMonth: string): string {
  return monthFormat.format(new Date(`${isoMonth}-01T00:00:00Z`));
}
