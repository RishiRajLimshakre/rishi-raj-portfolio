export default function ExperienceItem({ entry }) {
  const {
    organisation,
    organisationUrl,
    title,
    period,
    points = [],
  } = entry;

  return (
    <article className="experience__item">
      <div className="experience__main">
        <h3 className="experience__title">
          {organisationUrl ? (
            <a
              href={organisationUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {organisation}
            </a>
          ) : (
            organisation
          )}
        </h3>

        <p className="experience__org">{title}</p>

        <p className="experience__period mono-label">{period}</p>

        {points.length > 0 && (
          <ul className="experience__points">
            {points.map((point) => (
              <li key={point}>{point}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}