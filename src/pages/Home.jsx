import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToSection } from "../hooks/useSectionNav";
import Hero from "../sections/Hero/Hero";
import Projects from "../sections/Projects/Projects";
import About from "../sections/About/About";
import Skills from "../sections/Skills/Skills";
import Experience from "../sections/Experience/Experience";
import Education from "../sections/Education/Education";
import Contact from "../sections/Contact/Contact";

export default function Home() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Arrived from another page asking to land on a section (e.g. nav link on a project page).
  useEffect(() => {
    const target = state?.scrollTo;
    if (!target) return;
    const frame = requestAnimationFrame(() => {
      scrollToSection(target);
      navigate("/", { replace: true, state: null });
    });
    return () => cancelAnimationFrame(frame);
  }, [state, navigate]);

  useEffect(() => {
    document.title = "Rishi Raj Limshakre — Software Developer";
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <About />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}
