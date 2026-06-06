import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/effects/reveal";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative flex min-h-dvh flex-col items-center justify-center pt-24 pb-12 md:pt-28"
    >
      <div className="container-portfolio">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <div className="grid gap-12 md:grid-cols-12 md:items-center">
              {/* Left column: text */}
              <div className="md:col-span-7 lg:col-span-8">
                <p className="tag mb-4 w-fit">Available for opportunities</p>
                <h1 className="font-sans text-[clamp(2rem,6vw,3.5rem)] font-bold leading-[1.1] tracking-tight text-on-surface">
                  {profile.name}
                </h1>
                <p className="mt-2 text-lg font-medium text-primary md:text-xl">
                  {profile.title}
                </p>
                <p className="mt-1 text-base text-on-surface-variant">{profile.subtitle}</p>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-on-surface-variant">
                  {profile.summary}
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="#contact">
                    <Button size="lg">Get in Touch</Button>
                  </a>
                  <Button variant="secondary" size="lg" asChild>
                    <a href="/resume.pdf" download>
                      Download Resume
                    </a>
                  </Button>
                </div>
                {/* Tech chips */}
                <div className="mt-8 flex flex-wrap gap-2">
                  {["React", "Next.js", "TypeScript", "Node.js", "AI / LLM"].map((tech) => (
                    <span key={tech} className="tag">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Right column: stats */}
              <div className="md:col-span-5 lg:col-span-4">
                <div className="glass glow-primary rounded-xl p-6 md:p-8">
                  <h2 className="sr-only">Quick stats</h2>
                  <div className="grid grid-cols-2 gap-6">
                    {profile.stats.map((stat) => (
                      <div key={stat.label} className="text-center">
                        <p className="text-3xl font-bold text-primary md:text-4xl">
                          {stat.value}
                        </p>
                        <p className="mt-1 text-xs font-medium text-on-surface-variant">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}