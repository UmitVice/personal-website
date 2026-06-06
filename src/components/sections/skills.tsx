import { skillGroups } from "@/lib/data";
import { Reveal } from "@/components/effects/reveal";

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container-portfolio">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-sans text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
              Skills & Technologies
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {skillGroups.map((group) => (
                <div key={group.label} className="glass rounded-xl p-6">
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-primary">
                    {group.label}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span key={skill} className="tag">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}