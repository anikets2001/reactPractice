// BuggyComponent.jsx
import React, { useState } from "react";

function BuggyComponent() {
  const [count, setCount] = useState(0);

  if (count === 3) {
    throw new Error("I crashed at count 3!");
  }

  return (
    <div className="buggy-component">
      <p>Click count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
}

export default BuggyComponent;
