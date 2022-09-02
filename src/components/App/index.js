import BlurContainer from "../BlurContainer/blurContainer";
import CoverImage from "../CoverImage";
import Navbar from "../Navbar";

import "./index.scss";
import bgimg from "../../assets/background.jpeg";
import Intro from "../Intro";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Projects from "../Projects";
import Skills from "../Skills";

function App() {
  // For reveal animations
  useEffect(() => {
    Aos.init({
      once: true,
      duration: 1400,
    });
  }, []);

  return (
    <div className="app">
      <div className="home-bg">
        <CoverImage src={bgimg} />
      </div>
      <BlurContainer>
        <Intro />
        <Skills />
        <Projects />
      </BlurContainer>
    </div>
  );
}

export default App;
