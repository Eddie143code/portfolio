import React from "react";
import Navbar from "../../components/navbar/navbar";
import "./css/home.css";

import { Link } from "react-router-dom";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import me from "./images/me.JPG";

const home = () => {
  return (
    <section className="section-center hero-center">
      <article className="hero-info">
        <div className="underline"></div>
        <h1>hi, i'm ettiene</h1>
        <h4>web developer</h4>
        <Link to="/contact" className="btn hero-btn">
          Hire me
        </Link>
        <ul className="social-icons hero-icons">
          <li>
            <a href="https://github.com/Eddie143code" className="social-icon">
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="www.linkedin.com/in/ettiene-joubert-le-roux403"
              className="social-icon"
            >
              <FaLinkedin />
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
      </article>
      <article className="hero-img">
        <img src={me} className="hero-photo" alt="john doe" />
      </article>
    </section>
  );
};

export default home;
