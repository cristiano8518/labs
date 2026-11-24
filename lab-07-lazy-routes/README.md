# Lab 07 — Lazy Routes: Code Splitting with React Router

A React + TypeScript single-page app (built with Vite) that demonstrates
**route-based code splitting** with `React.lazy` and `Suspense`, client-side routing
with React Router, and graceful error handling with an **Error Boundary**.

## Features

- Client-side routing with `BrowserRouter`, `Routes` and `NavLink` (active link highlighting)
- Pages (Dashboard, Settings, Profile) are lazy-loaded — each one is split into its own chunk
- `Suspense` fallback with an animated loading spinner while a page chunk loads
- Class-based `ErrorBoundary` with a fallback UI and a "Try Again" reset button
- Card-style layout with hover and fade-in animations

## Tech stack

- React 19
- TypeScript (strict mode)
- React Router 7 (`react-router-dom`)
- Vite 8 (beta)
- ESLint (typescript-eslint, react-hooks, react-refresh)

## Project structure

```
.
├── index.html
├── public/vite.svg                # Favicon
└── src/
    ├── main.tsx                   # Entry point
    ├── App.tsx                    # Router, lazy imports, Suspense + ErrorBoundary
    ├── components/
    │   └── ErrorBoundary.tsx
    ├── pages/
    │   ├── Dashboard.tsx
    │   ├── Settings.tsx
    │   └── Profile.tsx
    └── index.css                  # Global styles, spinner and animations
```

## Getting started

Requirements: Node.js 20.19+ or 22.12+.

```bash
npm install
npm run dev
```

Then open the URL printed in the terminal (by default http://localhost:5173).

Other scripts:

```bash
npm run build      # type-check (tsc -b) and build for production into dist/
npm run preview    # serve the production build locally
npm run lint       # run ESLint
```

> The project uses `BrowserRouter`, so when deploying to static hosting configure a
> fallback that serves `index.html` for unknown paths.

## Author

Author: cristiano8518
