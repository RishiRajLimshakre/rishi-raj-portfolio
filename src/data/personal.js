/**
 * Personal details. Edit this file to change the hero, about, education and
 * contact content. Anything with `placeholder: true` shows a "To confirm"
 * marker on the page. Replace the value, then delete the flag.
 */

export const personal = {
  firstName: "Rishi Raj",
  lastName: "Limshakre",
  fullName: "Rishi Raj Limshakre",
  initials: "RRL",
  role: "Software Developer",
  location: "India",

  heroIntro:
    "Software developer working across the frontend and the backend: React and TypeScript on one side, Node.js, Express and MongoDB on the other.",

  /** Small ruled facts shown beside the hero intro. */
  heroMeta: [
    { label: "Location", value: "India" },
    { label: "Studying", value: "B.Tech, Information Technology" },
    { label: "Works with", value: "React, TypeScript, Node.js, MongoDB" },
  ],

  /**
   * Optional portrait. Leave null and the hero layout stays typographic.
   * To add one: put the file in /public/images/profile/ and set e.g.
   *   photo: { src: "/images/profile/rishi.jpg", alt: "Portrait of Rishi Raj Limshakre" }
   */
  photo: null,

  /** One string per paragraph. Rewrite freely in your own voice. */
  about: [
    "I'm a software developer and a B.Tech Information Technology student at Bhilai Institute of Technology, Durg.",
    "My work covers both sides of an application: interfaces built with React and TypeScript, and the Node.js, Express and MongoDB services and REST APIs behind them.",
    "I like building practical applications and taking them from a working idea to something complete. Linux and the usual developer tooling are part of my day-to-day setup.",
  ],

  aboutFacts: [
    { label: "Focus", value: "Software development" },
    { label: "Studying", value: "B.Tech, Information Technology" },
    { label: "Period", value: "2023 – 2027" },
    { label: "Based in", value: "India" },
  ],

  education: {
    degree: "Bachelor of Technology (B.Tech)",
    field: "Information Technology",
    institution: "Bhilai Institute of Technology, Durg",
    period: "2023 – 2027",
  },


contact: {
  email: { value: "rishirajlimshakre@gmail.com" },
  github: {
    label: "GitHub",
    display: "It works on my machine",
    url: "https://github.com/RishiRajLimshakre",
  },
  linkedin: {
    label: "LinkedIn",
    display: "Open to opportunities, closed to bugs.",
    url: "https://www.linkedin.com/in/rishiraj-limshakre/",
  },
  resume: {
    label: "Resume",
    url: "/resume.pdf",
    downloadName: "Rishi-Raj-Limshakre-Resume.pdf",
  },
},

};

/** Primary navigation. `id` matches the section id on the homepage. */
export const navLinks = [
  { id: "work", label: "Work", index: "01" },
  { id: "about", label: "About", index: "02" },
  { id: "contact", label: "Contact", index: "06" },
];
