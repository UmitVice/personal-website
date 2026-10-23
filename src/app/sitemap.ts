import type { MetadataRoute } from "next";
import { SITE_UPDATED, absoluteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: absoluteUrl("/"),
      lastModified: SITE_UPDATED,
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
