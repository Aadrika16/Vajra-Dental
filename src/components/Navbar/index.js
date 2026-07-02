import { ChevronDown, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./index.css";

const serviceItems = [
  { title: "Pediatric Dentistry", path: "/pediatric-dentistry" },
  { title: "General Dentistry", path: "/general-dentistry" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const closeMenu = () => {
    setMenuOpen(false);
    setServicesOpen(false);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src="https://res.cloudinary.com/doyaebals/image/upload/v1782369824/logo.jpg_r94i6x.jpg" alt="Vajra Dental" />
          </Link>
        </div>

        <ul className="nav-links">
          <li><Link to="/" className={isActive("/") ? "active-link" : ""}>Home</Link></li>
          <li><Link to="/about" className={isActive("/about") ? "active-link" : ""}>About Us</Link></li>
          <li className="service-dropdown" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
            <div className="service-wrapper">
              <span className="service-link">Services <ChevronDown size={16} className={servicesOpen ? "rotate" : ""} /></span>
            </div>
            {servicesOpen && (
              <div className="dropdown-menu">
                {serviceItems.map((item) => (
                  <Link key={item.title} to={item.path} onClick={() => setServicesOpen(false)}>{item.title}</Link>
                ))}
              </div>
            )}
          </li>
          <li><Link to="/articles" className={isActive("/articles") ? "active-link" : ""}>Articles</Link></li>
        </ul>

        <div className="desktop-actions">
          <a href="/#contact" className="book-btn"><MessageCircle size={18} /> <span>Book Appointment</span></a>
        </div>
        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "✕" : "☰"}</button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" onClick={closeMenu}>Home</Link>
          <Link to="/about" onClick={closeMenu}>About</Link>
          <div className="mobile-service-group">
            <span className="mobile-service-title">Services</span>
            <div className="mobile-service-links">
              {serviceItems.map((item) => (
                <Link key={item.title} to={item.path} onClick={closeMenu}>{item.title}</Link>
              ))}
            </div>
          </div>
          <Link to="/articles" onClick={closeMenu}>Articles</Link>
          <a href="/#contact" className="book-btn" onClick={closeMenu}><MessageCircle size={18} /> <span>Book Appointment</span></a>
        </div>
      )}
    </header>
  );
};

export default Navbar;