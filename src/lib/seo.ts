import type { Metadata } from "next";
import { education } from "@/content/profile";
import type { CaseStudy, Product } from "@/content/projects";
import { PERSON, SITE_UPDATED, SITE_URL, SOCIAL_LINKS, absoluteUrl } from "./site";

export const SITE_TITLE = `${PERSON.name} — ${PERSON.jobTitle}`;

export const SITE_DESCRIPTION =
  "Umithan Vice is a Senior AI & Full Stack Engineer with 8+ years shipping LLM, RAG and machine learning products end to end in Python and TypeScript.";

const PERSON_ID = `${SITE_URL}/#person`;
const WEBSITE_ID = `${SITE_URL}/#website`;

/** Site-wide defaults. Page-specific fields (canonical, Open Graph) come from `pageMetadata`. */
export const baseMetadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: SITE_TITLE, template: `%s · ${PERSON.name}` },
  description: SITE_DESCRIPTION,
  applicationName: PERSON.name,
  authors: [{ name: PERSON.name, url: SITE_URL }],
  creator: PERSON.name,
  icons: { icon: { url: "/favicon.svg", type: "image/svg+xml" } },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

interface PageMetadataInput {
  path: string;
  /** Page title without the site suffix; omit for the home page. */
  title?: string;
  description: string;
  type: "profile" | "article";
  modifiedTime?: string;
}

/**
 * Canonical URL, Open Graph and Twitter fields for one page. Next merges
 * metadata shallowly, so every page sets these itself instead of inheriting
 * the home page's values from the layout.
 */
export function pageMetadata({ path, title, description, type, modifiedTime }: PageMetadataInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = title ? `${title} · ${PERSON.name}` : SITE_TITLE;
  const shared = { url, title: fullTitle, description, siteName: PERSON.name, locale: "en_US" };

  return {
    title: title ?? { absolute: SITE_TITLE },
    description,
    alternates: { canonical: url },
    openGraph:
      type === "profile"
        ? { ...shared, type: "profile", firstName: PERSON.givenName, lastName: PERSON.familyName }
        : { ...shared, type: "article", modifiedTime, authors: [SITE_URL] },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

function personNode() {
  return {
    "@type": "Person",
    "@id": PERSON_ID,
    name: PERSON.name,
    alternateName: PERSON.alternateName,
    givenName: PERSON.givenName,
    familyName: PERSON.familyName,
    jobTitle: PERSON.jobTitle,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    image: absoluteUrl(PERSON.photo),
    email: `mailto:${PERSON.email}`,
    address: { "@type": "PostalAddress", addressLocality: "Istanbul", addressCountry: "TR" },
    sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
    knowsAbout: [
      "Artificial intelligence",
      "Large language models",
      "Retrieval-augmented generation",
      "Machine learning",
      "Probabilistic forecasting",
      "Python",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "Cloud infrastructure",
    ],
    knowsLanguage: "English",
    alumniOf: { "@type": "CollegeOrUniversity", name: education.school },
  };
}

export function homeJsonLd() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: SITE_URL,
        name: PERSON.name,
        alternateName: PERSON.alternateName,
        inLanguage: "en-US",
        publisher: { "@id": PERSON_ID },
      },
      {
        "@type": "ProfilePage",
        "@id": `${SITE_URL}/#profilepage`,
        url: SITE_URL,
        name: SITE_TITLE,
        isPartOf: { "@id": WEBSITE_ID },
        mainEntity: { "@id": PERSON_ID },
        dateModified: SITE_UPDATED,
        inLanguage: "en-US",
      },
      personNode(),
    ],
  };
}

export function caseStudyJsonLd(product: Product & { caseStudy: CaseStudy }) {
  const { caseStudy } = product;
  const { schema } = caseStudy;
  const url = absoluteUrl(`/projects/${product.slug}`);
  const softwareId = `${url}#software`;
  const liveUrl = product.links.find((link) => link.kind === "live")?.href;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": url,
        url,
        name: `${caseStudy.seoTitle} · ${PERSON.name}`,
        description: caseStudy.seoDescription,
        isPartOf: { "@id": WEBSITE_ID },
        about: { "@id": softwareId },
        author: { "@id": PERSON_ID },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        dateModified: caseStudy.updatedAt,
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: PERSON.name, item: SITE_URL },
          { "@type": "ListItem", position: 2, name: product.name, item: url },
        ],
      },
      {
        "@type": "SoftwareApplication",
        "@id": softwareId,
        name: product.name,
        description: product.summary,
        url: liveUrl,
        applicationCategory: schema.applicationCategory,
        operatingSystem: "Web",
        creator: { "@id": PERSON_ID },
        ...(schema.isAccessibleForFree
          ? {
              isAccessibleForFree: true,
              offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
            }
          : {}),
      },
      ...(schema.codeRepository
        ? [
            {
              "@type": "SoftwareSourceCode",
              "@id": `${url}#source`,
              name: `${product.name} source code`,
              codeRepository: schema.codeRepository,
              programmingLanguage: schema.programmingLanguage,
              license: schema.license,
              author: { "@id": PERSON_ID },
              targetProduct: { "@id": softwareId },
            },
          ]
        : []),
      {
        "@type": "Person",
        "@id": PERSON_ID,
        name: PERSON.name,
        alternateName: PERSON.alternateName,
        jobTitle: PERSON.jobTitle,
        url: SITE_URL,
        sameAs: [SOCIAL_LINKS.linkedin, SOCIAL_LINKS.github],
      },
    ],
  };
}
