import type { CompanyProject } from "@/content/projects";
import { ExternalLink } from "./external-link";

interface CompanyCardProps {
  project: CompanyProject;
  index: number;
  total: number;
}

export function CompanyCard({ project, index, total }: CompanyCardProps) {
  return (
    <article
      id={project.id}
      className="card"
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${total}: ${project.company}, ${project.name}`}
    >
      <p className="card-meta">
        <span>{project.company}</span>
        <span>{project.period}</span>
      </p>
      <h3 className="card-title">{project.name}</h3>
      <p className="card-role">{project.role}</p>

      <ul className="card-highlights">
        {project.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      <ul className="chips" aria-label={`${project.name} technologies`}>
        {project.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>

      {project.links.length > 0 && (
        <ul className="card-links" aria-label={`${project.name} references`}>
          {project.links.map((link) => (
            <li key={link.href}>
              <ExternalLink className="card-link" href={link.href} context={project.company}>
                {link.label}
              </ExternalLink>
            </li>
          ))}
        </ul>
      )}
    </article>
  );
}
