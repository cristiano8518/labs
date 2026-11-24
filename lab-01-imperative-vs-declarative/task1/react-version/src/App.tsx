import { useState } from "react";

/*
Declarative version:
We do not manipulate the DOM directly.
Instead, we change state and React re-renders the UI.
*/

export default function App() {
  const [isHighlighted, setIsHighlighted] = useState<boolean>(false);

  return (
    <div style={{ padding: "20px" }}>
      <h2>React Declarative Example</h2>

      <button onClick={() => setIsHighlighted(!isHighlighted)}>
        Toggle Highlight
      </button>

      <p className={isHighlighted ? "highlight" : ""}>
        This paragraph will be highlighted.
      </p>

      <style>
        {`
          .highlight {
            background: yellow;
          }
        `}
      </style>
    </div>
  );
}
