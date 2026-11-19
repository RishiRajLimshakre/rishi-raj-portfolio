import { skillGroups } from "../../data/skills";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./Skills.css";

export default function Skills() {
  return (
    <section id="skills" className="section skills" aria-labelledby="skills-title">
      <div className="container">
        <SectionHeading index="03" title="Technical Skills" id="skills-title" />

        <Reveal as="dl" className="skills__list">
          {skillGroups.map((group) => (
            <div key={group.category} className="skills__row">
              <dt className="skills__category">
                <span className="mono-label">{group.category}</span>
              </dt>
              <dd className="skills__items">
                <ul>
                  {group.items.map((item) => (
                    <li key={item} className="skills__item">
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
