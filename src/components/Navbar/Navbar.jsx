import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Moon, Sun, X } from "lucide-react";
import { navLinks, personal } from "../../data/personal";
import { useActiveSection, useSectionNav } from "../../hooks/useSectionNav";
import "./Navbar.css";

const SECTION_IDS = ["work", "about", "contact"];

export default function Navbar({ theme, onToggleTheme }) {
  const { pathname } = useLocation();
  const goToSection = useSectionNav();
  const isHome = pathname === "/";
  const activeId = useActiveSection(SECTION_IDS, isHome);

  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    if (!menuOpen) return undefined;

    const onKeyDown = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    document.documentElement.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.documentElement.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 721px)");
    const onChange = (e) => e.matches && setMenuOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const handleSectionClick = (event, id) => {
    setMenuOpen(false);
    goToSection(event, id);
  };

  const handleWordmarkClick = () => {
    setMenuOpen(false);
    if (isHome) window.scrollTo({ top: 0 });
  };

  return (
    <header className={`navbar ${scrolled || menuOpen ? "is-scrolled" : ""}`}>
      <div className="container navbar__inner">
        <Link
          to="/"
          className="navbar__wordmark"
          onClick={handleWordmarkClick}
          aria-label={`${personal.fullName}, home`}
        >
          <span className="navbar__mark">{personal.initials}</span>
        </Link>

        <nav className="navbar__nav" aria-label="Primary">
          <ul className="navbar__list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href="#/"
                  className={`navbar__link ${
                    activeId === link.id ? "is-active" : ""
                  }`}
                  aria-current={
                    activeId === link.id ? "location" : undefined
                  }
                  onClick={(event) => handleSectionClick(event, link.id)}
                >
                  <span className="navbar__link-index">{link.index}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Theme toggle */}
        <button
          type="button"
          className="navbar__theme-toggle"
          aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          onClick={(event) => onToggleTheme(event.currentTarget)}
        >
          {theme === "dark" ? (
            <Sun size={19} aria-hidden="true" />
          ) : (
            <Moon size={19} aria-hidden="true" />
          )}
        </button>

        <button
          ref={toggleRef}
          type="button"
          className="navbar__toggle"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? (
            <X size={22} aria-hidden="true" />
          ) : (
            <Menu size={22} aria-hidden="true" />
          )}
        </button>
      </div>

      <div id="mobile-menu" className="navbar__panel" hidden={!menuOpen}>
        <nav className="container" aria-label="Mobile">
          <ul className="navbar__panel-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href="#/"
                  className="navbar__panel-link"
                  onClick={(event) => handleSectionClick(event, link.id)}
                >
                  <span className="navbar__link-index">{link.index}</span>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}