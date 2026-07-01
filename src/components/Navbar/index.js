import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1782369824/logo.jpg_r94i6x.jpg"
            alt="Vajra Dental"
          />
        </div>

        <ul className="nav-links">
          <li>
            <Link to="/" className={isActive("/") ? "active-link" : ""}>
              Home
            </Link>
          </li>

          <li>
            <Link
              to="/about"
              className={isActive("/about") ? "active-link" : ""}
            >
              About Us
            </Link>
          </li>

          <li>
            <Link
              to="/services"
              className={isActive("/services") ? "active-link" : ""}
            >
              Services
            </Link>
          </li>

          <li>
            <Link
              to="/articles"
              className={isActive("/articles") ? "active-link" : ""}
            >
              Articles
            </Link>
          </li>
        </ul>

        <div className="desktop-actions">
          <a  href="#contact" className="book-btn">
            💬 <span>Book Appointment</span>
          </a>
        </div>

        <button
          className="menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link
            to="/"
            className={isActive("/") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </Link>

          <Link
            to="/about"
            className={isActive("/about") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/services"
            className={isActive("/services") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Services
          </Link>

          <Link
            to="/articles"
            className={isActive("/articles") ? "active-link" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Articles
          </Link>

          <div className="mobile-buttons">
            <a href="tel:+919542345000" className="mobile-call-btn">
              Call Now
            </a>

            <a  href="#contact" className="mobile-book-btn">
              Book Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;