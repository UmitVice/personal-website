import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail } from "lucide-react";
import { BrowserFrame } from "@/components/browser-frame";
import { ExternalLink } from "@/components/external-link";
import { JsonLd } from "@/components/json-ld";
import { ProductVisual } from "@/components/product-visual";
import { type CaseStudySection, caseStudies, getCaseStudy } from "@/content/projects";
import { caseStudyJsonLd, pageMetadata } from "@/lib/seo";
import { MAILTO, PERSON } from "@/lib/site";

interface CaseStudyPageProps {
  params: Promise<{ slug: string }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return caseStudies.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: CaseStudyPageProps): Promise<Metadata> {
  const product = getCaseStudy((await params).slug);
  if (!product) return {};

  return pageMetadata({
    path: `/projects/${product.slug}`,
    title: product.caseStudy.seoTitle,
    description: product.caseStudy.seoDescription,
    type: "article",
    modifiedTime: product.caseStudy.updatedAt,
  });
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

/** Bolds a short "Label:" prefix so long bullet lists stay scannable. */
function Bullet({ text }: { text: string }) {
  const separator = text.indexOf(": ");
  if (separator <= 0 || separator > 40) return <li>{text}</li>;

  return (
    <li>
      <strong>{text.slice(0, separator + 1)}</strong> {text.slice(separator + 2)}
    </li>
  );
}

function SectionContent({ section }: { section: CaseStudySection }) {
  return (
    <div className="case-section-content">
      {section.body && <p>{section.body}</p>}
      {section.bullets && (
        <ul className="case-list">
          {section.bullets.map((bullet) => (
            <Bullet key={bullet} text={bullet} />
          ))}
        </ul>
      )}
      {section.steps && (
        <ol className="case-steps">
          {section.steps.map((step, index) => (
            <li key={step.title}>
              <span aria-hidden="true">{pad(index + 1)}</span>
              <h3>{step.title}</h3>
              <p>{step.body}</p>
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const product = getCaseStudy((await params).slug);
  if (!product) notFound();

  const { caseStudy } = product;
  const position = caseStudies.indexOf(product);
  const nextProduct = caseStudies[(position + 1) % caseStudies.length];
  const liveLink = product.links.find((link) => link.kind === "live");

  return (
    <>
      <JsonLd data={caseStudyJsonLd(product)} />

      <article className="case">
        <header className={`case-hero slide-${product.tone}`}>
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <ol>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href={`/#${product.slug}`}>Work</Link>
              </li>
              <li aria-current="page">{product.name}</li>
            </ol>
          </nav>

          <div className="case-hero-grid">
            <div>
              <p className="slide-meta">
                <span>Case study</span>
                <span className="slide-status">{product.status}</span>
              </p>
              <h1 className="case-title">{product.name}</h1>
              <p className="case-tagline">{product.tagline}</p>
              <p className="case-summary">{product.summary}</p>
              <div className="slide-actions">
                {product.links.map((link) => (
                  <ExternalLink
                    key={link.href}
                    className={link.kind === "live" ? "button button-primary" : "text-link"}
                    href={link.href}
                    context={product.name}
                  >
                    {link.label}
                  </ExternalLink>
                ))}
              </div>
            </div>

            <dl className="case-facts">
              {caseStudy.facts.map((fact) => (
                <div key={fact.label}>
                  <dt>{fact.label}</dt>
                  <dd>{fact.value}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="case-visual">
            <BrowserFrame host={product.host}>
              <ProductVisual product={product} sizes="(max-width: 900px) 92vw, 1180px" eager />
            </BrowserFrame>
          </div>
        </header>

        <div className="case-body">
          {caseStudy.sections.map((section, index) => (
            <div key={section.heading}>
              <section className="case-section" aria-labelledby={`section-${index}`}>
                <h2 id={`section-${index}`}>{section.heading}</h2>
                <SectionContent section={section} />
              </section>
              {index === 1 && caseStudy.pullQuote && (
                <blockquote className="case-quote">
                  <p>{caseStudy.pullQuote}</p>
                </blockquote>
              )}
            </div>
          ))}

          {caseStudy.callout && (
            <aside className="case-callout" aria-labelledby="callout-title">
              <h2 id="callout-title">{caseStudy.callout.title}</h2>
              <p>{caseStudy.callout.body}</p>
              {liveLink && (
                <ExternalLink className="button button-dark" href={liveLink.href} context={product.name}>
                  Try {product.name}
                </ExternalLink>
              )}
            </aside>
          )}

          {caseStudy.disclaimer && <p className="case-disclaimer">{caseStudy.disclaimer}</p>}
        </div>

        <nav className="case-nav" aria-label="More work">
          <Link className="case-back" href={`/#${product.slug}`}>
            <ArrowLeft aria-hidden="true" /> All work
          </Link>
          {nextProduct && nextProduct !== product && (
            <Link className="case-next" href={`/projects/${nextProduct.slug}`}>
              <span>Next case study</span>
              <strong>
                {nextProduct.name} <ArrowRight aria-hidden="true" />
              </strong>
            </Link>
          )}
        </nav>
      </article>

      <section className="contact-section case-contact" aria-labelledby="case-contact-title">
        <p className="section-label">
          <Mail aria-hidden="true" /> Contact
        </p>
        <h2 id="case-contact-title">Want this kind of ownership on your team?</h2>
        <p>I am open to Senior AI and Full Stack Engineer roles. Email is the fastest way to reach me.</p>
        <div className="contact-actions">
          <a className="button button-dark" href={MAILTO}>
            {PERSON.email} <ArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </section>
    </>
  );
}
