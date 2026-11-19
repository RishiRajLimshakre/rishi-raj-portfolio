import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Resets scroll position on route change, so opening a project page starts at
 * the top. If the navigation asked to land on a homepage section, Home handles it.
 */
export default function ScrollManager() {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.scrollTo) return;
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return null;
}
