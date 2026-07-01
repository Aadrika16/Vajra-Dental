import "./index.css";

const Doctor = () => {
  return (
    <section className="doctor-section">
      <div className="container doctor-container">

        <div className="doctor-image-wrapper">

          <div className="doctor-image">
            <img
              src="https://res.cloudinary.com/doyaebals/image/upload/v1782370528/ChatGPT_Image_Jun_25_2026_12_25_13_PM_f9fupb.png"
              alt="Dr. Abhishek Poddaturi"
            />
          </div>

          <div className="doctor-badge">
            <span className="badge-role">
              LEAD DENTIST
            </span>

            <h4>
              Dr. Abhishek Poddaturi
            </h4>

            <p>
              MDS Prosthodontist & Implantologist
            </p>
          </div>

        </div>

        <div className="doctor-content">

          <span className="doctor-subtitle">
            MEET YOUR DENTIST
          </span>

          <h2>
            A Specialist Who Listens,
            <span> Then Restores Smiles.</span>
          </h2>

          <p>
            With over a decade of clinical experience,
            Dr. Abhishek Poddaturi blends Prosthodontist & Implantologist expertise
            with a warm, communicative chairside manner —
            guiding patients through implants, smile design,
            and complex restorations with clarity and care.
          </p>

          <div className="doctor-stats">

            <div className="stat-card">
              <h3>12+</h3>
              <p>Years</p>
            </div>

            <div className="stat-card">
              <h3>1000+</h3>
              <p>Smiles</p>
            </div>

            <div className="stat-card">
              <h3>100%</h3>
              <p>Personalised</p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Doctor;