import { Link } from "react-router-dom";
import "./Button.css";

/**
 * One component for every call to action.
 *
 *  - `to`            internal route (React Router)
 *  - `href`          external URL or file (add `external` for a new tab, `download` for files)
 *  - neither         a real <button>
 *  - `disabled`      renders a non-interactive "to be added" state instead of a dead link
 *
 * variant: "primary" | "secondary" | "text"
 */
export default function Button({
  variant = "primary",
  size = "md",
  to,
  href,
  external = false,
  download,
  disabled = false,
  disabledLabel = "Link to be added",
  icon,
  iconPosition = "end",
  className = "",
  children,
  ...rest
}) {
  const classes = `btn btn--${variant} btn--${size} btn--icon-${iconPosition} ${className}`.trim();

  const content = (
    <>
      {icon && (
        <span className="btn__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span className="btn__label">{children}</span>
    </>
  );

  if (disabled) {
    return (
      <span className={`${classes} is-disabled`} aria-disabled="true" title={disabledLabel} {...rest}>
        {content}
      </span>
    );
  }

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    const externalProps = external ? { target: "_blank", rel: "noopener noreferrer" } : {};
    return (
      <a href={href} className={classes} download={download} {...externalProps} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {content}
    </button>
  );
}
