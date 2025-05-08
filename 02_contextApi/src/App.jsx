import "./App.css";
import { useState } from "react";
import ChildA from "./Components/ChildA";
import { ThemeContext } from "./context/ThemeContext";

// step1: create a context
// step2: wrap all children inside a Provider with a value
// destructure the value in the consumer and use that value

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        id="container"
        style={{ backgroundColor: theme === "light" ? "#fff" : "#000" }}
      >
        <ChildA />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
