import React, { useRef } from "react";
import SideNav from "../Components/SideNav";

export const UseRefPage = () => {
  const inputRef = useRef(null);

  function handleNameChange() {
    console.log(inputRef.current.name.toUpperCase());
  }

  return (
    <div className="page-container">
      <SideNav />
      <div className="page-wrapper">
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
