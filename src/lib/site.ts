/**
 * Site-wide constants shared by pages, metadata, JSON-LD, robots and sitemap.
 */

/** Canonical origin. The apex domain (umitvice.com) redirects here. */
export const SITE_URL = "https://www.umitvice.com";

/** Date of the last meaningful content update (sitemap and ProfilePage dateModified). */
export const SITE_UPDATED = "2026-10-23";

export const PERSON = {
  name: "Umithan Vice",
  /** Short form of the name, kept for search and structured data only. */
  alternateName: "Umit Vice",
  givenName: "Umithan",
  familyName: "Vice",
  jobTitle: "Senior AI & Full Stack Engineer",
  email: "umitvice@gmail.com",
  location: "Istanbul, Türkiye",
  photo: "/Umit_Vice_Profile_Photo.jpg",
} as const;

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/umitvice/",
  github: "https://github.com/UmitVice",
} as const;

export const MAILTO = `mailto:${PERSON.email}`;

export function absoluteUrl(path = "/"): string {
  return path === "/" ? SITE_URL : new URL(path, SITE_URL).toString();
}
