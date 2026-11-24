# Lab 01 - Imperative vs. Declarative UI

A university lab that compares two ways of building a user interface: changing the DOM
by hand (imperative, with jQuery) and describing the UI as a function of state
(declarative, with React). It also shows React acting as the "view layer" in a small counter app.

## Tasks

### Task 1 - Toggle highlight: jQuery vs. React

The same feature is built twice: a button that turns a yellow highlight on and off for a paragraph.

| Version | Location | Approach |
| --- | --- | --- |
| Imperative | `task1/index.html` | jQuery finds the element and toggles a CSS class directly (`toggleClass`). |
| Declarative | `task1/react-version/` | A `useState` boolean decides the paragraph's class; React re-renders when it changes. |

### Task 2 - Counter app

`task2/counter-app/` is a React counter with **Increment** and **Decrement** buttons. It shows
the flow *state change → component re-render → UI update*.

## Tech stack

- HTML, CSS, jQuery 3.6 (loaded from the jQuery CDN)
- React 19 with TypeScript
- Vite (dev server and build), ESLint

## Project structure

```
.
├── task1/
│   ├── index.html          # jQuery version (single static page)
│   └── react-version/      # React + TypeScript + Vite version
│       ├── index.html
│       └── src/            # main.tsx, App.tsx, index.css
└── task2/
    └── counter-app/        # React + TypeScript + Vite counter
        ├── index.html
        └── src/            # main.tsx, App.tsx, index.css
```

## How to run

### Task 1 - jQuery version (static page)

Open `task1/index.html` in a browser. No build step is needed. An internet connection is
required because jQuery is loaded from a CDN. This page could also be hosted on GitHub Pages.

### React apps (Task 1 React version, Task 2)

Requires [Node.js](https://nodejs.org/) (LTS) and npm.

```bash
cd task1/react-version   # or: cd task2/counter-app
npm install
npm run dev              # start the dev server, then open the URL it prints
npm run build            # type-check and build for production into dist/
npm run lint             # run ESLint
```

---

Author: cristiano8518
