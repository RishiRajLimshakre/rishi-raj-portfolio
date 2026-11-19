import { Link } from "react-router-dom";
import { ArrowUpRight, GitBranch, Globe } from "lucide-react";
import { getProjectNumber } from "../../data/projects";
import Button from "../Button/Button";
import ProjectImage from "../ProjectImage/ProjectImage";
import "./ProjectCard.css";

/** One project in the homepage grid. All content comes from the project data object. */
export default function ProjectCard({ project }) {
  const { id, name, summary, technologies, image, imageAlt, featured, repoUrl, liveUrl } = project;

  return (
    <article className={`project-card ${featured ? "project-card--featured" : ""}`}>
      <div className="project-card__media">
        <ProjectImage src={image} alt={imageAlt} ratio="16 / 10" />
      </div>

      <div className="project-card__body">
        <div className="project-card__meta">
          <span className="mono-label">{getProjectNumber(id)}</span>
          {featured && <span className="project-card__badge">Featured</span>}
        </div>

        <h3 className="project-card__title">{name}</h3>
        <p className="project-card__summary">{summary}</p>

        <ul className="project-card__tech" aria-label={`${name} technologies`}>
          {technologies.map((tech) => (
            <li key={tech} className="tag">
              {tech}
            </li>
          ))}
        </ul>

        <div className="project-card__footer">
          <div className="project-card__links">
            <Button
              variant="text"
              size="sm"
              href={repoUrl}
              external
              disabled={!repoUrl}
              disabledLabel="Repository link to be added"
              icon={<GitBranch size={15} />}
              iconPosition="start"
              aria-label={`${name} GitHub repository`}
            >
              Code
            </Button>
            <Button
              variant="text"
              size="sm"
              href={liveUrl}
              external
              disabled={!liveUrl}
              disabledLabel="Live demo link to be added"
              icon={<Globe size={15} />}
              iconPosition="start"
              aria-label={`${name} live demo`}
            >
              Live
            </Button>
          </div>

          <Link
            to={`/projects/${id}`}
            className="project-card__details"
            aria-label={`View ${name} project details`}
          >
            Details
            <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </article>
  );
}
