# Lab 04 - React Forms and Component Composition

A university lab with two React apps (JavaScript, Create React App). The first is a form with
controlled inputs and validation; the second is a small article manager split into
several components that talk to each other through props and callbacks.

## Tasks

### Task 1 - Registration Form (`task1/registration-form/`)

A registration form with **Name**, **Email** and **Age** fields.

- controlled inputs (`useState` for every field)
- validation while typing and again on submit:
  - name is required, at least 2 characters
  - email is required and must look like an email address
  - age is required and must be 18 or older
- error messages under each field; a success message after a valid submit, then the form is cleared

### Task 2 - Article Manager (`task2/`)

Add articles with a title and summary, click a title to show or hide its summary, and remove
articles with the **×** button.

Component structure:

```
App
└── ArticleManager      # owns the state: articles, title, summary
    ├── AddArticle      # form inputs + "Add" button (controlled via props)
    └── ArticleList     # renders the list
        └── ArticleItem # title toggles the summary; × removes the item
```

## Tech stack

- React 19 (JavaScript, JSX)
- Create React App (`react-scripts` 5)
- Jest + React Testing Library

## Project structure

```
.
├── task1/
│   └── registration-form/
│       ├── public/          # index.html, icons, manifest
│       └── src/             # App.js, RegistrationForm.js, index.js, tests
└── task2/
    ├── public/              # index.html, icons, manifest
    └── src/                 # App.js, ArticleManager.js, AddArticle.js,
                             # ArticleList.js, ArticleItem.js, index.js, tests
```

## How to run

Requires [Node.js](https://nodejs.org/) (LTS) and npm. Run these in the folder of the task
you want to open:

```bash
cd task1/registration-form   # or: cd task2
npm install
npm start        # start the dev server at http://localhost:3000
npm test         # run the tests
npm run build    # production build into build/
```

---

Author: cristiano8518
