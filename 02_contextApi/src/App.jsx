import { createContext, useState } from "react";
import "./App.css";
import ChildA from "./Components/ChildA";

// step1: create context
export const ThemeContext = createContext();

// step2: wrap all the consumers inside a provider

// step3: pass value

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div
        id="container"
        style={{ backgroundColor: theme === "light" ? "white" : "black" }}
      >
        <ChildA />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
