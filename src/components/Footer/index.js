import "./index.css";
import {
  FaInstagram,
  FaMapMarkerAlt,
  FaClock,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-grid">

          {/* Column 1 */}
          <div className="footer-brand">
            <img
              src="https://res.cloudinary.com/doyaebals/image/upload/v1782369824/logo.jpg_r94i6x.jpg"
              alt="Vajra Dental"
              className="footer-logo"
            />

            <p>
              Premium dental care in Puppalaguda, Manikonda —
              implants, aligners, root canals and complete smile restoration.
            </p>

            <a href="/" className="instagram-link">
              <FaInstagram />
              @vajradentalclinic
            </a>
          </div>

          {/* Column 2 */}
          <div className="footer-column">
            <h3>Visit</h3>

            <p className="footer-icon-text">
              <FaMapMarkerAlt />
              <span>
                1st Floor, Vajra Dental, DNS Infra Hub
                <br />
                Rajendranagar Mandal, above Burger King
                <br />
                Alkapur Township, Puppalguda
                <br />
                Hyderabad, Telangana 500089
              </span>
            </p>

            <a href="/" className="direction-link">
              Get directions →
            </a>
          </div>

          {/* Column 3 */}
          <div className="footer-column">
            <h3>Hours</h3>

            <p className="footer-icon-text">
              <FaClock />
              <span>
                Mon – Sat · 10:00 AM – 2:00 PM
                <br />
                & 5:00 PM – 8:00 PM
              </span>
            </p>

            <p className="footer-icon-text">
              <FaClock />
              <span>
                Sunday · Emergency appointments only
              </span>
            </p>

            <p className="footer-icon-text">
              <FaPhoneAlt />
              <span>+91 95423 45000</span>
            </p>

            <p className="footer-icon-text">
              <FaEnvelope />
              <span>care@vajradental.in</span>
            </p>
          </div>

          {/* Column 4 */}
          <div className="footer-column">
            <h3>Explore</h3>

            <ul className="footer-links">
              <li>All Services</li>
              <li>Dental Implants</li>
              <li>Aligners</li>
              <li>Root Canal</li>
              <li>Our Doctors</li>
              <li>Book Appointment</li>
            </ul>
{/*
            <button className="whatsapp-btn">
              <FaWhatsapp />
              WhatsApp Booking
            </button>
            */}
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Vajra Dental. All rights reserved.</p>

          <p>
            Founded 2021 · Puppalaguda, Manikonda · Hyderabad
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;