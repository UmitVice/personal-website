import { ImageResponse } from "next/og";
import { profile } from "@/lib/data";

export const dynamic = "force-static";

export function GET() {
  return new ImageResponse(
    (
      <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", width: "100%", height: "100%", background: "#0a1118", color: "#ffffff", padding: "72px", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", color: "#b9f45f", fontSize: 25, marginBottom: 32 }}>{profile.title}</div>
        <div style={{ display: "flex", fontSize: 92, fontWeight: 700, letterSpacing: -4 }}>{profile.name}</div>
        <div style={{ display: "flex", fontSize: 44, lineHeight: 1.2, maxWidth: 930, marginTop: 28 }}>I build AI products and complete web applications.</div>
        <div style={{ display: "flex", color: "#bbc5cc", fontSize: 24, lineHeight: 1.5, marginTop: 38, maxWidth: 950 }}>{profile.subtitle}</div>
      </div>
    ),
    { width: 1200, height: 630 },
  );
}
