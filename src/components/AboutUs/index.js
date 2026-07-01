import {
  HeartHandshake,
  ShieldCheck,
  MessageCircleMore,
  Stethoscope,
  ClipboardCheck,
  Gem,
} from "lucide-react";
import Footer from "../Footer";
import Navbar from "../Navbar";
import "./index.css";


const values = [
  {
    icon: <HeartHandshake size={28} strokeWidth={1.8} />,
    title: "Patient Comfort",
    description:
      "Calming environment, gentle technique and pain-managed treatment at every step.",
  },
  {
    icon: <ShieldCheck size={28} strokeWidth={1.8} />,
    title: "Strict Hygiene",
    description:
      "Sterilised instruments, disposable kits and clinic-grade infection control.",
  },
  {
    icon: <MessageCircleMore size={28} strokeWidth={1.8} />,
    title: "Clear Communication",
    description:
      "Plain-language explanations, transparent pricing and unhurried consultations.",
  },
  {
    icon: <Stethoscope size={28} strokeWidth={1.8} />,
    title: "Experienced Doctors",
    description:
      "Specialist-led care led by an MDS prosthodontist with years of experience.",
  },
  {
    icon: <ClipboardCheck size={28} strokeWidth={1.8} />,
    title: "Personalised Plans",
    description:
      "Every smile is different — your treatment is shaped around your needs and goals.",
  },
  {
    icon: <Gem size={28} strokeWidth={1.8} />,
    title: "Premium Materials",
    description:
      "Trusted implant systems, zirconia crowns and modern aligner technology.",
  },
];

const AboutUs = () => {
  return (
    <>
        <Navbar />
        <div className="about-page">

            {/* Hero Section */}
            <section className="about-hero">
                <div className="hero-bg hero-bg-1"></div>
                <div className="hero-bg hero-bg-2"></div>

                <div className="hero-content">
                <span className="section-tag">
                    ABOUT THE CLINIC
                </span>

                <h1>
                    A Modern Dental Home For
                    <br />
                    <span>Every Smile In The Family.</span>
                </h1>

                <p>
                    Vajra Dental is a versatile dental facility
                    offering specialised care across root canal treatment,
                    orthodontics, implants, oral surgery, smile correction,
                    gum surgery, crowns, dentures and more.
                </p>
                </div>
            </section>

            {/* Story Section */}

            <section className="story-section">
                <div className="story-container">

                <div className="story-image">
                    <img
                    src="https://res.cloudinary.com/doyaebals/image/upload/v1782371109/ChatGPT_Image_Jun_25_2026_12_34_38_PM_foeiqa.png"
                    alt="Vajra Dental Clinic"
                    />
                </div>

                <div className="story-content">
                    <span className="section-tag">
                    OUR STORY
                    </span>

                    <h2>
                    Built On Trust,
                    Refined By
                    <span> Experience.</span>
                    </h2>

                    <p>
                    Vajra Dental was founded with a simple belief — 
                    that dental care should feel reassuring, modern, 
                    and tailored to the person in the chair. 
                    we've grown into a trusted neighbourhood practice 
                    for families across Puppalaguda and Manikonda.
                    </p>

                    <p>
                     Under the leadership of Dr. Abhishek Poddaturi, 
                     MDS Prosthodontist & Implantologist, we offer a complete spectrum 
                     of dental treatments — from routine cleanings and 
                     fillings to advanced implants, full-mouth rehabilitation, 
                     clear aligners and complex smile design.
                    </p>

                    <p>
                     Every visit at Vajra is shaped by three quiet priorities: 
                     clinical excellence, honest communication, 
                     and unhurried patient comfort.
                    </p>
                </div>

                </div>
            </section>

            {/* Values Section */}

            <section className="values-section">

                <div className="values-heading">
                <span className="section-tag">
                    OUR VALUES
                </span>

                <h2>
                    What Sets Vajra Dental Apart
                </h2>
                </div>

                <div className="values-grid">

                {values.map((item, index) => (
                    <div
                    key={index}
                    className="value-card"
                    >
                        <div className="value-icon">
                            {item.icon}
                        </div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                    </div>
                ))}

                </div>

            </section>
        </div>
        <Footer />
    </>
  );
};

export default AboutUs;