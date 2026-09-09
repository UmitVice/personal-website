import type { Metadata } from "next";

/* ── Types ──────────────────────────────────────────────────── */

export interface Experience {
  role: string;
  company: string;
  location: string;
  period: string;
  highlights: readonly string[];
  tags: readonly string[];
}

export type { Project } from "./projects";
export { projects } from "./projects";

export interface SkillGroup {
  label: string;
  skills: readonly string[];
}

export interface Certification {
  title: string;
}

export interface Social {
  name: string;
  href: string;
  /** Display value e.g. email address or handle */
  display: string;
}

/* ── Profile ────────────────────────────────────────────────── */

export const profile = {
  name: "Umit Vice",
  title: "AI Engineer & Senior Full Stack Engineer",
  subtitle: "Hands-on team leadership at Marti Technologies and Optimus Software, grounded in direct software development.",
  location: "Istanbul, Turkey",
  email: "umitvice@gmail.com",
  phone: "+90 536 218 8238",
  summary:
    "I am a software engineer with 8+ years of experience across AI-enabled products, web applications and mobile development. I connect Python, machine learning, Node.js, React, Next.js and TypeScript with end-to-end product delivery.",
  /** Three pillars for the About section */
  pillars: [
    {
      title: "Zero to One Product Development",
      description:
        "Taking ideas from blank canvas to production-ready platforms within weeks, owning the full technical lifecycle alongside founders and shipping under tight, ambiguous constraints.",
    },
    {
      title: "AI LLM Agent Workflows",
      description:
        "Designing multi-step reasoning agent workflows with OpenAI and Anthropic, persistent context management, RAG pipelines, and automated data pipelines that turn LLM calls into reliable product features.",
    },
    {
      title: "High Performance Architecture",
      description:
        "Building high-performance frontend and backend architectures with streaming under tight latency constraints, robust fallback and failure recovery patterns, and Core Web Vitals excellence.",
    },
  ],
  /** Quick stats for the hero quick-stats card */
  stats: [
    { label: "Years Experience", value: "8+" },
    { label: "Individual Projects", value: "2" },
    { label: "Platforms", value: "Web + Mobile" },
    { label: "Product Delivery", value: "End to End" },
  ],
} as const;

/* ── Socials ────────────────────────────────────────────────── */

export const socials: Social[] = [
  { name: "Email", href: "mailto:umitvice@gmail.com", display: "umitvice@gmail.com" },
  { name: "LinkedIn", href: "https://linkedin.com/in/umitvice", display: "linkedin.com/in/umitvice" },
  { name: "GitHub", href: "https://github.com/UmitVice", display: "github.com/UmitVice" },
];

/* ── Experience ─────────────────────────────────────────────── */

export const experiences: Experience[] = [
  {
    role: "Full Stack Engineer",
    company: "Bolt Insight",
    location: "Remote | London, UK",
    period: "Jan 2026 – Present",
    highlights: [
      "Architect and execute production-ready Next.js and Python workflows and state of the art OpenAI and Anthropic LLM agent integrations with persistent context and RAG pipelines for the boltinsight.com platform.",
      "Design multi-step reasoning agent workflows and real time AI interactions with streaming under tight latency constraints using Node.js, Docker, and AWS.",
      "Build robust fallback, failure recovery, and evaluation mechanisms in Agile sprints, increasing Core Web Vitals scores by 25%.",
    ],
    tags: ["Next.js", "Python", "Node.js", "OpenAI", "Anthropic", "RAG", "AWS", "Docker"],
  },
  {
    role: "Senior Software Developer (Contract)",
    company: "Marti Technologies (NYSE: MRT)",
    location: "Istanbul, Turkey",
    period: "Jul 2025 – Dec 2025",
    highlights: [
      "Assumed 100% technical ownership as Frontend Lead for high-traffic ecosystems, including the marti.tech corporate site, Marti Tag mobile applications (iOS App Store), WebViews, and real time WebSocket CRM maps.",
      "Optimized Python and Node.js backend architectures via Kubernetes and AWS for complex features (courier tracking, super member packages, and admin panels), establishing engineering best practices and ensuring high availability during peak traffic windows.",
    ],
    tags: ["React", "Node.js", "Python", "Kubernetes", "AWS", "WebSockets"],
  },
  {
    role: "Senior Software Developer",
    company: "Vodafone",
    location: "Istanbul, Turkey",
    period: "Apr 2024 – May 2025",
    highlights: [
      "Engineered scalable enterprise frontend architectures, the B2B Vodafone Red Console platform (vodafone.com.tr/vodafone-business/red-konsol), and Vodafone Yanımda e-commerce applications (iOS and Android), achieving perfect 100/100 Lighthouse scores.",
      "Built an internal enterprise campaign management platform (HB Campaign Panel) from scratch utilizing Next.js, React, and SQL (Postgres), leveraging AI-assisted coding tools (Cursor and GPT) to accelerate Agile delivery cycles.",
    ],
    tags: ["Next.js", "React", "PostgreSQL", "WebView", "100/100 Lighthouse"],
  },
  {
    role: "Software Developer",
    company: "Talent500",
    location: "Remote | USA & India",
    period: "Apr 2022 – Apr 2024",
    highlights: [
      "Took 100% solo frontend ownership of the talent500.com AI Planety platform, integrating AI-powered workflows, external tools, and memory states using Next.js, Redux Toolkit, and Zustand within an autonomous, distributed global Agile environment.",
      "Commanded a full-scale UI redesign and React to Next.js migration for the Canvas Project (canvas.talent500.co), driving engineering execution to perfect 100/100 performance and responsiveness scores.",
    ],
    tags: ["Next.js", "React Native", "Redux Toolkit", "Zustand", "AI Workflows"],
  },
  {
    role: "Senior Software Developer",
    company: "Optimus Software",
    location: "Istanbul, Turkey",
    period: "Nov 2021 – Mar 2022",
    highlights: [
      "Led full-stack lifecycle for high-traffic, custom B2B trading, e-commerce, and fundraising platforms (obt.com.tr) using React, Node.js, and noSQL (MongoDB), significantly reducing application latency and securing API integrations.",
      "Used LLM tools to accelerate multi-step iterations, cutting through bottlenecks to optimize execution speed.",
    ],
    tags: ["React", "Node.js", "MongoDB", "B2B"],
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "Freelance",
    location: "Remote",
    period: "Jan 2021 – Dec 2021",
    highlights: [
      "Shipped end-to-end, production-ready web applications using Next.js, Node.js, and Docker for competitive e-commerce and finance sectors.",
    ],
    tags: ["Next.js", "Node.js", "Docker"],
  },
  {
    role: "Software Developer",
    company: "M&L Software",
    location: "Istanbul, Turkey",
    period: "Jan 2020 – Jan 2021",
    highlights: [
      "Developed ERP and e-commerce applications using React and React Native deployed on Google Cloud Platform (GCP).",
    ],
    tags: ["React", "React Native", "GCP", "ERP"],
  },
  {
    role: "Front End Developer & Designer",
    company: "Morplex Industry, Commerce Ltd.",
    location: "Istanbul, Turkey",
    period: "Feb 2017 – Aug 2017",
    highlights: [
      "Maintained corporate web applications and digital product catalogs while contributing to UI/UX design execution.",
    ],
    tags: ["Front End", "UI/UX", "Corporate Web"],
  },
];

