import "./index.css";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaAward,
  FaMagic
} from "react-icons/fa";


const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">

        <div className="hero-content">

          <span className="hero-subtitle">
            Premium Dental Care · Hyderabad
          </span>

          <h1 className="hero-title">
            Advanced Dental
            <br />
            Care for <span>Confident,</span>
            <br />
            <span>Healthy Smiles.</span>
          </h1>

          <p>
            Experience expert-led dental treatments at Vajra Dental,
            Puppalaguda — from implants and aligners to root canal care,
            crowns, and complete smile restoration.
          </p>

          <div className="hero-buttons">
            <button className="primary-btn">
              <FaWhatsapp />
              Book on WhatsApp
            </button>

            <button className="secondary-btn">
              <FaPhoneAlt />
              Call Now
            </button>
          </div>

          <div className="hero-features">
             {/*

            <div className="feature-pill">
             
              <FaRegCalendarAlt className="feature-icon" />
              <p>Founded 2021</p>
            </div>
            */}

            <div className="feature-pill">
              <FaAward className="feature-icon" />
              <p>12+ Yrs Doctor Experience</p>
            </div>

            <div className="feature-pill">
              <FaMagic className="feature-icon" />
              <p>Advanced Implants & Smile Care</p>
            </div>

          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1782369237/ChatGPT_Image_Jun_25_2026_12_03_10_PM_r7lvvc.png"
            alt="Vajra Dental"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;