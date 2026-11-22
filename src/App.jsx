import { useState } from "react";
import { flushSync } from "react-dom";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollManager from "./components/ScrollManager/ScrollManager";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

export default function App() {
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || "dark"
  );

  const handleThemeToggle = (button) => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    const root = document.documentElement;

    // Find the centre of the theme button.
    const rect = button.getBoundingClientRect();
    const x = rect.left + rect.width / 2;
    const y = rect.top + rect.height / 2;

    // Calculate the radius needed to cover the entire viewport.
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    root.style.setProperty("--theme-origin-x", `${x}px`);
    root.style.setProperty("--theme-origin-y", `${y}px`);
    root.style.setProperty("--theme-reveal-radius", `${radius}px`);

    const updateTheme = () => {
      flushSync(() => {
        setTheme(nextTheme);
      });

      root.dataset.theme = nextTheme;

      // Update browser UI colour.
      document
        .querySelector('meta[name="theme-color"]')
        ?.setAttribute(
          "content",
          nextTheme === "dark" ? "#111111" : "#f4f2eb"
        );

      try {
        localStorage.setItem("portfolio-theme", nextTheme);
      } catch {
        // Theme still works if browser storage is unavailable.
      }
    };

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (document.startViewTransition && !reducedMotion) {
      document.startViewTransition(updateTheme);
    } else {
      updateTheme();
    }
  };

  return (
    <HashRouter>
      <a
        href="#main"
        className="skip-link"
        onClick={(event) => {
          event.preventDefault();
          document.getElementById("main")?.focus();
        }}
      >
        Skip to content
      </a>

      <ScrollManager />

      <Navbar theme={theme} onToggleTheme={handleThemeToggle} />

      <main id="main" tabIndex={-1} style={{ outline: "none" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/projects/:projectId"
            element={<ProjectDetails />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <Footer />
      <Analytics />
    </HashRouter>
  );
}