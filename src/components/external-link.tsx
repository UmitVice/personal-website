import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

interface ExternalLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  /** Extra screen-reader context, e.g. the project name. */
  context?: string;
  /** Marks profile links (LinkedIn, GitHub) as belonging to the site owner. */
  me?: boolean;
}

/** Link that opens in a new tab, with an icon and screen-reader hint. */
export function ExternalLink({ href, children, className, context, me = false }: ExternalLinkProps) {
  return (
    <a className={className} href={href} target="_blank" rel={me ? "me noopener" : "noopener"}>
      {children}
      <ArrowUpRight aria-hidden="true" />
      <span className="sr-only">
        {context ? `: ${context}` : ""} (opens in a new tab)
      </span>
    </a>
  );
}
