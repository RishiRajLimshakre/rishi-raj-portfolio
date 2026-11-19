import { personal } from "../../data/personal";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./Education.css";

export default function Education() {
  const { degree, field, institution, period } = personal.education;

  return (
    <section id="education" className="section education" aria-labelledby="education-title">
      <div className="container">
        <SectionHeading index="05" title="Education" id="education-title" />

        <Reveal as="article" className="education__item">
          <p className="education__period mono-label">{period}</p>
          <div className="education__main">
            <h3 className="education__degree">{degree}</h3>
            <p className="education__field">{field}</p>
            <p className="education__institution">{institution}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
