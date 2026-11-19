# Rishi Raj Limshakre — Portfolio

A personal portfolio built with React, Vite, React Router and hand-written CSS. No backend, no Tailwind, two runtime dependencies beyond React (`react-router-dom`, `lucide-react`).

## Run it

```bash
npm install
npm run dev      # local development
npm run build    # production build into /dist
npm run preview  # serve the production build locally
```

## Where to edit things

| I want to change…                     | Edit this file                       |
| ------------------------------------- | ------------------------------------ |
| Name, intro, about text, education    | `src/data/personal.js`               |
| Email, GitHub, LinkedIn, resume name  | `src/data/personal.js` → `contact`   |
| Add / edit / remove a project         | `src/data/projects.js`               |
| Add / edit / remove skills            | `src/data/skills.js`                 |
| Experience entries                    | `src/data/experience.js`             |
| Colours, fonts, spacing               | `src/styles/variables.css`           |

Project detail pages (`/#/projects/<id>`) are generated from `projects.js`, so a new entry there gets a card and a page automatically.

## Replace the placeholders

Anything still needing real information is marked **To confirm** (dashed accent tag) or **to be added** (dashed disabled button) on the page.

1. **Project screenshots** — copy your images into `public/images/projects/` using the filenames in `projects.js` (`docmirror.png`, `loksetu.png`, `musclemap.png`), or change the paths. Until then a "Screenshot pending" frame is shown. Images are shown whole (never cropped or stretched). For extra detail-page images, fill the `screenshots` array: `{ src, alt, caption }`.
2. **GitHub / live demo URLs** — set `repoUrl` and `liveUrl` per project. While `null`, the buttons render disabled.
3. **Email, GitHub, LinkedIn** — update `personal.contact` and remove `placeholder: true`.
4. **Resume** — replace `public/resume.pdf` (currently a one-line placeholder file).
5. **Experience** — fill in `src/data/experience.js` once the company, title, dates and new wording are confirmed. Nothing from the old CV is used.
6. **Photograph (optional)** — put a file in `public/images/profile/` and set `photo` in `personal.js`. The hero shows it automatically.

## Routing note

The site uses `HashRouter`, so URLs look like `/#/projects/docmirror`. This works on any static host with no configuration. If you want clean URLs on Vercel, switch to `BrowserRouter` in `src/App.jsx` and add a `vercel.json`:

```json
{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }
```

## Deploy to Vercel

1. Push the project to GitHub.
2. In Vercel choose **Add New → Project** and import the repository.
3. Framework preset: **Vite**. Build command `npm run build`, output directory `dist`.
4. Deploy. Update the `<title>` / meta description in `index.html` if your wording changes, and add a canonical URL and `og:image` once the domain is known.

## Structure

```
public/            favicon, resume.pdf, images/{projects,profile}
src/
  components/      Navbar, Footer, Button, SectionHeading, ProjectCard, ProjectImage, Reveal, ScrollManager
  sections/        Hero, Projects, About, Skills, Experience, Education, Contact
  pages/           Home, ProjectDetails (shared layout), NotFound
  hooks/           useReveal, useSectionNav
  data/            personal, projects, skills, experience
  styles/          variables, global, animations, responsive
```

## Final checklist

- [ ] Real project screenshots added
- [ ] Repository and live demo URLs added
- [ ] Email, GitHub, LinkedIn confirmed
- [ ] Real `resume.pdf` in `public/`
- [ ] Experience content confirmed
- [ ] `index.html` description / social image reviewed
- [ ] `npm run build` passes
