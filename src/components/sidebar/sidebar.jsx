import React from "react";
import "./css/sidebar.css";
import { RxCross2 } from "react-icons/rx";

const sidebar = ({ toggleSidebar, hideSidebar }) => {
  return (
    <aside className={`sidebar ${toggleSidebar}`} id="sidebar">
      <div>
        <button onClick={hideSidebar} className="close-btn" id="close-btn">
          <RxCross2 />
        </button>
        <ul className="sidebar-links">
          <li>
            <a href="index.html">home</a>
          </li>
          <li>
            <a href="about.html">about</a>
          </li>
          <li>
            <a href="projects.html">projects</a>
          </li>
          <li>
            <a href="contact.html">contact</a>
          </li>
        </ul>
        <ul className="social-icons">
          <li>
            <a href="https://www.twitter.com" className="social-icon">
              <i className="fab fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="social-icon">
              <i className="fab fa-squarespace"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="social-icon">
              <i className="fab fa-behance"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com" className="social-icon">
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default sidebar;
