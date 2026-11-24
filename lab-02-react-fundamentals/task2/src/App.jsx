import React from "react";

// Task 1: Reusable Card component
function Card({ title, children, className = "" }) {
  // базовый класс + опциональный className из пропса
  const cardClassName = `card ${className}`.trim();

  return (
    <article className={cardClassName}>
      <h3>{title}</h3>
      <div className="card-body">{children}</div>
    </article>
  );
}

// Task 2: ProductList with mapping
const products = [
  { id: 1, name: "Widget", price: 9.99 },
  { id: 2, name: "Gadget", price: 14.5 },
  { id: 3, name: "Super Tool", price: 29.0 },
];

function ProductList() {
  return (
    <div className="product-list">
      {products.map((product) => (
        <Card
          key={product.id}
          title={product.name}
          className="product-card"
        >
          <p>Price: ${product.price}</p>
        </Card>
      ))}
    </div>
  );
}

// Task 3: Fragment-based Section
function Section({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      {children}
    </>
  );
}

export default function App() {
  return (
    <div className="app">
      {/* Пример двух Card (Task 1) */}
      <Section title="Featured cards">
        <div className="card-row">
          <Card title="Welcome" className="highlight">
            <p>This is a reusable Card component.</p>
          </Card>
          <Card title="Info">
            <p>Props are used for title and content.</p>
          </Card>
        </div>
      </Section>

      <hr />

      {/* ProductList внутри Section (Task 2 + Task 3) */}
      <Section title="Products">
        <ProductList />
      </Section>
    </div>
  );
}