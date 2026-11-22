# Rishi Raj Limshakre — Portfolio

A personal developer portfolio built with **React, Vite, React Router, and custom CSS**. It showcases selected projects, technical skills, education, and professional experience through a responsive interface with light and dark themes.

**Live Portfolio:** [rishirajlimshakre.in](https://rishirajlimshakre.in)

---

## Tech Stack

- **Frontend:** React, JavaScript, HTML5, CSS3
- **Build Tool:** Vite
- **Routing:** React Router
- **Icons:** Lucide React
- **Deployment:** Vercel

---

## Features

- Responsive layout for desktop, tablet, and mobile
- Light and dark theme support
- Dedicated project detail pages
- Reusable React components
- Smooth navigation and scroll interactions
- Custom CSS animations and visual effects
- Centralized data files for easy content updates

---

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

```bash
git clone https://github.com/RishiRajLimshakre/portfolio.git
cd portfolio
npm install
```

### Development

```bash
npm run dev
```

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

---

## Project Structure

```text
public/
  images/
    projects/
    profile/
  resume.pdf

src/
  components/
    Navbar/
    Footer/
    ProjectCard/
    ProjectImage/
    Reveal/
    ...
  sections/
  pages/
  hooks/
  data/
    personal.js
    projects.js
    skills.js
    experience.js
  styles/
    variables.css
    global.css
    animations.css
    responsive.css
  App.jsx
  main.jsx
```

---

## Customization

Portfolio content is maintained in centralized data files:

| Content | File |
|---|---|
| Personal information and contact details | `src/data/personal.js` |
| Projects and project descriptions | `src/data/projects.js` |
| Technical skills | `src/data/skills.js` |
| Professional experience | `src/data/experience.js` |
| Colours, typography, and spacing | `src/styles/variables.css` |

Project detail pages are generated dynamically from the project data, making it easier to add, update, or remove projects.

---

## Deployment

This project can be deployed as a static website using [Vercel](https://vercel.com/).

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Select **Vite** as the framework preset.
4. Set the build command to `npm run build`.
5. Set the output directory to `dist`.
6. Deploy.

The project currently uses `HashRouter`, allowing it to work on static hosting without additional route configuration.

---

## License

This project is intended to serve as a personal portfolio. Please contact me before reusing substantial portions of its design or implementation.
