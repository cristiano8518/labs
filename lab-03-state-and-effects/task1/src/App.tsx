import { useState } from "react";

/*
Props vs State explanation:
Props are values passed from parent to child component.
State is internal data owned by the component and can change over time.
When state changes, the component re-renders.
*/

// StepCounter Component
function StepCounter({
  initialValue = 0,
  step = 1,
}: {
  initialValue?: number;
  step?: number;
}) {
  // State variables
  const [count, setCount] = useState<number>(initialValue);
  const [history, setHistory] = useState<number[]>([]);
  const [operationCount, setOperationCount] = useState<number>(0);

  const handleIncrement = () => {
    const newValue = count + step;
    setCount(newValue);
    setHistory([...history, newValue]);
    setOperationCount(operationCount + 1);
  };

  const handleDecrement = () => {
    const newValue = count - step;
    setCount(newValue);
    setHistory([...history, newValue]);
    setOperationCount(operationCount + 1);
  };

  const handleReset = () => {
    setCount(initialValue);
    setHistory([]);
    setOperationCount(0);
  };

  return (
    <div style={{ border: "1px solid gray", padding: "15px", margin: "10px" }}>
      <h2>Current Count: {count}</h2>
      <p>Total Operations: {operationCount}</p>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <button onClick={handleReset}>Reset</button>

      <h4>Last 5 values:</h4>
      <ul>
        {history.slice(-5).map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
    </div>
  );
}

// Parent Component
function CounterApp() {
  return (
    <div>
      <h1>Step Counter Application</h1>

      <StepCounter initialValue={0} step={1} />
      <StepCounter initialValue={10} step={5} />
    </div>
  );
}

export default function App() {
  return <CounterApp />;
}
