import React from "react";
import "./css/projects.css";
import sneakerzone from "./images/sneakerzone-image.png";

const projects = () => {
  return (
    <>
      <header class="projects-hero">
        <div class="section-title">
          <h1>my projects</h1>
          <div class="underline"></div>
        </div>
      </header>
      <section class="section">
        <div class="section-center projects-page-center">
          <article class="single-project">
            <div class="project-container">
              <img src={sneakerzone} alt="single project" />
              {/*<a href="" class="project-icon">
                <i class="fas fa-home"></i>
  </a>*/}
            </div>
            <div class="project-details">
              <h4>project name</h4>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
                eveniet amet odit aperiam, provident cum possimus sapiente minus
                quos! Ipsum?
              </p>
              <div class="project-footer">
                <span>
                  <i class="fab fa-github"></i>
                </span>
                <a href="https://sneaker-zone-riq1x6zz0-placenamehere1901-gmailcom.vercel.app/">
                  visit site
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default projects;
