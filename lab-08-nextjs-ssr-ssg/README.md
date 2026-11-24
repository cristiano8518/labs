# Lab 08: Server-Side Rendering and Static Generation with Next.js

A small Next.js (Pages Router) blog and user dashboard that compares the main
Next.js rendering strategies side by side: Static Site Generation (SSG),
Incremental Static Regeneration (ISR) and Server-Side Rendering (SSR).

All data comes from an in-memory mock service, so the app needs no database
or API keys.

## What it covers

### Task 1: Blog with SSG and ISR

- `/` is the blog home page. It is generated at build time with `getStaticProps`
  and regenerated every 60 seconds (ISR, `revalidate: 60`).
- `/posts/[id]` serves one page per post. The paths come from
  `getStaticPaths`, with `fallback: "blocking"` for posts added later.
- Typed `Post` and `Author` models and mock data helpers.

### Task 2: User dashboard with SSR

- `/dashboard` is a personalised dashboard rendered on every request with
  `getServerSideProps`. It loads the user, notifications and analytics in
  parallel.
- `/about` (SSG + ISR) and `/about-ssr` (SSR) are the same page built two ways.
  Each shows the time it was generated, so you can see when it is regenerated.

### SSR vs SSG summary

| Aspect           | SSG / ISR                                 | SSR                                          |
| ---------------- | ----------------------------------------- | -------------------------------------------- |
| First load speed | Usually faster: HTML is pre-rendered      | Slower: HTML is generated per request        |
| Data freshness   | As fresh as the last (re)generation       | Always fresh                                 |
| Server load      | Work moves to build time                  | Work on every request                        |
| Best for         | Blog posts, static content, landing pages | Dashboards, user-specific or authenticated pages |

## Tech stack

- Next.js 16 (Pages Router) with the React Compiler enabled
- React 19
- TypeScript
- ESLint (`eslint-config-next`)
- Plain CSS (`src/styles/globals.css`). Tailwind CSS 4 and PostCSS are configured but not used yet.

## Project structure

```
.
└── my-blog/                  Next.js application
    ├── src/
    │   ├── pages/
    │   │   ├── _app.tsx        Global styles
    │   │   ├── index.tsx       Blog home (SSG + ISR)
    │   │   ├── posts/[id].tsx  Post page (dynamic SSG)
    │   │   ├── dashboard.tsx   User dashboard (SSR)
    │   │   ├── about.tsx       Comparison page (SSG + ISR)
    │   │   └── about-ssr.tsx   Comparison page (SSR)
    │   ├── lib/api.ts          Mock data and async data helpers
    │   ├── types/index.ts      TypeScript interfaces
    │   └── styles/globals.css
    ├── Lab_08/task1/README.md  Task 1 notes
    ├── Lab_08/task2/README.md  Task 2 notes
    ├── next.config.ts
    └── package.json
```

## Getting started

Requirements: Node.js 20.9 or newer and npm.

```bash
cd my-blog
npm install
npm run dev        # development server at http://localhost:3000
```

Other scripts:

```bash
npm run build      # production build
npm run start      # serve the production build
npm run lint       # run ESLint
```

## Routes

| Route         | Rendering                 |
| ------------- | ------------------------- |
| `/`           | SSG + ISR (60 s)          |
| `/posts/1`    | Dynamic SSG (ids 1 to 3)  |
| `/dashboard`  | SSR                       |
| `/about`      | SSG + ISR (60 s)          |
| `/about-ssr`  | SSR                       |

---

Author: cristiano8518
