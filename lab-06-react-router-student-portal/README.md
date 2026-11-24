# Lab 06: Student Portal (React Router)

A single-page university portal built with React, TypeScript and React Router.
It shows client-side routing with nested layouts, dynamic route parameters,
data loaders, URL search parameters and error and 404 handling.

## Features

- **Shared layout.** `Layout` renders a navigation bar and footer. Child
  pages render through `<Outlet />`.
- **Pages.** Home (`/`), Courses (`/courses`) and About (`/about`).
- **Sorting in the URL.** The course list is sorted A to Z or Z to A. The
  order is kept in the URL (`/courses?sort=desc`) through `useSearchParams`,
  so it survives a reload and can be shared.
- **Dynamic routes with a loader.** `/courses/:id` loads its course with a
  route `loader` before rendering. The page reads it with `useLoaderData` and
  the id with `useParams`.
- **Error handling.** An invalid or unknown course id shows the route's
  `errorElement` ("Course not found"). Any other unknown URL shows a 404 page.

## Routes

| Route            | Page                          |
| ---------------- | ----------------------------- |
| `/`              | Home                          |
| `/courses`       | Course list (`?sort=asc` or `?sort=desc`) |
| `/courses/:id`   | Course details (ids 1 to 4)   |
| `/about`         | About the program             |
| `*`              | 404 Not Found                 |

## Tech stack

- React 19
- TypeScript
- React Router 7 (`createBrowserRouter`, data loaders)
- Vite 8
- ESLint (typescript-eslint, react-hooks, react-refresh)

## Project structure

```
.
└── student-portal/
    ├── index.html
    ├── public/vite.svg        Favicon
    ├── src/
    │   ├── main.tsx           Router configuration and entry point
    │   ├── Layout.tsx         Navigation, <Outlet />, footer
    │   ├── Home.tsx
    │   ├── Courses.tsx        Sortable course list
    │   ├── CourseDetail.tsx   Course page (loader data)
    │   ├── About.tsx
    │   ├── NotFound.tsx
    │   ├── data.ts            Course model and mock data
    │   └── App.css            Styles
    ├── vite.config.ts
    └── package.json
```

## Getting started

Requirements: Node.js 20.19 or newer (or 22.12 or newer) and npm.

```bash
cd student-portal
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
