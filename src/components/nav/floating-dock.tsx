"use client";

import { useEffect, useState, useCallback } from "react";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
] as const;

/**
 * Floating glass navigation dock.
 * - Sticks to the top (or bottom on mobile)
 * - Highlights active section via IntersectionObserver
 * - Hides on scroll‑down, shows on scroll‑up
 */
export function FloatingDock() {
  const [activeId, setActiveId] = useState("hero");
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // IntersectionObserver for section tracking
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry?.isIntersecting) {
            setActiveId(id);
          }
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  // Hide on scroll-down, show on scroll-up
  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    // Only apply hide logic when scrolled past hero (~400px)
    if (currentScrollY > 400) {
      setIsVisible(currentScrollY < lastScrollY);
    } else {
      setIsVisible(true);
    }
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      role="banner"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 flex justify-center transition-transform duration-300",
        isVisible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <nav
        className="mt-3 w-fit max-w-[calc(100%-32px)] rounded-full glass-strong px-1 py-1 shadow-sm md:mt-4"
        role="navigation"
        aria-label="Main navigation"
      >
        <ul className="flex items-center gap-0.5">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollTo(item.id)}
                className={cn(
                  "relative rounded-full px-3 py-1.5 text-xs font-medium transition-colors duration-200 md:px-4 md:py-2 md:text-sm",
                  activeId === item.id
                    ? "bg-primary text-primary-foreground"
                    : "text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high"
                )}
                aria-current={activeId === item.id ? "true" : undefined}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
