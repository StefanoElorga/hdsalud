import React from "react";
import "./home.css";
import { Topbar } from "../topbar/Topbar";
import { Slider } from "../slider/Slider";
import { Specialties } from "../specialities/Specialties";
import { WhatsAppButton } from "../whatsapp-icon/WhatsappButton";
import { DoctorPresentation } from "../doctor-presentation/DoctorPresentation";
import { Contact } from "../contact/Contact";
import { SendEmail } from "../send-email/SendEmail";
import { Footer } from "../footer/Footer";

export const Home = () => {
  return (
    <div>
      <Topbar />
      <div id="slider-section">
        <Slider />
      </div>

      <div id="specialties-section">
        <Specialties />
      </div>

      <div id="doctor-presentation-section">
        <DoctorPresentation />
      </div>

      <div id="contact-section">
        <Contact />
      </div>

      <div id="send-email-section">
        <SendEmail />
      </div>

      <WhatsAppButton />
      <Footer />
    </div>
  );
};
