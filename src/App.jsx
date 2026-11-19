import { HashRouter, Route, Routes } from "react-router-dom";
import { Analytics } from '@vercel/analytics/react';
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import ScrollManager from "./components/ScrollManager/ScrollManager";
import Home from "./pages/Home";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

/**
 * HashRouter keeps routing working on any static host without server rewrites,
 * and also when the built index.html is opened directly. URLs look like /#/projects/docmirror.
 * To switch to clean URLs on Vercel, swap in BrowserRouter and add a rewrite (see README).
 */
export default function App() {
  return (
    <HashRouter>
      <a href="#main" className="skip-link" onClick={(event) => {
        event.preventDefault();
        document.getElementById("main")?.focus();
      }}>
        Skip to content
      </a>
      <ScrollManager />
      <Navbar />
      <main id="main" tabIndex={-1} style={{ outline: "none" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
      <Analytics />
    </HashRouter>
  );
}
