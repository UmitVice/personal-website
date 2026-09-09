import { projects } from "@/lib/data";
import { ProjectCategory, ProjectContent } from "./project-content";
import { Reveal } from "@/components/effects/reveal";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container-portfolio">
        <Reveal>
          <div className="mx-auto max-w-4xl">
            <h2 className="font-sans text-2xl font-semibold tracking-tight text-on-surface md:text-3xl">
              Company Projects
            </h2>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={index * 80}>
                  <article className="glass glow-primary-sm rounded-xl p-5 md:p-6">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="text-base font-semibold text-on-surface">
                        {project.title}
                      </h3>
                      <ProjectCategory project={project} />
                    </div>
                    <p className="mt-1 text-xs font-medium text-primary">{project.role}</p>
                    <p>{project.company}</p>
                    <ProjectContent project={project} />
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