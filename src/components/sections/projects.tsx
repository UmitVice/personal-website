import { projects } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Reveal } from "@/components/effects/reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container-portfolio">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-sans text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
              Featured Projects
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 80}>
                  <article className="glass glow-primary-sm rounded-xl p-5 md:p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-on-surface">
                        {project.title}
                      </h3>
                      {project.highlight && (
                        <Badge variant="default" className="shrink-0 text-[10px]">
                          {project.highlight}
                        </Badge>
                      )}
                    </div>
                    <p className="mt-1 text-xs font-medium text-primary">{project.role}</p>
                    <p className="mt-2 text-sm leading-relaxed text-on-surface-variant">
                      {project.impact}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag text-[10px]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}