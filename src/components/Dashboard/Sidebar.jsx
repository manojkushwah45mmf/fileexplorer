import React from "react";
import "../Dashboard/Dashboard.css";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="sidebar">
        <div className="logo_img"></div>
        <ul>
         <NavLink to ="/web-dashboard" exact>
          <li>
            <span>ViewFile</span>
          </li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
