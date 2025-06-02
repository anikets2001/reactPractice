import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ToggleTheme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function toggleTheme() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div>
      <button onClick={toggleTheme}>
        {`${theme === "light" ? "dark" : "light"}`} theme
      </button>
    </div>
  );
};

export default ToggleTheme;
