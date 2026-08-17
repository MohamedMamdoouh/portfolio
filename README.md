# Mohamed Mamdouh — Portfolio

Personal portfolio site for Mohamed Mamdouh, built with **HTML + CSS + TypeScript** (Vite) and deployed to GitHub Pages.

## Stack

- Vite (static build) + TypeScript
- Plain CSS with design tokens (no CSS framework)
- [simple-icons](https://simpleicons.org/) for technology/brand logos
- [@fontsource-variable/inter](https://fontsource.org/fonts/inter) for self-hosted type

## Project structure

```text
index.html, 404.html
public/
  cv/                 final CV PDF served as a static asset
  images/profile/     profile photo
  favicon.svg, favicon.ico, social-preview.png
src/
  data/               centralized content (profile, social, projects, skills, nav)
  lib/                paths, icons
  render/             DOM render functions for each section
  scripts/            theme, navigation, copy-email interactivity
  styles/             global.css + section styles
  main.ts, not-found.ts
```

All personal/project content lives in `src/data/` — update it there rather than in render modules.

## Commands

| Command           | Action                                    |
| ----------------- | ----------------------------------------- |
| `npm install`     | Install dependencies                      |
| `npm run dev`     | Start local dev server                    |
| `npm run build`   | Type-check (`tsc`) then build to `./dist` |
| `npm run preview` | Preview the production build locally      |
| `npm run lint`    | ESLint + Prettier check                   |
| `npm run format`  | Prettier write                            |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys `./dist` to GitHub Pages automatically.

Base path: `/portfolio/` (configured in `vite.config.ts`).

Local URL: `http://localhost:5173/portfolio/`
