import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// Order matters: tokens first, then base styles, then motion.
import "./styles/variables.css";
import "./styles/global.css";
import "./styles/animations.css";
import App from "./App";
// Global responsive overrides load after component CSS so they can adjust shared primitives.
import "./styles/responsive.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