/* ── Projects ───────────────────────────────────────────────── */


/* ── Skills ─────────────────────────────────────────────────── */

export const skillGroups: SkillGroup[] = [
  {
    label: "Languages & Frameworks",
    skills: [
      "Next.js",
      "Python",
      "Node.js",
      "TypeScript",
      "React",
      "React Native",
      "JavaScript (ES6+)",
      "GraphQL",
      "REST",
      "TailwindCSS",
    ],
  },
  {
    label: "AI Engineering",
    skills: [
      "Python",
      "XGBoost",
      "Machine Learning Pipelines",
      "Model Evaluation",
      "Forecast APIs",
      "AI Integration",
    ],
  },
  {
    label: "Databases & Infrastructure",
    skills: [
      "SQL (Postgres)",
      "noSQL (MongoDB)",
      "Kubernetes",
      "Docker",
      "AWS",
      "GCP",
      "Jenkins",
      "Terraform",
    ],
  },
  {
    label: "Architecture & Tools",
    skills: [
      "WebSockets",
      "Core Web Vitals",
      "PWAs",
      "Mobile WebView",
      "Fallback & Recovery Patterns",
      "Agile (Jira)",
    ],
  },
];

/* ── Certifications ─────────────────────────────────────────── */

export const certifications: Certification[] = [
  { title: "Node.js API Masterclass (Express/MongoDB)" },
  { title: "MERN eCommerce From Scratch" },
  { title: "AWS Cloud Architecture Fundamentals" },
  { title: "PyTorch & Advanced AI Systems" },
];

/* ── Education ──────────────────────────────────────────────── */

export const education = {
  school: "Giresun University",
  degree: "Associate of Science (A.S.)",
  field: "Computer Programming",
  location: "Giresun, Turkey",
  period: "2014 – 2016",
} as const;

/* ── Site info ──────────────────────────────────────────────── */

export const siteInfo = {
  title: "Umit Vice — AI Engineer & Senior Full Stack Engineer",
  description:
    "AI Engineer & Senior Full Stack Engineer with 8+ years in software engineering, building AI-enabled web and mobile products with hands-on team leadership experience.",
  url: "https://www.umitvice.com",
  creator: "Umit Vice",
} as const;

/**
 * Build Next.js Metadata from siteInfo.
 * Call this from layout.tsx's `metadata` export.
 */
export function buildMetadata(): Metadata {
  return {
    title: {
      default: siteInfo.title,
      template: `%s — ${siteInfo.title}`,
    },
    description: siteInfo.description,
    metadataBase: new URL(siteInfo.url),
    icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteInfo.title,
      title: siteInfo.title,
      description: siteInfo.description,
      url: "/",
      images: [{ url: "/social-image", width: 1200, height: 630, alt: siteInfo.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: siteInfo.title,
      description: siteInfo.description,
      images: ["/social-image"],
      creator: "@umitvice",
    },
    robots: { index: true, follow: true },
    authors: [{ name: siteInfo.creator, url: siteInfo.url }],
    creator: siteInfo.creator,
    keywords: ["AI Engineer", "Senior Full Stack Engineer", "Python", "Machine Learning", "React Native", "Next.js", "TypeScript"],
    other: {
      "google-site-verification": "",
    },
  } satisfies Metadata;
}

/** JSON-LD Person schema for structured data. */
export function personJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    givenName: "Umit",
    familyName: "Vice",
    jobTitle: profile.title,
    description: profile.summary,
    email: profile.email,
    telephone: profile.phone,
    address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
    url: siteInfo.url,
    sameAs: socials.filter((s) => s.name !== "Email").map((s) => s.href),
    knowsAbout: skillGroups.flatMap((g) => g.skills),
    alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  };
}
