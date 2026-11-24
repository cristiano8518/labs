# Lab 09: React Performance Optimization

A small React + TypeScript dashboard built to show common React performance
techniques: memoization, stable callbacks, caching expensive calculations
and list virtualization.

Components log their renders with `console.log`. Open the browser DevTools
console (or the React DevTools Profiler) to see which components re-render
when state changes.

## What it shows

| Component             | Technique                       | What to observe |
| --------------------- | ------------------------------- | --------------- |
| `Dashboard`           | Parent state (`count`)          | Clicking **Increment** re-renders the dashboard. |
| `UserCard`            | `React.memo`                    | Does not re-render when only the dashboard counter changes. |
| `AnalyticsChart`      | `useMemo`                       | The expensive calculation (10 million iterations) runs only when `items` changes, not on every render. |
| `ActivityFeed`        | No memoization (baseline)       | Re-renders on every parent update, for comparison. |
| `ParentComponent` + `Button` | `useCallback` + `React.memo` | The handlers keep the same identity, so the memoized buttons skip re-renders. |
| `VirtualList`         | Virtualization (`react-window`) | Renders 10,000 generated items smoothly by drawing only the visible rows. Includes a filter input whose results are cached with `useMemo`. |

## Tech stack

- React 19
- TypeScript
- Vite 8
- react-window 2
- ESLint (typescript-eslint, react-hooks, react-refresh)

## Project structure

```
.
└── perf-app/
    ├── index.html
    ├── public/favicon.svg
    ├── src/
    │   ├── main.tsx              Entry point
    │   ├── App.tsx               Renders the Dashboard
    │   ├── index.css             Global styles
    │   ├── components/
    │   │   ├── Dashboard.tsx
    │   │   ├── UserCard.tsx
    │   │   ├── AnalyticsChart.tsx
    │   │   ├── ActivityFeed.tsx
    │   │   ├── ParentComponent.tsx
    │   │   ├── Button.tsx
    │   │   └── VirtualList.tsx
    │   └── utils/generateItems.ts  Mock data generator
    ├── vite.config.ts
    └── package.json
```

## Getting started

Requirements: Node.js 20.19 or newer (or 22.12 or newer) and npm.

```bash
cd perf-app
npm install
npm run dev        # development server (Vite prints the local URL)
```

Other scripts:

```bash
npm run build      # type-check (tsc -b) and production build
npm run preview    # preview the production build
npm run lint       # run ESLint
```

---

Author: cristiano8518
