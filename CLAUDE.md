# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build (type-checks + compile)
npm run lint     # ESLint
```

## Architecture

**Content / layout separation is the core principle.** Every string visible on the page originates in one of three data files — components contain zero hardcoded content:

| File | What lives there |
|---|---|
| `src/data/meta.ts` | Name, title, location, tagline, email, social URLs |
| `src/data/projects.ts` | All project entries (title, tags, description, link, image path) |
| `src/data/experience.ts` | All experience entries (company, period, role, summary) |

**Component tree:**

```
app/layout.tsx          — fonts (Manrope + Inter via next/font/google), Navbar, Footer, metadata
app/page.tsx            — composes Hero → Projects → Experience → Contact in order
components/layout/      — Navbar (sticky glass, hamburger on mobile), Footer
components/sections/    — one file per page section; each imports from data/
components/ui/          — ProjectCard (alternating image/text rows), ExperienceRow (two-col grid)
types/index.ts          — Project, Experience, Meta interfaces
```

**Design tokens** are defined in two places that must stay in sync:

- `tailwind.config.ts` — extends `colors` (`bg`, `text-primary`, `text-muted`, `accent-purple`, `accent-indigo`) and `fontFamily` (`manrope`, `inter`)
- `src/app/globals.css` — matching CSS custom properties on `:root`

Use Tailwind utility classes referencing these tokens (e.g. `text-text-muted`, `text-accent-purple`). Do not introduce inline hex values or new colour variables.

**Images:** Drop screenshots into `public/images/projects/` and reference them as `/images/projects/filename.png` in `src/data/projects.ts`. The `bg-gray-200` placeholder is shown automatically when an image file is missing — the aspect-video container always reserves space.

**Alternating layout:** `ProjectCard` uses `md:flex-row-reverse` when `index % 2 !== 0`. On mobile all rows stack vertically (image above text).

**Section background shift** (no dividers): `Experience` uses `bg-white`; `Hero`, `Projects`, and `Contact` use the default `#f5f6f7` body background.

## Deployment

Push to GitHub and import on [vercel.com](https://vercel.com) — zero configuration needed. The project has no environment variables or backend services.
