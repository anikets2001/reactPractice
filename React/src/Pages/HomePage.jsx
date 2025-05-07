import React from "react";
import SideNav from "../Components/SideNav";
import { FaReact } from "react-icons/fa";
import "../Css/homepage.css";

const HomePage = () => {
  return (
    <div className="page-container">
      <SideNav />
      <div className="page-content">
        <div>
          <h1>Welcome to the React.js Interview Practice Project</h1>
          <p>
            This Project contains all of the important topics of React.js for
            interview preparation.
          </p>
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
