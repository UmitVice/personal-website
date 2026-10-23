import { MAILTO, PERSON, SOCIAL_LINKS } from "@/lib/site";
import { ExternalLink } from "./external-link";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <span className="wordmark-mark" aria-hidden="true">
          UV
        </span>
        <p>
          <strong>
            {PERSON.name} ({PERSON.alternateName})
          </strong>
          <span>
            {PERSON.jobTitle} · {PERSON.location}
          </span>
        </p>
      </div>

      <nav className="footer-links" aria-label="Contact and profiles">
        <a href={MAILTO}>{PERSON.email}</a>
        <ExternalLink href={SOCIAL_LINKS.linkedin} me>
          LinkedIn
        </ExternalLink>
        <ExternalLink href={SOCIAL_LINKS.github} me>
          GitHub
        </ExternalLink>
      </nav>

      <p className="footer-copy">© {new Date().getFullYear()} {PERSON.name}</p>
    </footer>
  );
}
