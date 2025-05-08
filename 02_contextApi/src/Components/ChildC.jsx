import React, { useContext } from "react";
import { ThemeContext } from "../App";

const ChildC = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  function handleThemeChange() {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <button onClick={handleThemeChange}>
      {theme === "light" ? "dark" : "light"} theme
    </button>
  );
};

export default ChildC;
