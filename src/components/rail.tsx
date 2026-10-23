"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import {
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

export interface RailItem {
  /** Id of the slide element, also used as a deep-link anchor. */
  id: string;
  /** Short name used by jump chips and announcements. */
  label: string;
}

interface RailProps {
  /** Accessible name of the carousel, e.g. "Products". */
  label: string;
  /** Singular noun for announcements and button labels, e.g. "product". */
  noun: string;
  items: readonly RailItem[];
  /** "feature" moves one large slide at a time; "compact" pages through visible cards. */
  variant: "feature" | "compact";
  showChips?: boolean;
  /** Server-rendered slides; each direct child must carry the matching item id. */
  children: ReactNode;
}

type Range = readonly [first: number, last: number];

const VISIBLE_RATIO = { feature: 0.55, compact: 0.9 } as const;

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function scrollBehavior(): ScrollBehavior {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth";
}

/**
 * Horizontally scrolling carousel built on native scroll snapping.
 *
 * Content stays fully server-rendered and scrollable without JavaScript;
 * this island only adds controls, position state and announcements.
 */
export function Rail({ label, noun, items, variant, showChips = false, children }: RailProps) {
  const trackId = useId();
  const hintId = useId();
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLSpanElement>(null);
  const announceNext = useRef(false);
  const [range, setRange] = useState<Range>([0, 0]);
  const [ready, setReady] = useState(false);
  const [announcement, setAnnouncement] = useState("");

  const count = items.length;
  const [first, last] = range;
  const atStart = first <= 0;
  const atEnd = last >= count - 1;

  const scrollToIndex = useCallback(
    (index: number, behavior: ScrollBehavior = scrollBehavior()) => {
      const track = trackRef.current;
      const slide = track?.children[Math.min(Math.max(index, 0), count - 1)];
      if (!track || !(slide instanceof HTMLElement)) return;

      // Slides are positioned relative to the track (position: relative).
      const paddingStart = Number.parseFloat(getComputedStyle(track).getPropertyValue("scroll-padding-left")) || 0;
      track.scrollTo({ left: slide.offsetLeft - paddingStart, behavior });
    },
    [count],
  );

  const move = useCallback(
    (index: number) => {
      announceNext.current = true;
      scrollToIndex(index);
    },
    [scrollToIndex],
  );

  const pageSize = variant === "feature" ? 1 : Math.max(last - first + 1, 1);
  const previous = () => {
    if (!atStart) move(first - pageSize);
  };
  const next = () => {
    if (!atEnd) move(variant === "feature" ? first + 1 : last + 1);
  };

  // Track which slides are visible to drive the counter, chips and buttons.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const slides = Array.from(track.children);
    const ratios = new Map<Element, number>();
    const threshold = VISIBLE_RATIO[variant];

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) ratios.set(entry.target, entry.intersectionRatio);

        const visible = slides.flatMap((slide, index) => ((ratios.get(slide) ?? 0) >= threshold ? [index] : []));
        const firstVisible = visible[0];
        const lastVisible = visible.at(-1);
        if (firstVisible === undefined || lastVisible === undefined) return;

        setRange([firstVisible, lastVisible]);
        setReady(true);
        if (announceNext.current) {
          announceNext.current = false;
          const item = items[firstVisible];
          setAnnouncement(
            variant === "feature" && item
              ? `${item.label}, ${noun} ${firstVisible + 1} of ${count}`
              : `${noun}s ${firstVisible + 1} to ${lastVisible + 1} of ${count}`,
          );
        }
      },
      { root: track, threshold: [0, threshold, 1] },
    );

    for (const slide of slides) observer.observe(slide);
    return () => observer.disconnect();
  }, [count, items, noun, variant]);

  // Reflect horizontal progress without re-rendering on every scroll frame.
  useEffect(() => {
    const track = trackRef.current;
    const progress = progressRef.current;
    if (!track || !progress) return;

    let frame = 0;
    const update = () => {
      frame = 0;
      const ratio = track.scrollWidth > 0 ? (track.scrollLeft + track.clientWidth) / track.scrollWidth : 1;
      progress.style.transform = `scaleX(${Math.min(Math.max(ratio, 0), 1)})`;
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    track.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(frame);
      track.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // Align the slide named in the URL hash, on load and on in-page navigation.
  useEffect(() => {
    const alignToHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const index = items.findIndex((item) => item.id === id);
      if (index >= 0) scrollToIndex(index, "instant");
    };

    alignToHash();
    window.addEventListener("hashchange", alignToHash);
    return () => window.removeEventListener("hashchange", alignToHash);
  }, [items, scrollToIndex]);

  const onTrackKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.target !== event.currentTarget) return;

    const actions: Record<string, () => void> = {
      ArrowLeft: previous,
      ArrowRight: next,
      Home: () => move(0),
      End: () => move(count - 1),
    };
    const action = actions[event.key];
    if (!action) return;

    event.preventDefault();
    action();
  };

  const onChipClick = (event: MouseEvent<HTMLAnchorElement>, index: number, id: string) => {
    event.preventDefault();
    move(index);
    window.history.replaceState(null, "", `#${id}`);
  };

  const counter = variant === "feature" ? pad(first + 1) : `${pad(first + 1)}–${pad(last + 1)}`;

  return (
    <div
      className="rail"
      data-variant={variant}
      // Controls stay hidden until hydration, since they need JavaScript to work.
      data-ready={ready || undefined}
      role="region"
      aria-roledescription="carousel"
      aria-label={label}
    >
      <div className="rail-toolbar">
        {showChips ? (
          <ul className="rail-chips" aria-label={`Jump to a ${noun}`}>
            {items.map((item, index) => (
              <li key={item.id}>
                <a
                  className="rail-chip"
                  href={`#${item.id}`}
                  aria-controls={trackId}
                  aria-current={index === first ? "true" : undefined}
                  onClick={(event) => onChipClick(event, index, item.id)}
                >
                  <span aria-hidden="true">{pad(index + 1)}</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        ) : (
          <p className="rail-hint" aria-hidden="true">
            Swipe or use the arrows
          </p>
        )}

        <div className="rail-controls">
          <p className="rail-counter" aria-hidden="true">
            <span>{counter}</span> / {pad(count)}
          </p>
          <button
            type="button"
            className="rail-button"
            aria-controls={trackId}
            aria-disabled={atStart || undefined}
            aria-label={`Previous ${noun}`}
            onClick={previous}
          >
            <ArrowLeft aria-hidden="true" />
          </button>
          <button
            type="button"
            className="rail-button"
            aria-controls={trackId}
            aria-disabled={atEnd || undefined}
            aria-label={`Next ${noun}`}
            onClick={next}
          >
            <ArrowRight aria-hidden="true" />
          </button>
        </div>
      </div>

      <p id={hintId} className="sr-only">
        Use the left and right arrow keys or the previous and next buttons to browse.
      </p>
      <div
        ref={trackRef}
        id={trackId}
        className="rail-track"
        role="group"
        aria-label={`${label} list`}
        aria-describedby={hintId}
        tabIndex={0}
        onKeyDown={onTrackKeyDown}
      >
        {children}
      </div>

      <div className="rail-progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>
      <p className="sr-only" aria-live="polite">
        {announcement}
      </p>
    </div>
  );
}
