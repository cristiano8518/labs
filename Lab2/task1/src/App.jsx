import React from "react";

// Task 1: Fragment-only layout (header/main/footer без wrapper div)
function FragmentLayout() {
  return (
    <>
      <header>
        <h1>Fragment Layout</h1>
      </header>

      <main>
        <p>Layout сделан с помощью Fragment, без лишнего wrapper div.</p>
      </main>

      <footer>
        <small>© 2026</small>
      </footer>
    </>
  );
}

// Task 2: array + map + key
const items = [
  { id: 1, name: "Apple" },
  { id: 2, name: "Banana" },
  { id: 3, name: "Cherry" },
];

function ItemList() {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{item.name}</li>
      ))}
    </ul>
  );
}

// Task 3: title + list + total (items.length) в одном Fragment
function CombinedFragmentList() {
  return (
    <>
      <h2>Fruits</h2>
      <ItemList />
      <p>Total: {items.length} items</p>
    </>
  );
}

export default function App() {
  return (
    <>
      <FragmentLayout />
      <hr />
      <CombinedFragmentList />
    </>
  );
}