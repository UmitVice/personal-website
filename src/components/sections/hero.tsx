import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";
import { Download } from "lucide-react";

function LinkedinIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      {...props}
    >
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="container-portfolio">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <div className="flex flex-col items-center text-center">
              <p className="tag mb-6 w-fit">Available for opportunities</p>
              <h1 className="font-sans text-[clamp(2.5rem,7vw,4.5rem)] font-bold leading-[1.05] tracking-tight text-on-surface">
                Umit Vice
              </h1>
              <h2 className="mt-3 font-sans text-[clamp(1.125rem,2.5vw,1.5rem)] font-medium tracking-tight text-primary md:mt-4">
                Senior Full Stack & AI Engineer
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-relaxed text-on-surface-variant md:text-lg">
                Specializing in zero to one product development, AI LLM workflows, and high
                performance architectures with 8+ years of global startup experience.
              </p>
              <div className="mt-10 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:justify-center">
                <Button size="lg" asChild>
                  <a
                    href="/Umit_Vice_Senior_FullStack_AI_Engineer_Resume.pdf"
                    download
                  >
                    <Download className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a
                    href="https://linkedin.com/in/umitvice"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="h-4 w-4" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
