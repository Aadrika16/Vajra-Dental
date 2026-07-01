import { useState } from "react";
import "./index.css";

const AppointmentForm = () => {
  const [existingPatient, setExistingPatient] = useState("No");
  const [emergency, setEmergency] = useState("No");
  const [reportFile, setReportFile] = useState(null);

  return (
    <section className="appointment-section" id="contact">
      <div className="appointment-container">
        <div className="appointment-card">
          <h2>Request an appointment</h2>

          <p>
            Fill in your details — we'll continue the conversation on WhatsApp.
          </p>

          <form className="appointment-form">
            <div className="form-grid">
              <div className="form-group">
                <label>FULL NAME *</label>
                <input placeholder="Full Name" type="text" />
              </div>

              <div className="form-group">
                <label>MOBILE NUMBER *</label>
                <input type="tel" placeholder="Number" />
              </div>

              <div className="form-group">
                <label>EMAIL ADDRESS</label>
                <input type="email" placeholder="Email" />
              </div>

              <div className="form-group">
                <label>AGE</label>
                <input type="number" placeholder="Age" />
              </div>

              <div className="form-group">
                <label>GENDER</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select...
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="form-group">
                <label>PREFERRED DATE</label>
                <input type="date" />
              </div>

              <div className="form-group">
                <label>PREFERRED TIME SLOT</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select...
                  </option>
                  <option>10:00 AM - 12:00 PM</option>
                  <option>12:00 PM - 02:00 PM</option>
                  <option>05:00 PM - 06:30 PM</option>
                  <option>06:30 PM - 08:00 PM</option>
                </select>
              </div>

              <div className="form-group">
                <label>SERVICE REQUIRED</label>
                <select defaultValue="">
                  <option value="" disabled>
                    Select...
                  </option>
                  <option>Dental Consultation</option>
                  <option>Implants</option>
                  <option>Smile Design</option>
                  <option>Root Canal</option>
                  <option>Teeth Whitening</option>
                </select>
              </div>
            </div>

            <div className="form-group full">
              <label>BRIEF DENTAL CONCERN / MESSAGE</label>
              <textarea placeholder="Tell us briefly what brings you in..."></textarea>
            </div>

            <div className="toggle-row">
              <div className="toggle-card">
                <span>Existing Patient?</span>

                <div className="toggle-options">
                  <button
                    type="button"
                    className={existingPatient === "No" ? "active" : ""}
                    onClick={() => setExistingPatient("No")}
                  >
                    No
                  </button>

                  <button
                    type="button"
                    className={existingPatient === "Yes" ? "active" : ""}
                    onClick={() => setExistingPatient("Yes")}
                  >
                    Yes
                  </button>
                </div>
              </div>

              <div className="toggle-card">
                <span>Emergency Appointment?</span>

                <div className="toggle-options">
                  <button
                    type="button"
                    className={emergency === "No" ? "active" : ""}
                    onClick={() => setEmergency("No")}
                  >
                    No
                  </button>

                  <button
                    type="button"
                    className={emergency === "Yes" ? "active" : ""}
                    onClick={() => setEmergency("Yes")}
                  >
                    Yes
                  </button>
                </div>
              </div>
            </div>

            {existingPatient === "Yes" && (
              <div className="existing-patient-form">
                <h3>Existing Patient Details</h3>

                <div className="form-grid">
                  <div className="form-group">
                    <label>PATIENT ID / FILE NUMBER</label>
                    <input type="text" placeholder="Enter patient ID" />
                  </div>

                  <div className="form-group">
                    <label>LAST VISIT DATE</label>
                    <input type="date" />
                  </div>

                  <div className="form-group">
                    <label>DOCTOR CONSULTED</label>
                    <input type="text" placeholder="Doctor name" />
                  </div>

                  <div className="form-group">
                    <label>PREVIOUS TREATMENT TAKEN</label>
                    <input
                      type="text"
                      placeholder="Root canal, braces, cleaning..."
                    />
                  </div>

                  <div className="form-group full">
                    <label>UPLOAD PREVIOUS REPORTS / X-RAYS (OPTIONAL)</label>

                    <div className="custom-file-upload">
                      <label htmlFor="reportUpload" className="upload-btn">
                        Choose File
                      </label>

                      <input
                        id="reportUpload"
                        type="file"
                        accept=".pdf,.jpg,.jpeg,.png"
                        onChange={(e) => setReportFile(e.target.files[0])}
                      />

                      <span className="file-name">
                        {reportFile ? reportFile.name : "No file chosen"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {emergency === "Yes" && (
              <div className="emergency-form">
                <h3>Emergency Details</h3>

                <div className="form-group full no-margin">
                  <label>NATURE OF EMERGENCY</label>
                  <input
                    type="text"
                    placeholder="Severe pain, swelling, bleeding..."
                  />
                </div>

                <div className="form-grid emergency-grid">
                  <div className="form-group">
                    <label>PAIN LEVEL (1–10)</label>
                    <input
                      type="number"
                      min="1"
                      max="10"
                      placeholder="Enter pain level"
                    />
                  </div>

                  <div className="form-group">
                    <label>SWELLING / BLEEDING?</label>
                    <select defaultValue="">
                      <option value="" disabled>
                        Select...
                      </option>
                      <option>No</option>
                      <option>Swelling</option>
                      <option>Bleeding</option>
                      <option>Both</option>
                    </select>
                  </div>
                </div>

                <div className="form-group full">
                  <label>PREFERRED IMMEDIATE CONTACT</label>
                  <select defaultValue="">
                    <option value="" disabled>
                      Select...
                    </option>
                    <option>WhatsApp</option>
                    <option>Phone Call</option>
                  </select>
                </div>
              </div>
            )}

            <button type="submit" className="appointment-submit">
              Book Appointment
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;