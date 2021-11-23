import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <>
      <NavLink to="/" exact>Home</NavLink>
      <NavLink to="/article">Articles</NavLink>
      <NavLink to="/help">Help</NavLink>
    </>
  );
}

export default Sidebar;
