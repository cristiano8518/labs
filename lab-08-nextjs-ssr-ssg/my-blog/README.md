# Lab 08 - SSR/SSG with Next.js

Student Name:  Pak Anika 
Date: 20.03.2026

## Implemented Features

- `src/pages/index.tsx`: SSG home page with ISR (`revalidate: 60`)
- `src/pages/posts/[id].tsx`: dynamic SSG routes with `getStaticPaths`
- `src/pages/dashboard.tsx`: SSR personalized dashboard with `getServerSideProps`
- `src/pages/about.tsx`: SSG comparison page
- `src/pages/about-ssr.tsx`: SSR comparison page
- `src/types/index.ts`: TypeScript interfaces
- `src/lib/api.ts`: mock data and server-side fetching helpers

## Folder Structure

- `Lab_08/task1/`
- `Lab_08/task2/`

## SSR vs SSG Comparison

- First load speed: SSG is usually faster because HTML is pre-rendered.
- Data freshness: SSR is always fresh because data is generated on each request.
- Server load: SSR increases server work, SSG shifts work to build time.
- Best use cases:
  - SSG/ISR: blog posts, static content, marketing pages.
  - SSR: dashboards, user-specific pages, dynamic authenticated content.

## How To Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

- `/` - blog home (SSG + ISR)
- `/posts/1` - dynamic post page (SSG)
- `/dashboard` - user dashboard (SSR)
- `/about` - SSG test page
- `/about-ssr` - SSR test page
