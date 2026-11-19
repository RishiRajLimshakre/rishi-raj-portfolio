import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import "./NotFound.css";

export default function NotFound() {
  useEffect(() => {
    document.title = "Page not found — Rishi Raj Limshakre";
  }, []);

  return (
    <section className="not-found">
      <div className="container">
        <p className="mono-label not-found__code">Error 404</p>
        <h1 className="not-found__title">Page not found.</h1>
        <p className="not-found__text">The page you are looking for doesn't exist or has moved.</p>
        <Link to="/" className="not-found__link">
          <ArrowLeft size={18} aria-hidden="true" />
          Back to homepage
        </Link>
      </div>
    </section>
  );
}
