import React from "react";
import "./css/navbar.css";
import { FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const navbar = ({ showSidebar, toggleSidebar }) => {
  return (
    <nav className="nav" id="nav">
      <div className="nav-center">
        <div className="nav-header">
          <span className="nav-logo">Ettiene le Roux</span>
          <button onClick={showSidebar} className="nav-btn" id="nav-btn">
            <FaBars />
          </button>
        </div>
        <ul className="nav-links">
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/about">about</Link>
          </li>
          <li>
            <Link to="/projects">projects</Link>
          </li>
          <li>
            <Link to="/contact">contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default navbar;
