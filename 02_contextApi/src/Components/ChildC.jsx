import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <button onClick={toggleTheme}>
      {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ChildC;
