import { OG_SIZE, renderOgCard } from "@/lib/og";
import { PERSON } from "@/lib/site";

export const alt = `${PERSON.name}, ${PERSON.jobTitle}`;
export const size = OG_SIZE;
export const contentType = "image/png";

export default function Image() {
  return renderOgCard({
    eyebrow: PERSON.jobTitle,
    title: PERSON.name,
    subtitle: "I build AI products and the full stack around them.",
    footer: "umitvice.com  ·  LLMs, RAG & my own ML models",
    withPortrait: true,
  });
}
