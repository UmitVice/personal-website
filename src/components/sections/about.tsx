import { profile } from "@/lib/data";
import { Reveal } from "@/components/effects/reveal";

export function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container-portfolio">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-sans text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
              About
            </h2>
            <div className="mt-8 grid gap-8 md:grid-cols-12">
              <div className="md:col-span-8">
                <div className="glass rounded-xl p-6 md:p-8">
                  <p className="text-base leading-relaxed text-on-surface-variant">
                    {profile.summary}
                  </p>
                </div>
              </div>
              <div className="md:col-span-4">
                {/* Initials tile */}
                <div className="flex aspect-square w-full items-center justify-center rounded-xl glass-strong">
                  <span className="text-5xl font-bold text-primary/70 md:text-6xl">
                    {profile.name
                      .split(" ")
                      .map((n) => n?.[0])
                      .filter(Boolean)
                      .join("")}
                  </span>
                </div>
              </div>
            </div>
            {/* Pillars */}
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {profile.pillars.map((pillar) => (
                <div key={pillar.title} className="glass rounded-xl p-5">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}