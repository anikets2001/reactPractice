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
        <NavLink to={"/"} className={"link"}>
          Home
        </NavLink>
        <NavLink to={"/useRef"} className={"link"}>
          useRef
        </NavLink>
        <NavLink to={"/useMemo"} className={"link"}>
          useMemo
        </NavLink>
      </ul>
    </div>
  );
};

export default SideNav;
