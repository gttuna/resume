# Resume Experience App

React + TypeScript + Material UI single-page app that renders a design-forward version of Kyle Venable's resume. Content flows from `src/data/resume.ts`, making it easy to hydrate from an API when the FastAPI admin backend comes online.

## Quick Start

```bash
cd frontend
npm install
npm run dev
```

- Dev server: http://localhost:5173 with fast refresh.
- `npm run build`: production bundle (verified during setup).
- `npm run preview`: serves the build locally for smoke testing.

## PDF and Print

- `Download PDF` in the hero triggers `window.print()` with print styling (light background, buttons hidden).
- For richer control (multi-page layouts, custom headers), add a dedicated print route or integrate `@react-pdf/renderer`.

## Project Layout

- `src/data/resume.ts` – structured resume content (profile, highlights, projects, experience, education, skills).
- `src/components` – shared UI elements such as section headings and contact chips.
- `src/sections` – main page slices composed with Material UI primitives.
- `src/theme/index.ts` – theme overrides, typography scale, component styles (Roboto Flex variable font).

## Next Moves

1. **Design system polish** – promote gradients, spacing, and typography tokens into the theme for future admin screens.
2. **Data plumbing** – replace the static export with hooks that read from the upcoming FastAPI + SQLite backend.
3. **Admin workspace** – scaffold a secure `/admin` route, add content editing flows, and wire in OpenAI resume/cover letter tailoring tools.
4. **Testing** – add React Testing Library coverage for key sections and visual regression checks before launch.

Tweak colors and layout in `src/theme/index.ts` and the section files to align with portfolio branding before deploying.*** End Patch
