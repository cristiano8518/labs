# Lab 03 - React State, Props and Effects

A university lab with two small React + TypeScript apps. The first shows the difference
between **props** and **state**; the second loads data from a public API with **`useEffect`**
and cancels requests that are no longer needed.

## Tasks

### Task 1 - Step Counter (`task1/`)

A reusable `StepCounter` component that receives `initialValue` and `step` as props and keeps
its own state:

- current count, changed with **Increment**, **Decrement** and **Reset**
- total number of operations
- the last 5 values (history)

The page renders two independent counters (start 0 / step 1 and start 10 / step 5), which
shows that each component instance has its own state.

### Task 2 - User Profile Viewer (`task2/`)

Loads a user from the [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API and shows the
name, email, phone and website. Buttons switch between users 1-3 or a random user (1-10).

- `useEffect` re-runs whenever `userId` changes
- loading and error states are shown
- an `AbortController` cancels the previous request in the cleanup function, so a slow
  old response can't overwrite the new one

Needs an internet connection to reach the API.

## Tech stack

- React 19 with TypeScript
- Vite (dev server and build), ESLint
- Fetch API, AbortController

## Project structure

```
.
├── task1/            # Step Counter
│   ├── index.html
│   └── src/          # main.tsx, App.tsx, index.css
└── task2/            # User Profile Viewer
    ├── index.html
    └── src/          # main.tsx, App.tsx, index.css
```

## How to run

Requires [Node.js](https://nodejs.org/) (LTS) and npm. Run these in `task1/` or `task2/`:

```bash
cd task1          # or: cd task2
npm install
npm run dev       # start the dev server, then open the URL it prints
npm run build     # type-check and build for production into dist/
npm run lint      # run ESLint
```

---

Author: cristiano8518
