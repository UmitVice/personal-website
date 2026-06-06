"use client";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant/50 py-8">
      <div className="container-portfolio">
        <div className="flex flex-col items-center gap-2 text-center text-xs text-on-surface-variant sm:flex-row sm:justify-between">
          <p>&copy; {year} Umit Vice. All rights reserved.</p>
          <p>
            Built with{" "}
            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-primary"
            >
              Next.js
            </a>
            ,{" "}
            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-primary"
            >
              Tailwind CSS
            </a>
            , and{" "}
            <a
              href="https://ui.shadcn.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline transition-colors hover:text-primary"
            >
              shadcn/ui
            </a>
            .
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="underline transition-colors hover:text-primary"
            type="button"
          >
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}