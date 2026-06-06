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

export interface Project {
  title: string;
  role: string;
  company: string;
  impact: string;
  tags: readonly string[];
  highlight?: string;
}

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
  title: "Senior Full Stack Engineer",
  subtitle: "Frontend · React · Next.js · System Design",
  location: "Istanbul, Turkey",
  email: "umitvice@gmail.com",
  phone: "+90 536 218 8238",
  summary:
    "Senior Software Developer with 8+ years of experience building high-performance web and mobile applications using React, Next.js, Node.js, and React Native. Expert in system design, frontend architecture, perfect 100/100 Lighthouse optimization, and high-performance WebView solutions. Proven track record of taking 100% technical ownership of software ecosystems and mentoring teams. Skilled in integrating AI/LLM workflows into UIs and collaborating with global cross-functional teams across US Eastern, UK, and European timezones.",
  /** Three pillars for the About section */
  pillars: [
    {
      title: "System Design",
      description:
        "Architecting scalable frontend and backend systems with clean separation of concerns, microservices, and data-driven decision-making.",
    },
    {
      title: "Frontend Architecture",
      description:
        "Building maintainable, high-performance UIs with React, Next.js, and TypeScript — achieving Lighthouse scores of 100/100 and Core Web Vitals excellence.",
    },
    {
      title: "AI / LLM Integration",
      description:
        "Integrating modern AI workflows into production UIs, from LLM-powered data processing to intelligent automation interfaces.",
    },
  ],
  /** Quick stats for the hero quick-stats card */
  stats: [
    { label: "Years Experience", value: "8+" },
    { label: "Lighthouse Score", value: "100/100" },
    { label: "Teams Mentored", value: "5+" },
    { label: "Global Projects", value: "10+" },
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
    role: "Full Stack Developer",
    company: "Bolt Insight",
    location: "London, UK",
    period: "Jan 2026 – Present",
    highlights: [
      "Lead end-to-end frontend development of high-performance web applications using React, Next.js, and Node.js deployed on AWS ecosystems.",
      "Championed client-side performance initiatives, increasing Lighthouse and Core Web Vitals scores by 25% across core modules.",
      "Architect and implement production-ready UI workflows and LLM integrations to automate complex data processes.",
    ],
    tags: ["React", "Next.js", "Node.js", "AWS", "LLM"],
  },
  {
    role: "Senior Software Developer (Contract)",
    company: "Marti Technologies (NYSE: MRT)",
    location: "Istanbul, Turkey",
    period: "Jul 2025 – Dec 2025",
    highlights: [
      "Spearheaded frontend architecture and feature development for Marti Tag admin panel and CRM systems, reducing page load times.",
      "Assumed technical ownership of frontend deliverables, mentoring team members and establishing client-side best practices.",
      "Contributed to backend and frontend enhancements leveraging PostgreSQL and Node.js to ensure system availability during peak traffic.",
    ],
    tags: ["React", "Node.js", "PostgreSQL", "CRM"],
  },
  {
    role: "Senior Software Developer",
    company: "Vodafone",
    location: "Istanbul, Turkey",
    period: "Apr 2024 – May 2025",
    highlights: [
      "Engineered scalable frontend and mobile WebView solutions for Vodafone & Hepsiburada CRM Project, achieving 100/100 Lighthouse scores.",
      "Executed UI refresh for Vodafone Business and delivered critical features for Her Sey Yanimda, enhancing mobile UX.",
      "Built an internal campaign management platform (HB Campaign Panel) from scratch utilizing Next.js, React, and Styled Components.",
    ],
    tags: ["React", "Next.js", "WebView", "100/100 GWS"],
  },
  {
    role: "Software Developer",
    company: "Talent500",
    location: "USA & India",
    period: "Apr 2022 – Apr 2024",
    highlights: [
      "Architected and took 100% technical ownership of AI Planet platform frontend (6 months), building web/mobile UIs from scratch using Next.js and React Native.",
      "Contributed to Canvas Project, driving a UI redesign and React to Next.js migration that reached up to 100/100 Lighthouse scores.",
      "Served as a key frontend contributor across distributed global teams, managing deliverables and mentoring junior developers.",
    ],
    tags: ["Next.js", "React Native", "100/100 GWS", "Migration"],
  },
  {
    role: "Senior Software Developer",
    company: "Optimus Yazilim",
    location: "Istanbul, Turkey",
    period: "Nov 2021 – Mar 2022",
    highlights: [
      "Drove frontend lifecycle for a high-traffic Investment/Fundraising Platform using React, React Native, and GraphQL.",
      "Optimized API integrations and client-side data caching with MongoDB, reducing application latency and response times.",
      "Provided technical guidance and mentorship to developers, shaping the project's frontend technical decisions.",
    ],
    tags: ["React", "React Native", "GraphQL", "MongoDB"],
  },
  {
    role: "Full Stack Developer (Contract)",
    company: "Freelance",
    location: "Remote",
    period: "Jan 2021 – Dec 2021",
    highlights: [
      "Developed and deployed production-ready web applications for e-commerce and finance sectors using React and Node.js.",
      "Delivered clean, responsive frontend UIs and integrated secure RESTful APIs with MongoDB databases.",
    ],
    tags: ["React", "Node.js", "REST", "MongoDB"],
  },
  {
    role: "Software Developer",
    company: "M&L Software",
    location: "Istanbul, Turkey",
    period: "Jan 2020 – Jan 2021",
    highlights: [
      "Developed comprehensive ERP and e-commerce applications using React and React Native deployed on Google Cloud Platform (GCP).",
    ],
    tags: ["React", "React Native", "GCP", "ERP"],
  },
];

