import { MessageCircle, CheckCircle } from "lucide-react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "./index.css";

const treatments = [
  {
    title: "Pulpotomy",
    description:
      "Removes infected pulp from the crown of a child's tooth while preserving healthy roots and maintaining proper tooth function."
  },
  {
    title: "Pulpectomy",
    description:
      "Removes all infected pulp from a child's tooth and fills the canals to save the tooth and prevent further infection."
  },
  {
    title: "Extractions",
    description:
      "Safe and gentle removal of damaged, decayed, or problematic teeth when necessary."
  },
  {
    title: "Fillings",
    description:
      "Restores cavities and damaged teeth with durable, natural-looking filling materials."
  },
  {
    title: "Space Maintainers",
    description:
      "Custom appliances that preserve space for permanent teeth after early loss of baby teeth."
  },
  {
    title: "Habit-Breaking Appliances",
    description:
      "Helps children stop habits like thumb sucking and tongue thrusting that affect dental development."
  },
  {
    title: "Metal Crowns",
    description:
      "Strong and durable crowns that protect and restore severely damaged baby teeth."
  },
  {
    title: "Zirconia Crowns",
    description:
      "Premium tooth-colored crowns offering excellent aesthetics and durability."
  }
];

const PediatricDentistry = () => {
  return (
    <>
      <Navbar />

      <div className="pediatric-page">
        <section className="kids-hero">
          <div className="kids-hero-content">
            <span className="section-tag">
              PEDIATRIC DENTISTRY
            </span>

            <h1>
              Gentle Dental Care
              <br />
              <span>For Growing Smiles</span>
            </h1>

            <p>
              Our pediatric dental treatments are designed to
              keep children comfortable while ensuring healthy
              teeth, proper oral development, and confident
              smiles.
            </p>
          </div>
        </section>

        <section className="kids-intro">
          <div className="container">
            <div className="intro-card">
              <h2>Why Pediatric Dentistry Matters</h2>

              <p>
                Children's dental needs are different from
                adults. Early dental care helps prevent
                cavities, guides proper jaw development,
                and creates positive dental experiences
                that last a lifetime.
              </p>

              <div className="benefits-grid">
                <div>
                  <CheckCircle size={20} />
                  Early cavity prevention
                </div>

                <div>
                  <CheckCircle size={20} />
                  Healthy oral development
                </div>

                <div>
                  <CheckCircle size={20} />
                  Child-friendly care
                </div>

                <div>
                  <CheckCircle size={20} />
                  Long-term dental health
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="treatments-section">
          <div className="container">
            <h2>Kids Dentistry Treatments</h2>

            <div className="treatments-grid">
              {treatments.map((item, index) => (
                <div className="treatment-card" key={index}>
                  <h3>{item.title}</h3>

                  <p>{item.description}</p>

                  <button className="book-btn-service">
                    <MessageCircle size={18} />
                    Book Appointment
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

export default PediatricDentistry;