import { experience } from "../../data/experience";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import ExperienceItem from "./ExperienceItem";
import "./Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-title">
      <div className="container">
        <SectionHeading index="04" title="Experience" id="experience-title" />

        <Reveal className="experience__list">
          {experience.map((entry) => (
            <ExperienceItem key={entry.id} entry={entry} />
          ))}
        </Reveal>
      </div>
    </section>
  );
}
