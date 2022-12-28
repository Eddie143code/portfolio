import React from "react";
import "./css/about.css";

const about = () => {
  return (
    <section className="section single-page">
      <div className="section-title">
        <h1>about me</h1>
        <div className="underline"></div>
      </div>

      <div className="section-center page-info">
        <p>
          Hi, I'm Ettiene and I am a web developer. I mainly work with HTML, CSS
          and JavaScript and the framework I work in is react.
        </p>
      </div>
    </section>
  );
};

export default about;
