# Labs - React Fundamentals

University lab work on React basics: JSX, Fragments, rendering lists with `map` and `key`,
and building reusable components with props and `children`.

## Lab 2

### Task 1 - Fragments and Lists (`Lab2/task1/`)

- **Fragment layout** - `header`, `main` and `footer` rendered side by side with `<>...</>`,
  with no extra wrapper `div` in the DOM
- **List rendering** - an array of fruits rendered with `items.map()`, each `<li>` keyed by `id`
- **Combined fragment** - a heading, the list and a "Total: N items" line (`items.length`)
  returned from a single Fragment

A short write-up of the task (in Russian) is in `Lab2/task1/ОТЧЕТ_ЛАБ1.md`.

### Task 2 - Reusable Card Components (`Lab2/task2/`)

- **`Card`** - a reusable component that takes a `title`, `children` and an optional extra
  `className`
- **`ProductList`** - maps an array of products to `Card`s showing name and price
- **`Section`** - a Fragment-based wrapper that adds a heading above any content
- custom CSS for the card row, product cards and a highlighted card

## Tech stack

- React 19 (JavaScript, JSX)
- Vite (rolldown-vite), ESLint
- Plain CSS

## Project structure

```
.
└── Lab2/
    ├── task1/          # Fragments and lists
    │   ├── index.html
    │   └── src/        # main.jsx, App.jsx, index.css
    └── task2/          # Reusable Card components
        ├── index.html
        └── src/        # main.jsx, App.jsx, index.css
```

## How to run

Requires [Node.js](https://nodejs.org/) (LTS) and npm. Run these in the task folder:

```bash
cd Lab2/task1     # or: cd Lab2/task2
npm install
npm run dev       # start the dev server, then open the URL it prints
npm run build     # production build into dist/
npm run lint      # run ESLint
```

---

Author: cristiano8518
