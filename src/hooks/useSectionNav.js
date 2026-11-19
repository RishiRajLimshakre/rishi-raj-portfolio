import { useCallback, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

/** Smooth scroll to a homepage section. Smoothness comes from CSS (and respects reduced motion). */
export function scrollToSection(id) {
  const target = document.getElementById(id);
  if (target) target.scrollIntoView({ block: "start" });
}

/**
 * Click handler factory for in-page navigation that also works from other
 * routes: on the homepage it scrolls, elsewhere it navigates home and asks
 * Home to scroll once it has rendered.
 */
export function useSectionNav() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return useCallback(
    (event, id) => {
      event.preventDefault();
      if (pathname === "/") {
        scrollToSection(id);
      } else {
        navigate("/", { state: { scrollTo: id } });
      }
    },
    [pathname, navigate],
  );
}

/** Tracks which of the given section ids is currently in the reading zone. */
export function useActiveSection(ids, enabled = true) {
  const [activeId, setActiveId] = useState(null);
  const key = ids.join("|");

  useEffect(() => {
    if (!enabled || typeof IntersectionObserver === "undefined") {
      setActiveId(null);
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    // Clear the highlight when scrolled back above the first section.
    const onScroll = () => {
      if (window.scrollY < 200) setActiveId(null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key, enabled]);

  return activeId;
}
