import { useState } from "react";

/*
React works as a view layer:
State changes → Component re-renders → UI updates.
*/

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <button onClick={() => setCount(count - 1)}>
        Decrement
      </button>
    </div>
  );
}

export default function App() {
  return (
    <div>
      <h1>React Counter Example</h1>
      <Counter />
    </div>
  );
}
