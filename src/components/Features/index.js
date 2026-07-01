import {
  FaAward,
  FaMagic,
  FaShieldAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import "./index.css";

const Features = () => {
  return (
    <section className="features">
      <div className="feature-container">
      {/*
        <div className="feature-item">
          <FaRegCalendarAlt />
          <span>Founded 2021</span>
        </div>
*/}
        <div className="feature-item">
          <FaAward />
          <span>12+ Yrs Doctor Experience</span>
        </div>

        <div className="feature-item">
          <FaMagic />
          <span>Advanced Implants & Smile Care</span>
        </div>

        <div className="feature-item">
          <FaShieldAlt />
          <span>Sunday Emergency Care</span>
        </div>

        <div className="feature-item">
          <FaMapMarkerAlt />
          <span>Puppalaguda, Manikonda</span>
        </div>

      </div>
    </section>
  );
};

export default Features;