/**
 * Project data. Add, edit or remove entries here; the homepage grid and the
 * /projects/:id detail pages are generated from this array.
 *
 * IMAGES
 *   Put your screenshots in /public/images/projects/ and set the paths below.
 *   `image` is the thumbnail used on the card and as the detail-page lead image.
 *   `screenshots` is the detail-page gallery (leave [] for none).
 *   If a file is missing, a clearly labelled placeholder is shown instead.
 *
 * LINKS
 *   `repoUrl` and `liveUrl` are null until the real URLs are supplied.
 *   While null, the buttons render in a disabled "to be added" state.
 *
 * TEXT
 *   Descriptions and features use only the verified project information.
 *   `purpose` is a short factual restatement; rewrite it in your own words.
 */


export const projects = [
  {
    id: "docmirror",
    name: "DocMirror",
    fullName: "DocMirror",
    featured: true,
    summary:
      "A document editing platform with rich-text editing, A4 pagination, document management and export.",
    overview:
      "DocMirror is a document editing platform featuring rich-text editing, A4 pagination, document management and document export capabilities.",
    purpose:
      "A web-based editor where documents are written in rich text, laid out on A4 pages and exported as PDF or DOCX.",
    features: [
      "Rich-text document editing",
      "A4 page pagination",
      "PDF export",
      "DOCX export",
      "REST API integration",
      "Image uploads",
    ],
    technologies: ["React.js", "TypeScript", "Node.js", "Express.js", "MongoDB", "TipTap"],
    image: "/images/projects/docmirror.png",
    imageAlt: "DocMirror application screenshot",
    screenshots: [],
    repoUrl: "https://github.com/RishiRajLimshakre/Docmirror",
    liveUrl: "https://docmirror-chi.vercel.app/login",
  },
  {
    id: "loksetu",
    name: "LokSetu",
    fullName: "LokSetu Civic Issue Reporting Platform",
    featured: false,
    summary:
      "A civic issue reporting platform for geo-tagged reporting and structured issue management.",
    overview:
      "LokSetu is a civic issue reporting platform designed to support geo-tagged reporting and structured issue management.",
    purpose:
      "To give citizens a structured way to report civic issues with a location, and to give administrators a managed workflow for handling them.",
    features: [
      "Geo-tagged civic issue reporting",
      "JWT authentication",
      "Protected routes",
      "Role-based access control",
      "Issue escalation workflow",
      "Admin dashboard",
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
    image: "/images/projects/loksetu.png",
    imageAlt: "LokSetu application screenshot",
    screenshots: [],
    repoUrl: "https://github.com/RishiRajLimshakre/loksetu",
    liveUrl: "https://loksetu-six.vercel.app/",
  },
  {
    id: "musclemap",
    name: "MuscleMap",
    fullName: "MuscleMap Gym Progress Tracker",
    featured: false,
    summary: "A gym progress tracker with workout logging and a persistent workout history.",
    overview:
      "MuscleMap is a gym progress tracking application with workout logging and persistent workout history.",
    purpose: "To record workouts as they happen and keep a lasting history of training progress.",
    features: [
      "Workout tracking",
      "REST API development",
      "User authentication",
      "Persistent workout history",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "Node.js", "Express.js", "MongoDB"],
    image: "/images/projects/musclemap.png",
    imageAlt: "MuscleMap application screenshot",
    screenshots: [],
    repoUrl: "https://github.com/RishiRajLimshakre/MuscleMap",
    liveUrl: "https://musclemap-r6xp.onrender.com/",
  },
];


export const getProjectById = (id) => projects.find((project) => project.id === id);

/** Zero-padded position, e.g. "01". Used as an editorial index on cards and pages. */
export const getProjectNumber = (id) =>
  String(projects.findIndex((project) => project.id === id) + 1).padStart(2, "0");
