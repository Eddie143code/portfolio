import React from "react";
import "./css/projects.css";
import sneakerzone from "./images/sneakerzone-image.png";
import tarantinobox from "./images/tarantinobox.png";
import weatherapp from "./images/weather-app.png";

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
              <h4>SneakerZone</h4>
              <p class="project-paragraph">
                An e-commerce website that sells shoes. The owner can upload
                products throught the admin screen at
                sneaker-zone.vercel.app/admin. The technologies used are:
                Next.js, MUI, Supabase and useReducer/useContext. Also
                elephantsql implemented in a branch with sequelize.
              </p>
              <div class="project-footer">
                <span>
                  <i class="fab fa-github"></i>
                </span>
                <a href="https://sneaker-zone.vercel.app/">visit site</a>
              </div>
            </div>
          </article>
          <article class="single-project">
            <div class="project-container">
              <img src={tarantinobox} alt="single project" />
              {/*<a href="" class="project-icon">
                <i class="fas fa-home"></i>
  </a>*/}
            </div>
            <div class="project-details">
              <h4>TarantinoBox</h4>
              <p>
                A website to write and look up reviews of movies by Quentin
                Tarantino. The technologies used are: React, Node with
                Express.js, TailwindCSS, redux toolkit, and MongoDB.
              </p>
              <div class="project-footer">
                <span>
                  <i class="fab fa-github"></i>
                </span>
                <a href="https://tarantino-box.vercel.app/">visit site</a>
              </div>
            </div>
          </article>
          <article class="single-project">
            <div class="project-container">
              <img src={weatherapp} alt="single project" />
              {/*<a href="" class="project-icon">
                <i class="fas fa-home"></i>
  </a>*/}
            </div>
            <div class="project-details">
              <h4>Weather application</h4>
              <p>
                A weather application where you can look up the weather
                conditions in capital cities around the world. The technologies
                used are: React, Node with Express.js, TailwindCSS and MongoDB
              </p>
              <div class="project-footer">
                <span>
                  <i class="fab fa-github"></i>
                </span>
                <a href="https://weather-app-juqp.onrender.com/">visit site</a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
};

export default projects;
