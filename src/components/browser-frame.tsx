import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";

/**
 * Decorative browser window around a product preview. Built from spans so it
 * can sit inside a link.
 */
export function BrowserFrame({ host, children }: { host: string; children: ReactNode }) {
  return (
    <span className="browser">
      <span className="browser-bar">
        <span className="browser-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="browser-address">{host}</span>
        <ArrowUpRight aria-hidden="true" />
      </span>
      <span className="browser-screen">{children}</span>
    </span>
  );
}
