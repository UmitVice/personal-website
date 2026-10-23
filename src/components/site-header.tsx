import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MAILTO, PERSON } from "@/lib/site";

const navigation = [
  { label: "Work", href: "/#work" },
  { label: "Experience", href: "/#experience" },
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Contact", href: "/#contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="wordmark" href="/" aria-label={`${PERSON.name}, home`}>
        <span className="wordmark-mark" aria-hidden="true">
          UV
        </span>
        <span className="wordmark-copy">
          <strong>{PERSON.name}</strong>
          <small>Senior AI &amp; Full Stack</small>
        </span>
      </Link>

      <nav className="site-nav" aria-label="Primary">
        {navigation.map((item) => (
          <Link key={item.href} href={item.href}>
            {item.label}
          </Link>
        ))}
      </nav>

      <a className="header-cta" href={MAILTO}>
        Email me <ArrowUpRight aria-hidden="true" />
      </a>
    </header>
  );
}
