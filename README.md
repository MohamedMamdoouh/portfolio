# Mohamed Mamdouh — Portfolio

Personal portfolio site for Mohamed Mamdouh, built with [Astro](https://astro.build) + TypeScript and deployed to GitHub Pages.

## Stack

- Astro (static output) + TypeScript
- Plain CSS with design tokens (no CSS framework)
- [simple-icons](https://simpleicons.org/) for technology/brand logos
- [@fontsource-variable/inter](https://fontsource.org/fonts/inter) for self-hosted type

## Project structure

```text
public/
  cv/                 final CV PDF served as a static asset
  favicon.svg, favicon.ico, social-preview.png
src/
  assets/profile/     source profile photo (optimized at build time)
  components/         navigation, hero, projects, about, skills, contact, shared
  data/               centralized content (profile, social, projects, skills, nav, site)
  layouts/BaseLayout.astro
  pages/index.astro, 404.astro
  styles/global.css
```

All personal/project content lives in `src/data/` — update it there rather than in components.

## Commands

| Command           | Action                                            |
| ----------------- | ------------------------------------------------- |
| `npm install`     | Install dependencies                              |
| `npm run dev`     | Start local dev server                            |
| `npm run build`   | Type-check (`astro check`) then build to `./dist` |
| `npm run preview` | Preview the production build locally              |
| `npm run lint`    | ESLint + Prettier check                           |
| `npm run format`  | Prettier write                                    |

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and deploys `./dist` to GitHub Pages automatically.

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
