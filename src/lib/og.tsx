import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { PERSON } from "./site";

export const OG_SIZE = { width: 1200, height: 630 };

const INK = "#0a1118";
const ACID = "#b9f45f";

interface OgCardProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  footer: string;
  withPortrait?: boolean;
}

async function portraitDataUrl() {
  const file = await readFile(join(process.cwd(), "public", PERSON.photo));
  return `data:image/jpeg;base64,${file.toString("base64")}`;
}

/** Shared Open Graph card in the site's ink and acid palette. */
export async function renderOgCard({ eyebrow, title, subtitle, footer, withPortrait = false }: OgCardProps) {
  const portrait = withPortrait ? await portraitDataUrl() : null;

  return new ImageResponse(
    (
      <div
        style={{
          background: INK,
          color: "#ffffff",
          display: "flex",
          fontFamily: "sans-serif",
          height: "100%",
          padding: "64px 72px",
          width: "100%",
        }}
      >
        <div style={{ display: "flex", flex: 1, flexDirection: "column", justifyContent: "space-between" }}>
          <div style={{ alignItems: "center", display: "flex", gap: 18 }}>
            <div
              style={{
                alignItems: "center",
                background: ACID,
                color: INK,
                display: "flex",
                fontSize: 22,
                fontWeight: 800,
                height: 56,
                justifyContent: "center",
                width: 56,
              }}
            >
              UV
            </div>
            <div style={{ color: ACID, display: "flex", fontSize: 26 }}>{eyebrow}</div>
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>
              {title}
            </div>
            <div style={{ color: "#a6b1b9", display: "flex", fontSize: 38, lineHeight: 1.25, marginTop: 26, maxWidth: 760 }}>
              {subtitle}
            </div>
          </div>

          <div style={{ borderTop: "1px solid rgba(255,255,255,0.16)", color: "#8a97a1", display: "flex", fontSize: 24, paddingTop: 22 }}>
            {footer}
          </div>
        </div>

        {portrait && (
          <img
            src={portrait}
            alt=""
            width={300}
            height={360}
            style={{ alignSelf: "center", border: "2px solid rgba(255,255,255,0.2)", marginLeft: 56, objectFit: "cover" }}
          />
        )}
      </div>
    ),
    OG_SIZE,
  );
}
