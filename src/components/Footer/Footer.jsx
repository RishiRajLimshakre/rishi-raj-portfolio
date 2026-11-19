import { ArrowUp } from "lucide-react";
import { navLinks, personal } from "../../data/personal";
import { useSectionNav } from "../../hooks/useSectionNav";
import "./Footer.css";

export default function Footer() {
  const goToSection = useSectionNav();
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__identity">
          <p className="footer__name">{personal.fullName}</p>
          <p className="mono-label">
            {personal.role} · {personal.location}
          </p>
        </div>

        <nav className="footer__nav" aria-label="Footer">
          <ul className="footer__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href="#/" className="footer__link" onClick={(event) => goToSection(event, link.id)}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href={personal.contact.resume.url} className="footer__link" download={personal.contact.resume.downloadName}>
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <button type="button" className="footer__top" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          Back to top
          <ArrowUp size={16} aria-hidden="true" />
        </button>
      </div>

      <div className="container footer__legal">
        <p className="mono-label">
          © {year} {personal.fullName}
        </p>
      </div>
    </footer>
  );
}
