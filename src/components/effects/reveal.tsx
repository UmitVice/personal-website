"use client";

import { useRef, useState, useEffect, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * Scroll‑reveal wrapper that uses IntersectionObserver (no JS animation lib).
 * When the element enters the viewport, it fades in from `fromY` towards its
 * natural position using a CSS transition.  Respects `prefers-reduced-motion`.
 */
interface RevealProps {
  children: ReactNode;
  className?: string;
  /** Delay in ms before the reveal starts */
  delay?: number;
  /** Starting translateY value in px */
  fromY?: number;
  /** Duration in ms */
  duration?: number;
}

export function Reveal({
  children,
  className,
  delay = 0,
  fromY = 24,
  duration = 500,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : `translateY(${fromY}px)`,
        transition: `opacity ${duration}ms ease-out, transform ${duration}ms ease-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}