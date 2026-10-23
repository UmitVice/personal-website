import type { MetadataRoute } from "next";
import { caseStudies } from "@/content/projects";
import { SITE_UPDATED, absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...caseStudies.map((product) => ({
      url: absoluteUrl(`/projects/${product.slug}`),
      lastModified: product.caseStudy.updatedAt,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
