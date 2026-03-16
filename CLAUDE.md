# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server (Vite, localhost:5173)
npm run build    # Production build
npm run preview  # Preview production build
```

No test runner is configured.

## Project Structure

```
src/
├── App.jsx                   # Router setup (3 routes) + Header + ThemeToggle
├── main.jsx                  # React entry point
├── index.css                 # Tailwind v4 import, theme tokens, base styles
├── components/
│   ├── Header.jsx            # Sticky nav with links to all pages
│   └── ThemeToggle.jsx       # Dark/light mode toggle (persisted in localStorage)
└── pages/
    ├── Home.jsx              # Landing hero page (/)
    ├── Blog.jsx              # Blog post grid (/blog)
    └── Components.jsx        # Design system showcase (/components)
```

> **Rule:** When adding a new page, always add a corresponding `NavLink` entry to the `links` array in `src/components/Header.jsx` and a `<Route>` in `src/App.jsx`.

## Architecture

React 18 SPA using Vite and React Router v6. Three routes defined in `src/App.jsx`:

- `/` → `src/pages/Home.jsx`
- `/blog` → `src/pages/Blog.jsx`
- `/components` → `src/pages/Components.jsx`

## Styling

Tailwind CSS v4 (via `@tailwindcss/vite`). Custom design tokens are defined in `src/index.css` under `@theme`:

- **Colors**: `primary` (#6c63ff), `secondary` (#ff6584), `success`, `warning`, `danger`
- **Fonts**: `font-sans` (Segoe UI), `font-mono` (Fira Code)
- Tailwind's default `neutral-*` palette is used for grays (matches previous token values exactly)

Dark mode is class-based (`.dark` on `<html>`), toggled by `ThemeToggle`. Always add `dark:` variants when adding new color/background styles.

The `/components` page serves as a live design system showcase (color palette, type scale, buttons). Data for Blog posts is hardcoded as a static array in `Blog.jsx`.
