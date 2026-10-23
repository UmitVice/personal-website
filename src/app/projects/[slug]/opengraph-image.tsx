import { caseStudies, getCaseStudy } from "@/content/projects";
import { OG_SIZE, renderOgCard } from "@/lib/og";
import { PERSON } from "@/lib/site";

export const alt = `Case study by ${PERSON.name}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export function generateStaticParams() {
  return caseStudies.map((product) => ({ slug: product.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getCaseStudy(slug);

  return renderOgCard({
    eyebrow: `Case study · ${PERSON.name}`,
    title: product?.name ?? PERSON.name,
    subtitle: product?.tagline ?? PERSON.jobTitle,
    footer: `umitvice.com/projects/${slug}`,
  });
}
