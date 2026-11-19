import { personal } from "../../data/personal";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./About.css";

export default function About() {
  const [lead, ...rest] = personal.about;

  return (
    <section id="about" className="section about" aria-labelledby="about-title">
      <div className="container">
        <SectionHeading index="02" title="About" id="about-title" />

        <div className="about__grid">
          <Reveal className="about__text">
            <p className="about__lead">{lead}</p>
            {rest.map((paragraph) => (
              <p key={paragraph} className="about__paragraph">
                {paragraph}
              </p>
            ))}
          </Reveal>

          <Reveal as="dl" delay={100} className="about__facts">
            {personal.aboutFacts.map((fact) => (
              <div key={fact.label} className="about__fact">
                <dt className="mono-label">{fact.label}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
