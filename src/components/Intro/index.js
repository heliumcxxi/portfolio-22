import "./index.scss";
import { TypeAnimation } from "react-type-animation";
import iconImg from "../../assets/logo.png";

export default function Intro() {
  return (
    <div className="content">
      <h1 data-aos="fade-up" data-aos-delay="200">
        Hi, I'm Bruce
      </h1>
      <h2 data-aos="fade-right" data-aos-delay="350">
        Web Developer
      </h2>
      <p className="desc" data-aos="fade-left" data-aos-delay="450">
        I work with
      </p>
      <div className="desc" data-aos="fade-up" data-aos-delay="500">
        <TypeAnimation
          sequence={[
            "",
            2000,
            "JavaScript,",
            1000,
            "JavaScript, React,",
            1000,
            "JavaScript, React, and WordPress",
            1000,
            "JavaScript, React,",
            1000,
            "JavaScript,",
            1000,
            "",
            500,
          ]}
          //  Continuing previous Text
          style={{ fontSize: "1rem" }}
          wrapper="p"
          repeat={Infinity} // Repeat this Animation Sequence infinitely
        />
      </div>

      <img className="image" src={iconImg} alt="" />
      <br />
      <a href="" target="_blank">
        <button
          className="contact-btn"
          onClick={() => (window.location = "mailto:bcclassic13@gmail.com")}
        >
          <span>Contact Me</span>
        </button>
      </a>
    </div>
  );
}
