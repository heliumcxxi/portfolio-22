import { useState } from "react";
import "./index.scss";
import { projectData } from "../../data/projects";
import Project from "../Project";

export default function Projects() {
  return (
    <div className="section-container">
      <div
        className="section-title"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        My Projects
      </div>

      <div className="projects-container">
        {projectData.map((project, idx) => {
          const isLeft = idx % 2 === 0;

          return <Project key={idx} project={project} isLeft={isLeft} />;
        })}
      </div>

      <button onClick={() => window.open("https://github.com/heliumcxxi")}>
        Check Out More
      </button>
    </div>
  );
}
