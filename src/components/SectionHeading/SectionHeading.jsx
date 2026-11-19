import "./SectionHeading.css";

/**
 * Editorial section opener: a mono index, the title, and a thin rule.
 * `id` is applied to the heading so the parent <section> can reference it with aria-labelledby.
 */
export default function SectionHeading({ index, title, id, children }) {
  return (
    <header className="section-heading">
      <div className="section-heading__top">
        <span className="section-heading__index">{index}</span>
        <span className="section-heading__rule" aria-hidden="true" />
      </div>
      <div className="section-heading__body">
        <h2 id={id} className="section-heading__title">
          {title}
        </h2>
        {children && <p className="section-heading__lede">{children}</p>}
      </div>
    </header>
  );
}
