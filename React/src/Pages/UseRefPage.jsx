import React, { useRef } from "react";
import SideNav from "../Components/SideNav";
import ThemeToggle from "../Components/ThemeToggle";

export const UseRefPage = () => {
  const inputRef = useRef(null);

  function handleNameChange() {
    console.log(inputRef.current.name.toUpperCase());
  }

  return (
    <div className="page-container">
      <SideNav />
      <div className="page-wrapper">
        <ThemeToggle />
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
