import "./index.scss";

const Project = ({ project, isLeft }) => {
  return isLeft ? (
    <div className="project-container-L">
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
          <p>Description</p>
        </div>
        <div
          className="project-details"
          data-aos="fade-left"
          data-aos-delay="450"
        >
          <p>{project.description}</p>
        </div>
        <div
          className="project-desc"
          data-aos="fade-right"
          data-aos-delay="350"
        >
          <p>Technologies</p>
        </div>
        <div
          className="project-details"
          data-aos="fade-left"
          data-aos-delay="450"
        >
          <p>{project.technologies}</p>
        </div>

        <div className="project-links" data-aos="fade-up" data-aos-delay="500">
          <a href={project.demo} target={project.demo} rel="">
            Demo
          </a>

          <a href={project.github} target={project.github} rel="">
            Repo
          </a>
        </div>
      </div>

      <div className="img-container" data-aos="fade-right" data-aos-delay="350">
        <img src={project.image} alt="project" className="project-img" />
      </div>
    </div>
  ) : (
    <div className="project-container">
      <div className="img-container" data-aos="fade-left" data-aos-delay="500">
        <img src={project.image} alt="project" className="project-img" />
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
        >
          <p>Description</p>
        </div>
        <div
          className="project-details"
          data-aos="fade-left"
          data-aos-delay="450"
        >
          <p>{project.description}</p>
        </div>
        <div
          className="project-desc-r"
          data-aos="fade-right"
          data-aos-delay="350"
        >
          <p>Technologies</p>
        </div>
        <div
          className="project-details"
          data-aos="fade-left"
          data-aos-delay="450"
        >
          <p>{project.technologies}</p>
        </div>

        <div className="project-links" data-aos="fade-up" data-aos-delay="350">
          <a href={project.demo} target={project.demo} rel="">
            Demo
          </a>
          <a href={project.github} target={project.github} rel="">
            Repo
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
