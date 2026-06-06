import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center px-4 text-center">
      <h1 className="font-sans text-6xl font-bold text-primary">404</h1>
      <p className="mt-4 text-lg text-on-surface-variant">
        Page not found. The link might be broken or the page has been removed.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex h-10 items-center rounded-full bg-primary px-6 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
      >
        Back to Home
      </Link>
    </main>
  );
}