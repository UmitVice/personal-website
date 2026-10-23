import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/content/projects";
import { BrowserFrame } from "./browser-frame";
import { ExternalLink } from "./external-link";
import { ProductVisual } from "./product-visual";

interface ProductSlideProps {
  product: Product;
  index: number;
  total: number;
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

export function ProductSlide({ product, index, total }: ProductSlideProps) {
  const caseStudyHref = product.caseStudy ? `/projects/${product.slug}` : undefined;
  const liveHref = product.links.find((link) => link.kind === "live")?.href;

  const frame = (
    <BrowserFrame host={product.host}>
      <ProductVisual product={product} sizes="(max-width: 900px) 86vw, 620px" decorative />
    </BrowserFrame>
  );

  return (
    <article
      id={product.slug}
      className={`slide slide-${product.tone}`}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}: ${product.name}`}
    >
      <div className="slide-copy">
        <p className="slide-meta">
          <span>
            {pad(index + 1)} / {pad(total)}
          </span>
          <span className="slide-status">{product.status}</span>
        </p>
        <h3 className="slide-title">{product.name}</h3>
        <p className="slide-tagline">{product.tagline}</p>
        <p className="slide-role">{product.role}</p>

        <ul className="slide-highlights">
          {product.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>

        <ul className="chips chips-dark" aria-label={`${product.name} focus areas`}>
          {product.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>

        <div className="slide-actions">
          {caseStudyHref && (
            <Link className="button button-primary" href={caseStudyHref}>
              Read case study<span className="sr-only">: {product.name}</span>
              <ArrowRight aria-hidden="true" />
            </Link>
          )}
          {product.links.map((link) => (
            <ExternalLink key={link.href} className="text-link" href={link.href} context={product.name}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </div>

      {/* The preview repeats the links above, so it is hidden from keyboard and screen readers. */}
      {caseStudyHref ? (
        <Link className="slide-visual" href={caseStudyHref} tabIndex={-1} aria-hidden="true">
          {frame}
        </Link>
      ) : liveHref ? (
        <a className="slide-visual" href={liveHref} target="_blank" rel="noopener" tabIndex={-1} aria-hidden="true">
          {frame}
        </a>
      ) : (
        <div className="slide-visual" aria-hidden="true">
          {frame}
        </div>
      )}
    </article>
  );
}
