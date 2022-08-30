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
      <p data-aos="fade-left" data-aos-delay="450">
        I work with
      </p>
      <div data-aos="fade-up" data-aos-delay="500">
        <TypeAnimation
          sequence={[
            "",
            2000,
            "JavaScript,",
            1000,
            "JavaScript, MERN Stack,",
            1000,
            "JavaScript, MERN Stack, and Solidity",
            1000,
            "JavaScript, MERN Stack,",
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
        <button className="click">
          <span>Contact me</span>
        </button>
      </a>
    </div>
  );
}
