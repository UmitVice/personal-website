"use client";

import { useEffect, useRef } from "react";

/**
 * Aurora Background — pure CSS-based atmospheric backdrop.
 * Three radial gradients (sky blue, soft blue, sandy beige) drift
 * horizontally and vertically via the `aurora-drift` keyframe.
 * Respects `prefers-reduced-motion`.
 */
export function AuroraBackground() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (ref.current && prefersReduced) {
      ref.current.style.animation = "none";
      ref.current.style.opacity = "0.3";
    }
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
      aria-hidden="true"
    >
      {/* Gradient layers.
          Note: we intentionally use the longhand `backgroundImage` (not the
          shorthand `background`) so React serializes identical inline styles
          on the server and the client. The shorthand gets normalized by the
          browser into multiple longhand properties, which would otherwise
          cause a hydration mismatch warning. */}
      <div
        className="absolute -inset-[50%] animate-aurora-drift opacity-30 blur-3xl"
        style={{
          backgroundImage: `
            radial-gradient(ellipse 80% 60% at 20% 30%, rgba(14,165,233,0.25) 0%, transparent 70%),
            radial-gradient(ellipse 60% 50% at 80% 40%, rgba(125,211,252,0.2) 0%, transparent 60%),
            radial-gradient(ellipse 50% 40% at 50% 60%, rgba(254,243,199,0.15) 0%, transparent 60%)
          `,
        }}
        suppressHydrationWarning
      />
    </div>
  );
}