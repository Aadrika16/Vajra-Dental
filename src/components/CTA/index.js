import AppointmentForm from "../AppointmentForm";
import "./index.css";

const CTA = () => {
  return (
    <section className="cta-section">

      <div className="container">

        <div className="cta-box">

          <h2>
            Ready For A Smile You'll Love?
          </h2>

          <p>
            Book a consultation and discover
            the right plan for your dental health.
          </p>

          <div className="cta-buttons">

            <a href="/">
              WhatsApp Booking
            </a>

            <a href="/">
              Call Clinic
            </a>
          </div>
          <div className="cta-form" id="contact">
            <AppointmentForm />
          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;