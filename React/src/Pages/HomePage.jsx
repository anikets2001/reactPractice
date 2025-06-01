import "../Css/homepage.css";
import React, { useContext } from "react";
import SideNav from "../Components/SideNav";
import { FaReact } from "react-icons/fa";
import ToggleTheme from "../Components/ToggleTheme";
import { ThemeContext } from "../context/ThemeContext";

const HomePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={` page-container ${theme === "light" ? "light" : "dark"}`}>
      <SideNav />
      <div className="page-content">
        <div className="header-wrapper">
          <div>
            <h1>Welcome to the React.js Interview Practice Project</h1>
            <p>
              This Project contains all of the important topics of React.js for
              interview preparation.
            </p>
          </div>
          <ToggleTheme />
        </div>
        <div className="logo-wrapper">
          <FaReact className="react-logo" />
          <h2>Let's Learn React.js together</h2>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
