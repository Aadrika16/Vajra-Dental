import { FaShieldAlt } from "react-icons/fa";
import "./index.css";

const Experience = () => {
  const items = [
    {
      title: "Hygiene-first protocols",
      desc: "Sterilisation, single-use kits and clinic-grade infection control.",
    },
    {
      title: "Honest treatment plans",
      desc: "No upsells. Just transparent options and timelines.",
    },
    {
      title: "Comfort throughout",
      desc: "Pain-managed procedures and a calming premium environment.",
    },
    {
      title: "Long-term smile partnership",
      desc: "From your first visit to lifelong maintenance.",
    },
  ];

  return (
    <section className="experience-section">
      <div className="experience-container">

        <div className="experience-content">

          <p className="experience-tag">
            THE VAJRA EXPERIENCE
          </p>

          <h2 className="experience-title">
            Modern dentistry, in a <span>calm,<br />considered space.</span>
          </h2>

          <div className="experience-list">

            {items.map((item) => (
              <div className="experience-item" key={item.title}>

                <div className="icon-box">
                  <FaShieldAlt />
                </div>

                <div className="experience-text">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>

              </div>
            ))}

          </div>

        </div>

        <div className="experience-image">

          <img
            src="https://res.cloudinary.com/doyaebals/image/upload/v1782371109/ChatGPT_Image_Jun_25_2026_12_34_38_PM_foeiqa.png"
            alt="Clinic"
          />

        </div>

      </div>
    </section>
  );
};

export default Experience;