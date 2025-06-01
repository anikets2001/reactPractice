import React, { useRef } from "react";
import SideNav from "../Components/SideNav";
import ToggleTheme from "../Components/ToggleTheme";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const UseRefPage = () => {
  const { theme } = useContext(ThemeContext);
  const inputRef = useRef(null);

  function handleNameChange() {
    console.log(inputRef.current.name.toUpperCase());
  }

  return (
    <div className={`page-container ${theme === "light" ? "light" : "dark"}`}>
      <SideNav />
      <div className="page-wrapper">
        <ToggleTheme />
        <br />
        <label for="name">Name:</label>
        <input
          id="name"
          name="name"
          placeholder="enter name here..."
          ref={inputRef}
          onChange={handleNameChange}
        />
      </div>
    </div>
  );
};
