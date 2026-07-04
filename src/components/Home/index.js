import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import Navbar from "../Navbar";
import Hero from "../Hero";
import Features from "../Features";
import Treatments from "../Treatments";
import Doctor from "../Doctor";
import Experience from "../Experience";
import CTA from "../CTA";
import Footer from "../Footer";
import WhatsappButton from "../WhatsappButton";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state?.scrollToContact || window.location.hash === "#contact") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");

        if (contactSection) {
          contactSection.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }, 300);
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Treatments />
      <Doctor />
      <Experience />
      <CTA />
      <Footer />
      <WhatsappButton />
    </>
  );
};

export default Home;