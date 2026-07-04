import { useState } from "react";
import "./index.css";

const AppointmentForm = () => {
  // We use a key to force the form to re-render/reset completely
  const [formKey, setFormKey] = useState(0);
  
  const [existingPatient, setExistingPatient] = useState("No");
  const [emergency, setEmergency] = useState("No");
  
  const [formData, setFormData] = useState({
    name: "", mobile: "", email: "", age: "", gender: "",
    date: "", time: "", service: "", message: "",
    patientId: "", lastVisit: "", doctor: "", treatment: "",
    nature: "", pain: "", swelling: "", contactMethod: ""
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phone = "919542345000";

    const whatsappMessage = `
    *New Appointment Request*
    -------------------------
    Name: ${formData.name}
    Mobile: ${formData.mobile}
    Email: ${formData.email}
    Age: ${formData.age}
    Gender: ${formData.gender}
    Date: ${formData.date}
    Time: ${formData.time}
    Service: ${formData.service}
    Message: ${formData.message}
    Existing Patient: ${existingPatient}
    ${existingPatient === "Yes" ? `Patient ID: ${formData.patientId}\nLast Visit: ${formData.lastVisit}\nDoctor: ${formData.doctor}\nTreatment: ${formData.treatment}` : ""}
    Emergency: ${emergency}
    ${emergency === "Yes" ? `Nature: ${formData.nature}\nPain Level: ${formData.pain}\nSwelling/Bleeding: ${formData.swelling}` : ""}
    `.trim();

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(whatsappMessage)}`;
    
    // Open in a new tab
    window.open(url, "_blank");

    // 1. Reset states
    setFormData({
      name: "", mobile: "", email: "", age: "", gender: "",
      date: "", time: "", service: "", message: "",
      patientId: "", lastVisit: "", doctor: "", treatment: "",
      nature: "", pain: "", swelling: "", contactMethod: ""
    });
    setExistingPatient("No");
    setEmergency("No");

    // 2. Increment key to force the form DOM to reset
    setFormKey(prev => prev + 1);
  };

  return (
    <section className="appointment-section" id="contact">
      <div className="appointment-container">
        <div className="appointment-card">
          <h2>Request an appointment</h2>
          {/* Applying the key here forces the form to re-mount on submission */}
          <form key={formKey} className="appointment-form" onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="form-group">
                <label>FULL NAME *</label>
                <input name="name" placeholder="Full Name" type="text" onChange={handleInputChange} required />
              </div>
              <div className="form-group">
                <label>MOBILE NUMBER *</label>
                <input name="mobile" type="tel" placeholder="Number" onChange={handleInputChange} required />
              </div>
              {/* ... keep your other inputs exactly as they were ... */}
              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input name="email" type="email" placeholder="Email" onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>AGE</label>
                <input name="age" type="number" placeholder="Age" onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>GENDER</label>
                <select name="gender" onChange={handleInputChange} defaultValue="">
                  <option value="" disabled>Select...</option>
                  <option>Male</option><option>Female</option><option>Other</option>
                </select>
              </div>
              <div className="form-group">
                <label>PREFERRED DATE</label>
                <input name="date" type="date" onChange={handleInputChange} />
              </div>
              <div className="form-group">
                <label>PREFERRED TIME SLOT</label>
                <select name="time" onChange={handleInputChange} defaultValue="">
                  <option value="" disabled>Select...</option>
                  <option>10:00 AM - 12:00 PM</option><option>12:00 PM - 02:00 PM</option>
                  <option>05:00 PM - 06:30 PM</option><option>06:30 PM - 08:00 PM</option>
                </select>
              </div>
              <div className="form-group">
                <label>SERVICE REQUIRED</label>
                <select name="service" onChange={handleInputChange} defaultValue="">
                  <option value="" disabled>Select...</option>
                  <option>Dental Consultation</option><option>Implants</option>
                  <option>Smile Design</option><option>Root Canal</option>
                  <option>Teeth Whitening</option>
                </select>
              </div>
            </div>

            <div className="form-group full">
              <label>BRIEF DENTAL CONCERN / MESSAGE</label>
              <textarea name="message" placeholder="Tell us briefly..." onChange={handleInputChange}></textarea>
            </div>

            <div className="toggle-row">
              <div className="toggle-card">
                <span>Existing Patient?</span>
                <div className="toggle-options">
                  <button type="button" className={existingPatient === "No" ? "active" : ""} onClick={() => setExistingPatient("No")}>No</button>
                  <button type="button" className={existingPatient === "Yes" ? "active" : ""} onClick={() => setExistingPatient("Yes")}>Yes</button>
                </div>
              </div>
              <div className="toggle-card">
                <span>Emergency Appointment?</span>
                <div className="toggle-options">
                  <button type="button" className={emergency === "No" ? "active" : ""} onClick={() => setEmergency("No")}>No</button>
                  <button type="button" className={emergency === "Yes" ? "active" : ""} onClick={() => setEmergency("Yes")}>Yes</button>
                </div>
              </div>
            </div>

            {existingPatient === "Yes" && (
              <div className="existing-patient-form">
                <h3>Existing Patient Details</h3>

                <div className="form-grid">
                  <div className="form-group">
                    <input
                      name="patientId"
                      type="text"
                      placeholder="Patient ID"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      name="lastVisit"
                      type="date"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      name="doctor"
                      type="text"
                      placeholder="Doctor name"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      name="treatment"
                      type="text"
                      placeholder="Previous treatment"
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            )}

            {emergency === "Yes" && (
              <div className="emergency-form">
                <h3>Emergency Details</h3>

                <div className="form-grid">
                  <div className="form-group">
                    <input
                      name="nature"
                      type="text"
                      placeholder="Nature of emergency"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      name="pain"
                      type="number"
                      placeholder="Pain level (1-10)"
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="form-group">
                    <select
                      name="swelling"
                      onChange={handleInputChange}
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Swelling/Bleeding?
                      </option>
                      <option>No</option>
                      <option>Swelling</option>
                      <option>Bleeding</option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            <button type="submit" className="appointment-submit">Book Appointment</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;