import {
  FaTooth,
  FaSmile,
  FaMagic
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./index.css";

const treatments = [
  {
    icon: <FaTooth />,
    title: "Dental Implant",
    desc: "Permanent, natural-looking tooth replacements designed for lifelong function and comfort.",
  },
  {
    icon: <FaSmile />,
    title: "Aligners",
    desc: "Discreet, custom-fit aligners that gently straighten your smile without metal braces.",
  },
  {
    icon: <FaMagic />,
    title: "Laminates",
    desc: "Gentle, precise pulp therapy that preserves your child's natural teeth and oral health.",
  },
];

const Treatments = () => {
   const navigate = useNavigate();

   const handleBookAppointment = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };
 

  return (
    <section className="treatments">
      <div className="container">

        <span className="treatments-subtitle">
          FEATURED TREATMENTS
        </span>

        <h2 className="treatments-title">
          Specialised care,
          <span> crafted around you.</span>
        </h2>

        <p className="treatments-desc">
          Every treatment plan is personalised — using modern techniques,
          premium materials, and an unhurried, patient-first approach.
        </p>

        <div className="treatments-grid">
          {treatments.map((item) => (
            <div className="treatment-card" key={item.title}>
              <div className="icon-box">
                {item.icon}
              </div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
              <div className="btn-con">
                <button className="treatment-book-btn" onClick={handleBookAppointment}>
                  BOOK NOW
                </button>
                <button className="learn-btn">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="view-services">
          <button
            className="services-btn"
            onClick={() => navigate("/services")}
          >
            View All Services →
          </button>
        </div>

      </div>
    </section>
  );
};

export default Treatments;