# Mohamed Mamdouh — Portfolio

Personal portfolio website for Mohamed Mamdouh, a full-stack software engineer specializing in ASP.NET Core and Angular.

## Links

| | |
| --- | --- |
| **Live website** | **[mohamedmamdoouh.github.io/portfolio](https://mohamedmamdoouh.github.io/portfolio/)** |
| Repository | [github.com/MohamedMamdoouh/portfolio](https://github.com/MohamedMamdoouh/portfolio) |
| GitHub | [github.com/MohamedMamdoouh](https://github.com/MohamedMamdoouh) |
| LinkedIn | [linkedin.com/in/mohamed-mamdouh-220806192](https://www.linkedin.com/in/mohamed-mamdouh-220806192/) |
| Email | mohamedmamdouh3550@gmail.com |

## Overview

A single-page portfolio site built with **HTML, CSS, and TypeScript**, bundled by **Vite 6**, and deployed automatically to **GitHub Pages**. There is no UI framework — sections are rendered at runtime from typed data files in `src/data/`.

### Page structure

Sections appear in this order:

1. **Hero** — name, role, positioning statement, profile photo, primary CTA, CV download, social links
2. **About** — introduction and education in a labeled panel
3. **Skills** — grouped stacks (backend, frontend, database, tools, concepts) with brand icons
4. **Projects** — two featured full-stack systems (Shora, MechanicShop) with problem context and highlights
5. **Contact** — compact footer bar with email, copy-to-clipboard, and social links

Primary navigation links to **About**, **Skills**, and **Projects** (no separate Home link — the logo returns to the hero).

### Features

- Light / dark theme with `localStorage` persistence and system-preference fallback
- Responsive navigation with mobile menu, scroll spy, and active section highlighting
- Self-hosted [Inter](https://fontsource.org/fonts/inter) variable font via Fontsource
- Technology logos from [simple-icons](https://simpleicons.org/)
- SEO meta tags, Open Graph, Twitter cards, and JSON-LD structured data
- Multi-page Vite build with a dedicated 404 page
- Zero runtime dependencies beyond fonts and icons

## Tech stack

| Layer | Technology |
| --- | --- |
| Language | TypeScript (strict mode) |
| Build tool | [Vite 6](https://vite.dev/) |
| Styling | Plain CSS with design tokens — no CSS framework |
| Icons | [simple-icons](https://simpleicons.org/) |
| Fonts | [@fontsource-variable/inter](https://fontsource.org/fonts/inter) |
| Linting | ESLint 9 + Prettier |
| Hosting | GitHub Pages via GitHub Actions |
| Node.js | >= 22.12.0 |

## Project structure

```text
index.html, 404.html              HTML entry shells
vite.config.ts                    Vite config (base path, multi-page build)

public/
  cv/mohamed-mamdouh-cv.pdf       downloadable CV
  images/profile/profile.png      profile photo
  favicon.svg, favicon.ico        site icons
  social-preview.png              Open Graph / Twitter card image

src/
  data/                           content source of truth
    profile.ts                    name, bio, email, CV path, education
    projects.ts                   featured projects
    skills.ts                     skill groups and items
    nav.ts                        navigation links
    social.ts                     social profile URLs
  lib/                            base-path helper, icon utilities
  render/                         DOM render functions per section
  scripts/                        theme toggle, navigation, copy-email
  styles/                         global.css + per-section stylesheets
  main.ts                         app entry — mounts all sections
  not-found.ts                    404 page entry

.github/workflows/deploy.yml      CI/CD — build and deploy to GitHub Pages
```

**Content updates:** edit files in `src/data/` rather than render modules. Asset paths should go through `withBase()` from `src/lib/paths.ts` so they resolve correctly under the GitHub Pages base path.

**Styling:** global design tokens live in `src/styles/global.css` (`--section-gap`, colors, typography). Section-specific styles are split across `hero.css`, `about.css`, `skills.css`, `projects.css`, and `contact.css`. Spacing between sections uses a single top-padding rhythm to avoid doubled gaps.

## Getting started

```bash
npm install
npm run dev
```

Open **[http://localhost:5173/portfolio/](http://localhost:5173/portfolio/)** — the `/portfolio/` prefix matches the production base path configured in `vite.config.ts`.

To preview the production build locally:

```bash
npm run build
npm run preview
```

Then open the URL shown in the terminal (also under `/portfolio/`).

## Commands

| Command | Description |
| --- | --- |
| `npm install` | Install dependencies |
| `npm run dev` | Start Vite dev server with hot reload |
| `npm run build` | Type-check with `tsc`, then build to `./dist` |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Run ESLint and Prettier checks |
| `npm run format` | Auto-format all files with Prettier |

## Deployment

Pushing to `main` triggers [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml):

1. `npm ci` — install dependencies
2. `npm run build` — type-check and produce `./dist`
3. Upload artifact and deploy to GitHub Pages

| Setting | Value |
| --- | --- |
| Production URL | **https://mohamedmamdoouh.github.io/portfolio/** |
| Base path | `/portfolio/` (must match the GitHub repository name) |
| Config | `vite.config.ts` → `base: '/portfolio/'` |

The base path must match the repository name exactly — otherwise CSS, JS, images, and favicons will return 404 on GitHub Pages.

## License

[MIT](LICENSE)
