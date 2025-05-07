import React from "react";
import { FaReact } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../Css/sidenav.css";

const SideNav = () => {
  return (
    <div className="sidenav">
      <h2 className="sidenav-title">React.js</h2>
      <FaReact className="react-logo" />
      <ul className="sidenav-list">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/useRef"}>useRef</NavLink>
        <li>About</li>
        <li>Projects</li>
        <li>Contact</li>
      </ul>
    </div>
  );
};

export default SideNav;
