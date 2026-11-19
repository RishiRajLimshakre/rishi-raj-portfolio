import { useState } from "react";
import "./ProjectImage.css";

/**
 * Screenshot frame with a fixed aspect ratio. The image is shown whole
 * (object-fit: contain), never stretched and never cropped. If the file is
 * missing, a labelled placeholder is shown so the gap is obvious but tidy.
 *
 * `ratio` is a CSS aspect-ratio value, or "auto" to let the image set its own
 * height (used on detail pages).
 */
export default function ProjectImage({
  src,
  alt,
  ratio = "16 / 10",
  loading = "lazy",
  className = "",
}) {
  const [failed, setFailed] = useState(false);
  const showPlaceholder = !src || failed;
  const isAuto = ratio === "auto";

  return (
    <div
      className={`project-image ${isAuto && !showPlaceholder ? "project-image--auto" : ""} ${className}`.trim()}
      style={{ aspectRatio: isAuto && !showPlaceholder ? undefined : isAuto ? "16 / 9" : ratio }}
    >
      {showPlaceholder ? (
        <div className="project-image__placeholder" role="img" aria-label={`${alt} — screenshot not added yet`}>
          <span className="project-image__tag">Screenshot pending</span>
          <span className="project-image__path">{src || "No image path set"}</span>
        </div>
      ) : (
        <img
          className="project-image__img"
          src={src}
          alt={alt}
          loading={loading}
          decoding="async"
          onError={() => setFailed(true)}
        />
      )}
    </div>
  );
}
