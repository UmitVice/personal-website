import { experiences } from "@/lib/data";
import { Reveal } from "@/components/effects/reveal";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24">
      <div className="container-portfolio">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-sans text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
              Experience
            </h2>
            <div className="relative mt-8">
              {/* Vertical timeline line */}
              <div
                className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20 md:left-6"
                aria-hidden="true"
              />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <Reveal key={`${exp.company}-${exp.period}`} delay={index * 100}>
                    <div className="relative pl-10 md:pl-14">
                      <div
                        className="absolute left-[14px] top-2 h-3 w-3 rounded-full border-2 border-primary bg-surface md:left-[22px]"
                        aria-hidden="true"
                      />

                      {/* Glass card */}
                      <article className="glass rounded-xl p-5 md:p-6">
                        <div className="flex flex-col gap-1 sm:flex-row sm:items-start sm:justify-between">
                          <div>
                            <h3 className="text-base font-semibold text-on-surface">
                              {exp.role}
                            </h3>
                            <p className="text-sm text-primary">{exp.company}</p>
                          </div>
                          <div className="mt-1 shrink-0 text-left text-xs text-on-surface-variant sm:mt-0 sm:text-right">
                            <p>{exp.location}</p>
                            <p>{exp.period}</p>
                          </div>
                        </div>

                        <ul className="mt-3 space-y-1.5">
                          {exp.highlights.map((highlight) => (
                            <li
                              key={highlight}
                              className="flex gap-2 text-sm text-on-surface-variant"
                            >
                              <span className="mt-1.5 block h-1 w-1 shrink-0 rounded-full bg-outline" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>

                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {exp.tags.map((tag) => (
                            <span key={tag} className="tag text-[10px]">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </article>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}