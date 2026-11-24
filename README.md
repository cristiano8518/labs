# University Labs — Frontend & Mobile Development

All laboratory work from my IT degree at **Almaty Management University** (3rd year, graduating 2027), collected in one place.
Each lab lives in its own folder with its own README, source code and run instructions.

**Stack across the labs:** React · TypeScript · JavaScript · Next.js · React Router · React Native (Expo) · Vite · jQuery

## Labs

| # | Lab | What it shows | Stack |
|---|-----|---------------|-------|
| 01 | [Imperative vs. Declarative UI](lab-01-imperative-vs-declarative) | The same highlight toggle built with jQuery and with React; a counter app | jQuery, React, TypeScript, Vite |
| 02 | [React Fundamentals](lab-02-react-fundamentals) | JSX, Fragments, list rendering with keys, reusable components with `children` | React, JavaScript, Vite |
| 03 | [State, Props and Effects](lab-03-state-and-effects) | Step counter with history; user profile fetcher with `useEffect` and `AbortController` | React, TypeScript, Vite |
| 04 | [Forms and Component Composition](lab-04-forms-and-components) | Validated registration form; article manager split into small components | React, JavaScript, CRA, Testing Library |
| 05 | [User Search](lab-05-typescript-user-search) | Live user search, typed props, reusable user cards | React, TypeScript, Vite |
| 06 | [Student Portal](lab-06-react-router-student-portal) | Nested layouts, loaders, dynamic routes, URL-driven sorting, error pages | React Router 7, TypeScript |
| 07 | [Lazy Routes](lab-07-lazy-routes) | Route-based code splitting with `React.lazy`, `Suspense` and error boundaries | React, React Router, TypeScript |
| 08 | [Next.js SSR / SSG](lab-08-nextjs-ssr-ssg) | Blog with SSG + ISR and a dashboard with SSR, compared side by side | Next.js, TypeScript |
| 09 | [React Performance](lab-09-react-performance) | `React.memo`, `useMemo`, `useCallback`, virtualised list of 10,000 items | React, TypeScript, react-window |
| 13 | [React Navigation (Expo)](lab-13-react-navigation-expo) | Bottom tabs with nested, typed stack navigators | React Native, Expo, TypeScript |
| 14 | [Contacts & Registration (Expo Router)](lab-14-rn-contacts-registration) | Optimised `FlatList` contacts screen and a validated registration form | React Native, Expo Router, TypeScript |

## Running a lab

Every web lab is a standalone Node project:

```bash
cd lab-05-typescript-user-search   # or any other lab folder (some have task1/ and task2/ inside)
npm install
npm run dev                        # Vite labs; CRA labs use npm start, Next.js uses npm run dev
```

Mobile labs (13, 14) run with Expo:

```bash
cd lab-13-react-navigation-expo
npm install
npx expo start
```

See each folder's README for the exact commands.

## Other projects

- [NexusERP](https://github.com/cristiano8518/NexusERP) — full-stack ERP: Django REST API, Next.js dashboard, Celery, Redis, Docker, Nginx, CI/CD
- [cargo](https://github.com/cristiano8518/cargo) — Django cargo-delivery platform with JWT REST API, route maps, Docker and Render deploy

---
Author: Sanzhar Abdirakhman ([cristiano8518](https://github.com/cristiano8518))
