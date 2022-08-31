import { useState } from "react";
import "./index.scss";
import projects from "../../data/projects.json";
import Project from "../Project";

export default function Projects() {
  const projectList = projects.projectData;

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
        {projectList.map((project, idx) => {
          const isLeft = idx % 2 === 0;

          return <Project key={idx} project={project} isLeft={isLeft} />;
        })}
      </div>

      <button>Check Out More</button>
    </div>
  );
}
