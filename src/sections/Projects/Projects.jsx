import { projects } from "../../data/projects";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="work" className="section projects" aria-labelledby="work-title">
      <div className="container">
        <SectionHeading index="01" title="Selected Work" id="work-title">
          {/* Three projects covering editors, civic tooling and fitness tracking. */}
        </SectionHeading>

        <ul className="projects__grid">
          {projects.map((project, position) => (
            <Reveal
              as="li"
              key={project.id}
              delay={position * 80}
              className={`projects__item ${project.featured ? "projects__item--featured" : ""}`}
            >
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
