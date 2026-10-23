import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="not-found" aria-labelledby="not-found-title">
      <p className="section-label">Error 404</p>
      <h1 id="not-found-title">This page does not exist.</h1>
      <p>The link may be broken, or the page may have moved.</p>
      <Link className="button button-dark" href="/">
        <ArrowLeft aria-hidden="true" /> Back to home
      </Link>
    </section>
  );
}
