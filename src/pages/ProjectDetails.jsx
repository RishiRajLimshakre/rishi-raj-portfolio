import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, GitBranch, Globe } from "lucide-react";
import { getProjectById, getProjectNumber, projects } from "../data/projects";
import { useSectionNav } from "../hooks/useSectionNav";
import Button from "../components/Button/Button";
import ProjectImage from "../components/ProjectImage/ProjectImage";
import Reveal from "../components/Reveal/Reveal";
import NotFound from "./NotFound";
import "./ProjectDetails.css";

/** Small labelled block used for Overview / Purpose / Features / Screenshots. */
function Block({ title, children }) {
  return (
    <Reveal as="section" className="project-block">
      <h2 className="project-block__title">{title}</h2>
      {children}
    </Reveal>
  );
}

/**
 * Shared layout for every project. It reads everything from data/projects.js,
 * so adding a project there creates a new page automatically.
 */
export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = getProjectById(projectId);
  const goToSection = useSectionNav();

  useEffect(() => {
    if (project) document.title = `${project.name} — Rishi Raj Limshakre`;
  }, [project]);

  if (!project) return <NotFound />;

  const { id, name, fullName, summary, overview, purpose, features, technologies } = project;
  const { image, imageAlt, screenshots, repoUrl, liveUrl, featured } = project;
  const otherProjects = projects.filter((item) => item.id !== id);

  return (
    <article className="project-page">
      <div className="container">
        <a href="#/" className="project-page__back" onClick={(event) => goToSection(event, "work")}>
          <ArrowLeft size={16} aria-hidden="true" />
          All projects
        </a>

        <header className="project-page__header">
          <p className="mono-label project-page__eyebrow">
            Project {getProjectNumber(id)} / {String(projects.length).padStart(2, "0")}
            {featured && <span className="project-page__featured">Featured</span>}
          </p>
          <h1 className="project-page__title">{name}</h1>
          {fullName !== name && <p className="project-page__fullname">{fullName}</p>}
          <p className="project-page__summary">{summary}</p>
        </header>

        <div className="project-page__layout">
          <div className="project-page__main">
            <Reveal className="project-page__lead">
              <ProjectImage src={image} alt={imageAlt} ratio="auto" loading="eager" />
            </Reveal>

            <Block title="Overview">
              <p className="project-block__text">{overview}</p>
            </Block>

            <Block title="Purpose">
              <p className="project-block__text">{purpose}</p>
            </Block>

            <Block title="Features">
              <ol className="project-features">
                {features.map((feature, index) => (
                  <li key={feature} className="project-features__item">
                    <span className="project-features__index">{String(index + 1).padStart(2, "0")}</span>
                    {feature}
                  </li>
                ))}
              </ol>
            </Block>

            {screenshots.length > 0 && (
              <Block title="Screenshots">
                <div className="project-gallery">
                  {screenshots.map((shot) => (
                    <figure key={shot.src} className="project-gallery__item">
                      <ProjectImage src={shot.src} alt={shot.alt} ratio="auto" />
                      {shot.caption && <figcaption className="mono-label">{shot.caption}</figcaption>}
                    </figure>
                  ))}
                </div>
              </Block>
            )}
          </div>

          <aside className="project-page__side">
            <div className="project-side__block">
              <h2 className="project-block__title">Technologies</h2>
              <ul className="project-side__tech">
                {technologies.map((tech) => (
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
            </div>

            <div className="project-side__block project-side__actions">
              <Button
                href={repoUrl}
                external
                disabled={!repoUrl}
                disabledLabel="Repository link to be added"
                icon={<GitBranch size={18} />}
                iconPosition="start"
              >
                {repoUrl ? "GitHub Repository" : "Repository — to be added"}
              </Button>
              <Button
                variant="secondary"
                href={liveUrl}
                external
                disabled={!liveUrl}
                disabledLabel="Live demo link to be added"
                icon={<Globe size={18} />}
                iconPosition="start"
              >
                {liveUrl ? "Live Demo" : "Live demo — to be added"}
              </Button>
            </div>
          </aside>
        </div>

        <nav className="project-more" aria-label="Other projects">
          <h2 className="project-block__title">Other projects</h2>
          <ul className="project-more__list">
            {otherProjects.map((item) => (
              <li key={item.id}>
                <Link to={`/projects/${item.id}`} className="project-more__link">
                  <span className="mono-label">{getProjectNumber(item.id)}</span>
                  <span className="project-more__name">{item.name}</span>
                  <span className="project-more__summary">{item.summary}</span>
                  <ArrowUpRight size={20} aria-hidden="true" />
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </article>
  );
}
