import { ArrowDown, Mail } from "lucide-react";
import { personal } from "../../data/personal";
import { useSectionNav } from "../../hooks/useSectionNav";
import Button from "../../components/Button/Button";
import "./Hero.css";

export default function Hero() {
  const goToSection = useSectionNav();
  const { photo } = personal;

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__inner">
        <p className="hero__eyebrow">{personal.role}</p>

        <h1 id="hero-title" className="hero__name">
          <span className="hero__line">{personal.firstName}</span>
          <span className="hero__line hero__line--indent">
            {personal.lastName}
            <span className="hero__dot" aria-hidden="true">
              .
            </span>
          </span>
        </h1>

        <div className="hero__lower">
          <div className="hero__copy">
            <p className="hero__intro">{personal.heroIntro}</p>

            <div className="hero__actions">
              <Button href="#/" icon={<ArrowDown size={18} />} onClick={(event) => goToSection(event, "work")}>
                View Selected Work
              </Button>
              <Button
                variant="secondary"
                href="#/"
                icon={<Mail size={18} />}
                iconPosition="start"
                onClick={(event) => goToSection(event, "contact")}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Photo slot: renders only when `photo` is set in data/personal.js */}
          <aside className="hero__aside">
            {photo && (
              <figure className="hero__photo">
                <img src={photo.src} alt={photo.alt} width="600" height="750" decoding="async" />
              </figure>
            )}
            <dl className="hero__meta">
              {personal.heroMeta.map((item) => (
                <div key={item.label} className="hero__meta-row">
                  <dt className="mono-label">{item.label}</dt>
                  <dd>{item.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}
