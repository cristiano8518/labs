# Lab 05 — User Search (React + TypeScript)

A small React + TypeScript app (built with Vite) that practises typed components,
props and state: a live user search, reusable user cards and a typed skills list.

## Features

- **Live search** — filters users by name as you type (case-insensitive), with a "No results found" state
- **Clear button** — resets the search and restores the full list
- **`UserCard` component** — typed `user` prop, optional `isActive` prop and `children` slot
- **`SkillList` component** — renders skills with a typed level (`Beginner | Intermediate | Expert`)
- Shared domain types in `src/types.ts`

## Tech stack

- React 19
- TypeScript (strict mode)
- Vite 7
- ESLint (typescript-eslint, react-hooks, react-refresh)

## Project structure

```
.
├── index.html
├── public/vite.svg          # Favicon
└── src/
    ├── main.tsx             # Entry point
    ├── App.tsx              # Page layout and sample data
    ├── SearchApp.tsx        # Search input + filtered list
    ├── UserCard.tsx         # User card with children
    ├── SkillList.tsx        # Typed skills list
    ├── types.ts             # User, Skill, SkillLevel
    └── index.css            # Global styles
```

## Getting started

Requirements: Node.js 20.19+ or 22.12+ (required by Vite 7).

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

## Author

Author: cristiano8518
