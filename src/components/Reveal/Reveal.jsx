import useReveal from "../../hooks/useReveal";

/**
 * Wraps content in a gentle fade-and-rise entrance (see animations.css).
 * `delay` is in milliseconds and is handy for staggering siblings.
 */
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, isVisible] = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal ${isVisible ? "is-visible" : ""} ${className}`.trim()}
      style={delay ? { "--reveal-delay": `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
