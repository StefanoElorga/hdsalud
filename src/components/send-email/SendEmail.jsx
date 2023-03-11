import React, { useState, useEffect } from "react";
import "./sendEmail.css";
export const SendEmail = () => {
  const [isSeparatorActive, setIsSeparatorActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const separator = document.querySelector(".separator-three");
    const separatorPosition = separator.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    if (separatorPosition.top < screenHeight && separatorPosition.bottom >= 0) {
      setIsSeparatorActive(true);
    } else {
      setIsSeparatorActive(false);
    }
  };
  return (
    <div className="container-send-email">
      <h1 className="send-email-title">ENVIANOS UN EMAIL</h1>
      <div
        className={
          isSeparatorActive ? "separator-three active" : "separator-three"
        }
      ></div>

      <form action="" className="send-email-form">
        <input
          type="text"
          className="one send-email-input"
          placeholder="Nombre y Apellido"
        />
        <input
          type="text"
          className="two send-email-input"
          placeholder="Numero de celular"
        />
        <input
          type="text"
          className="three send-email-input"
          placeholder="Localidad"
        />
        <input
          type="text"
          className="four send-email-input"
          placeholder="Email"
        />
        <input
          type="text"
          className="five send-email-input"
          placeholder="día y horario"
        />
        <textarea
          type="text"
          className="six send-email-input textarea"
          placeholder="tu consulta"
        />

        <button className="send-email-button">ENVIAR MI MENSAJE</button>
      </form>
    </div>
  );
};
