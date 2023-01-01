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
          Hi, I'm Ettiene and I am a web developer. I know HTML/CSS and
          javascript. The technologies I have used are:
          <ul>
            <li>HTML</li>
            <li>CSS - vanilla, SASS, MUI and Tailwind.</li>
            <li>Javascript - React, Node with Express.js, and Next.js.</li>
            <li>Databases: MongoDB, ElephantSQL, and Supabase.</li>
          </ul>
        </p>
      </div>
    </section>
  );
};

export default about;
