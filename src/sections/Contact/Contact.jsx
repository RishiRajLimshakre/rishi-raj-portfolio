import { ArrowUpRight, Download } from "lucide-react";
import { personal } from "../../data/personal";
import Button from "../../components/Button/Button";
import Reveal from "../../components/Reveal/Reveal";
import SectionHeading from "../../components/SectionHeading/SectionHeading";
import "./Contact.css";

export default function Contact() {
  const { email, github, linkedin, buyMeACoffee, resume } = personal.contact;
  const profiles = [github, linkedin, buyMeACoffee];

  return (
    <section
      id="contact"
      className="section contact"
      aria-labelledby="contact-title"
    >
      <div className="container">
        <SectionHeading index="06" title="Contact" id="contact-title" />

        <div className="contact__grid">
          <Reveal className="contact__primary">
            <p className="contact__prompt">
              Email is the most direct way to reach me.
            </p>
            <a className="contact__email" href={`mailto:${email.value}`}>
              {email.value}
            </a>
            {email.placeholder && (
              <span className="flag contact__flag">To confirm</span>
            )}

            <div className="contact__actions">
              {/* <Button
                href={resume.url}
                download={resume.downloadName}
                icon={<Download size={18} />}
                iconPosition="start"
              >
                Download Resume
              </Button> */}
            </div>
          </Reveal>

          <Reveal as="ul" delay={100} className="contact__links">
            {profiles.map((profile) => (
              <li key={profile.label}>
                <a
                  className="contact__link"
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="mono-label">{profile.label}</span>
                  <span className="contact__link-text">
                    {profile.display}
                    {profile.placeholder && (
                      <span className="flag">To confirm</span>
                    )}
                  </span>
                  <ArrowUpRight size={18} aria-hidden="true" />
                </a>
              </li>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
