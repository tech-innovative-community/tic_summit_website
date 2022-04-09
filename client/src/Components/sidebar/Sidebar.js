import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
import user from "../../Images/logo.jpg";

const Sidebar = () => {
  return (
    <div className="Sidebar">
      <ul>
        <li>
          <Link to="/">Users</Link>
        </li>
        <li>
          <Link to="/">posts</Link>
        </li>
        <li>
          <Link to="/">Users</Link>
        </li>
        <li>
          <Link to="/">Users</Link>
        </li>
      </ul>
      <div className="sidebar_down">
        <div className="themes">
          <div className="theme lighttheme"></div>
          <div className="theme darktheme"></div>
        </div>
        <div className="user">
          <img src={user} alt="" />
          <span>admin</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
