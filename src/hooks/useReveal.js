import { useEffect, useRef, useState } from "react";

/**
 * Returns [ref, isVisible]. `isVisible` flips to true once, the first time the
 * element enters the viewport. Without IntersectionObserver it is visible at once.
 */
export default function useReveal({ threshold = 0.12, rootMargin = "0px 0px -6% 0px" } = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return [ref, isVisible];
}
