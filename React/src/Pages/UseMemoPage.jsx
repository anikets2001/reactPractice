import React, { useMemo, useState } from "react";
import SideNav from "../Components/SideNav";
import ThemeToggle from "../Components/ThemeToggle";

const UseMemoPage = () => {
  const [input, setInput] = useState(5);
  const [counter, setCounter] = useState(0);

  const square = useMemo(() => {
    console.time("Execution Time");
    for (let i = 0; i < 1000000000; i++) {}
    console.timeEnd("Execution Time");

    return input ** 2;
  }, [input]);

  return (
    <div className="page-container">
      <SideNav />
      <div className="page-wrapper">
        <ThemeToggle />
        <br />
        <input
          type="number"
          value={input}
          onChange={(e) => setInput(Number(e.target.value))}
        />
        <br />
        <br />
        <p>Square: {square}</p>

        <br />
        <br />
        <br />
        <br />
        <button
          onClick={() =>
            setCounter((c) => {
              return c + 1;
            })
          }
        >
          Re-render
        </button>
        <p>Counter: {counter}</p>
      </div>
    </div>
  );
};

export default UseMemoPage;
