import "./index.css";
import {
  FaWhatsapp,
  FaPhoneAlt,
  FaAward,
  FaMagic,
} from "react-icons/fa";

const Hero = () => {
  // Contact Details
  const whatsappNumber = "919542345000"; // Country code without +
  const phoneNumber = "+919542345000";

  // Pre-filled WhatsApp message
  const whatsappMessage = encodeURIComponent(
    "Hi Vajra Dental, I would like to book an appointment."
  );

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
            <a
              href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
              className="primary-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
              <span>Book on WhatsApp</span>
            </a>

            <a
              href={`tel:${phoneNumber}`}
              className="secondary-btn"
            >
              <FaPhoneAlt />
              <span>Call Now</span>
            </a>
          </div>

          <div className="hero-features">
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