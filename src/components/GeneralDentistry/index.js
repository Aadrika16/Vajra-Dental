import { MessageCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./index.css";

const GeneralDentistry = () => {
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/", {
      state: {
        scrollToContact: true,
      },
    });
  };
  return (
    <>
      <Navbar />
      <div className="services-page">
        {/* Hero Section */}
        <section className="services-hero">
          <div className="hero-bg hero-bg-1"></div>
          <div className="hero-bg hero-bg-2"></div>
          <div className="services-hero-content">
            <span className="section-tag">OUR SERVICES</span>
            <h1>Complete Dental Care For<br /><span>Every Smile.</span></h1>
            <p>From routine checkups to advanced smile transformations, Vajra Dental offers complete dental treatments under one roof.</p>
          </div>
        </section>

        {/* Consultation Section */}
        <section className="category-section">
          <div className="category-container">
            <h2>Consultation & Diagnostics</h2>
            <div className="category-grid">
              {[
                {title: "Dental Implant", description: "Permanent, natural-looking tooth replacements designed for lifelong function and comfort."},
                {title: "Aligners", description: "Discreet, custom-fit aligners that gently straighten your smile without metal braces."},
                {title: "Laminates", description: "Gentle, precise pulp therapy that preserves your child's natural teeth and oral health."},
                {title: "Consultation", description: "Comprehensive dental check-up and personalised treatment planning."},
                {title: "X-Ray", description: "Digital dental imaging for accurate diagnosis."}
              ].map((item, index) => (
                <div key={index} className="category-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="book-now" onClick={handleBookAppointment}>
                    <MessageCircle size={18} /> Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Root Canal Section */}
        <section className="category-section rct-bg">
          <div className="category-container">
            <h2>Root Canal Treatment</h2>
            <div className="category-grid">
              {[{title: "RCT — Anterior Teeth", description: "Precise root canal therapy for front teeth to relieve pain and save the tooth."}, {title: "RCT — Posterior Teeth", description: "Specialised root canal treatment for molars and premolars."}, {title: "Re-RCT", description: "Retreatment of previously root-canaled teeth to resolve persistent issues."}, {title: "Pulpectomy", description: "Gentle pulp therapy to preserve milk teeth and protect oral development."}].map((item, index) => (
                <div key={index} className="category-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="book-now" onClick={handleBookAppointment}>
                    <MessageCircle size={18} /> Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fillings & Restorations Section */}
        <section className="category-section fillings-bg">
          <div className="category-container">
            <h2>Fillings & Restorations</h2>
            <div className="category-grid">
              {[{title: "GIC Filling", description: "Glass ionomer fillings that bond chemically and release fluoride."}, {title: "Composite Filling", description: "Tooth-coloured restorations that blend naturally with your smile."}, {title: "Cementation of Dislodged Crown", description: "Re-fixing a loosened crown securely to restore function."}].map((item, index) => (
                <div key={index} className="category-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="book-now" onClick={handleBookAppointment}>
                    <MessageCircle size={18} /> Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Crowns & Prosthetics Section */}
        <section className="category-section">
          <div className="category-container">
            <h2>Crowns & Prosthetics</h2>
            <div className="category-grid">
              {[
                {title: "Veneers", description: "Premium metal-free crowns with lifelike translucency and lasting strength." },
                { title: "Onlays", description: "Custom-crafted full dentures restoring function, comfort and confidence." },
                { title: "Inlays", description: "Permanent, natural-looking tooth replacement that preserves bone health." },
                { title: "Metal Ceramic Crown", description: "Durable, aesthetic crowns offering strength and a natural appearance." },
                { title: "Zirconia Crown", description: "Premium metal-free crowns with lifelike translucency and lasting strength." },
                { title: "Complete Denture", description: "Custom-crafted full dentures restoring function, comfort and confidence." },
                { title: "Dental Implant", description: "Permanent, natural-looking tooth replacement that preserves bone health." }
              ].map((item, index) => (
                <div key={index} className="category-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="book-now" onClick={handleBookAppointment}>
                    <MessageCircle size={18} /> Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Orthodontics & Aligners Section */}
        <section className="category-section">
          <div className="category-container">
            <h2>Orthodontics & Aligners</h2>
            <div className="category-grid">
              {[
                { title: "Braces — Straight Wire Metal", description: "Classic metal braces for predictable, reliable alignment." },
                { title: "Braces — Straight Wire Ceramic", description: "Discreet tooth-coloured ceramic brackets for subtle treatment." },
                { title: "Braces — Self-Ligating Metal", description: "Faster, low-friction metal braces with fewer adjustments needed." },
                { title: "Braces — Self-Ligating Ceramic", description: "Modern self-ligating system with the aesthetics of ceramic." },
                { title: "Aligners", description: "Clear, removable aligners that straighten teeth invisibly." }
              ].map((item, index) => (
                <div key={index} className="category-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="book-now" onClick={handleBookAppointment}>
                    <MessageCircle size={18} /> Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Surgical Treatments Section */}
        <section className="category-section">
          <div className="category-container">
            <h2>Surgical Treatments</h2>
            <div className="category-grid">
              {[
                { title: "Extraction", description: "Atraumatic tooth removal with comfort-focused technique." },
                { title: "Impaction", description: "Surgical removal of impacted wisdom teeth by experienced hands." },
                { title: "Flap Surgery", description: "Periodontal flap procedures to treat advanced gum disease." },
                { title: "Minor Surgical Procedures", description: "In-clinic oral surgical procedures performed safely." }
              ].map((item, index) => (
                <div key={index} className="category-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="book-now" onClick={handleBookAppointment}>
                    <MessageCircle size={18} /> Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Preventive Care Section */}
        <section className="category-section">
          <div className="category-container">
            <h2>Preventive Care</h2>
            <div className="category-grid">
              {[
                { title: "Scaling & Polishing", description: "Professional cleaning to remove tartar and brighten your smile." }
              ].map((item, index) => (
                <div key={index} className="category-card">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <button className="book-now" onClick={handleBookAppointment}>
                    <MessageCircle size={18} /> Book Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default GeneralDentistry;