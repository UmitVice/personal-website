import { ArrowUpRight } from "lucide-react";
import { projectCategoryLabels, type Project } from "@/lib/projects";

export function ProjectCategory({ project }: { project: Project }) {
  return <span className="project-category">{projectCategoryLabels[project.category]}</span>;
}

export function ProjectContent({ project }: { project: Project }) {
  return (
    <div className="project-content">
      <p className="project-summary">{project.description[0]}</p>
      <ul className="project-tags" aria-label={`${project.title} technologies and domains`}>
        {project.technologies.map((tag) => <li key={tag}>{tag}</li>)}
        {project.domains.map((tag) => <li className="domain-tag" key={tag}>{tag}</li>)}
      </ul>
      <details className="project-details">
        <summary>Read full description<span className="sr-only">: {project.title}</span></summary>
        <div className="project-description">
          <ProjectCategory project={project} />
          {project.description.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </details>
      {project.links.length > 0 && (
        <ul className="project-links" aria-label={`${project.title} references`}>
          {project.links.map((link) => (
            <li key={link.href}>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.label}<ArrowUpRight aria-hidden="true" />
                <span className="sr-only">: {project.name ?? project.company} (opens in a new tab)</span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
