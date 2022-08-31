import "./index.scss";
import img1 from "../../assets/projects/project.png";

const Project = ({ project, isLeft }) => {
  return isLeft ? (
    <div className="project-container">
      <div className="text-container">
        <div
          className="project-title"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <h3>{project.title}</h3>
        </div>
        <div
          className="project-desc"
          data-aos="fade-right"
          data-aos-delay="350"
        >
          <p>{project.description}</p>
        </div>
        <div
          className="project-details"
          data-aos="fade-left"
          data-aos-delay="450"
        >
          <p>
            <span>Technologies.</span> {project.technologies}
          </p>
        </div>

        <div className="project-links" data-aos="fade-up" data-aos-delay="500">
          <a href={project.demo} target="_blank" rel="">
            Demo
          </a>
          <a href={project.github} target="_blank" rel="">
            Git repository
          </a>
        </div>
      </div>

      <div className="img-container" data-aos="fade-right" data-aos-delay="350">
        <img src={img1} alt="project" />
      </div>
    </div>
  ) : (
    <div className="project-container">
      <div
        className="img-container"
        data-aos="fade-left"
        data-aos-delay="500"
        // data-aos-offset="500"
      >
        <img src={img1} alt="project" />
      </div>
      <div className="text-container">
        <div
          className="project-title"
          data-aos="fade-down"
          data-aos-delay="500"
        >
          <h3>{project.title}</h3>
        </div>
        <div
          className="project-desc-r"
          data-aos="fade-right"
          data-aos-delay="350"
          // data-aos-offset="500"
        >
          <p>{project.description}</p>
        </div>
        <div
          className="project-details"
          data-aos="fade-left"
          data-aos-delay="450"
          // data-aos-offset="500"
        >
          <p>
            <span>Technologies.</span> {project.technologies}
          </p>
        </div>

        <div
          className="project-links"
          data-aos="fade-up"
          data-aos-delay="350"
          // data-aos-offset="500"
        >
          <a href={project.demo} target="_blank" rel="">
            Demo
          </a>
          <a href={project.github} target="_blank" rel="">
            Git repository
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
