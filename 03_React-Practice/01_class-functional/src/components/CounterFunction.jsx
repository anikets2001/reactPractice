import React, { useState } from "react";

const CounterFunction = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };


  return (
    <div className="wrapper">
      <div>
        <h1>Functional Component</h1>
      </div>
      <div> Count is:{count}</div>
      <button onClick={handleIncrement}>Increment</button>
    </div>
  );
};

export default CounterFunction;
