import "./index.scss";
import { skillsList } from "../../data/skills";

export default function Skills() {
  return (
    <div className="container">
      <div className="content">
        <h1 data-aos="fade-up" data-aos-delay="200">
          Skills
        </h1>
      </div>
      <div className="icon-container">
        {skillsList.map((s, idx) => {
          return (
            <div className="icon-block" key={s.title}>
              <img key={s.title} className="icon" src={s.icon} alt={s.title} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