/* ── Projects ───────────────────────────────────────────────── */

export const projects: Project[] = [
  {
    title: "AI Planet Platform",
    role: "100% Frontend Ownership",
    company: "Talent500",
    impact: "Built web and mobile UIs from scratch in 6 months using Next.js and React Native.",
    tags: ["Next.js", "React Native", "TypeScript"],
    highlight: "100% Ownership",
  },
  {
    title: "Canvas Project",
    role: "UI Redesign & Migration Lead",
    company: "Talent500",
    impact: "Drove React to Next.js migration, reaching 100/100 Lighthouse scores.",
    tags: ["Next.js", "React", "Migration"],
    highlight: "100/100 Lighthouse",
  },
  {
    title: "HB Campaign Panel",
    role: "Built From Scratch",
    company: "Vodafone",
    impact: "Internal campaign management platform built with Next.js, React, and Styled Components.",
    tags: ["Next.js", "React", "Styled Components"],
  },
  {
    title: "Vodafone Business UI Refresh",
    role: "UI Refresh Lead",
    company: "Vodafone",
    impact: "Executed UI refresh across Vodafone Business and Her Sey Yanimda mobile experiences.",
    tags: ["React", "WebView", "Mobile UX"],
  },
  {
    title: "Marti Tag Admin Panel & CRM",
    role: "Frontend Architect",
    company: "Marti Technologies",
    impact: "Reduced page load times through architecture overhaul and mentoring team best practices.",
    tags: ["React", "Admin Panel", "CRM"],
  },
  {
    title: "AI/LLM Workflow Integrations",
    role: "Architect & Developer",
    company: "Bolt Insight",
    impact: "Production-ready LLM integrations automating complex data processes.",
    tags: ["AI", "LLM", "Node.js"],
  },
];

/* ── Skills ─────────────────────────────────────────────────── */

export const skillGroups: SkillGroup[] = [
  {
    label: "Frontend",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "HTML5 / CSS3",
      "React",
      "Next.js",
      "Redux",
      "Styled Components",
      "Web Components",
      "PWAs",
      "Core Web Vitals",
    ],
  },
  {
    label: "Mobile",
    skills: ["React Native", "Hybrid Apps", "Mobile WebView", "Cross-Platform UI", "Android Studio"],
  },
  {
    label: "Backend & APIs",
    skills: ["TypeScript", "Node.js", "Express", "Nest.js", "PostgreSQL", "REST", "GraphQL", "Microservices", "Go (Basic)", "MongoDB"],
  },
  {
    label: "AI & DevOps",
    skills: ["AI Agents", "LLM Workflows", "RAG", "AWS", "GCP", "Azure", "CI/CD (GitHub Actions)", "Docker", "Jest"],
  },
];

/* ── Certifications ─────────────────────────────────────────── */

export const certifications: Certification[] = [
  { title: "Node.js API Masterclass (Express & MongoDB)" },
  { title: "MERN eCommerce From Scratch" },
  { title: "Cloud Computing Fundamentals & Intro to AWS Architecture" },
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
  title: "Umit Vice — Senior Full Stack Engineer",
  description:
    "Senior Full Stack Engineer specializing in React, Next.js, React Native, and AI/LLM integrations. 100/100 Lighthouse optimization expert.",
  url: "https://umitvice.dev",
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
    alternates: { canonical: "/" },
    openGraph: {
      type: "website",
      locale: "en_US",
      siteName: siteInfo.title,
      title: siteInfo.title,
      description: siteInfo.description,
      url: "/",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: siteInfo.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: siteInfo.title,
      description: siteInfo.description,
      images: ["/og.png"],
      creator: "@umitvice",
    },
    robots: { index: true, follow: true },
    authors: [{ name: siteInfo.creator, url: siteInfo.url }],
    creator: siteInfo.creator,
    keywords: [
      "Senior Full Stack Engineer",
      "React",
      "Next.js",
      "React Native",
      "TypeScript",
      "Node.js",
      "Istanbul",
      "Portfolio",
    ],
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