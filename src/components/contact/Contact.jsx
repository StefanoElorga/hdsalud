import React, { useState, useEffect } from "react";
import "./contact.css";
import { Card } from "./Card";
import { SecondCard } from "./SecondCard";

export const Contact = () => {
  const [isSeparatorActive, setIsSeparatorActive] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const separator = document.querySelector(".separator-two");
    const separatorPosition = separator.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    if (separatorPosition.top < screenHeight && separatorPosition.bottom >= 0) {
      setIsSeparatorActive(true);
    } else {
      setIsSeparatorActive(false);
    }
  };
  return (
    <div className="container-contact">
      <h1 className="title-contact">CONTACTO Y SERVICIOS</h1>

      <div
        className={isSeparatorActive ? "separator-two active" : "separator-two"}
      ></div>

      <div className="container-cards-service-contact">
        <Card />
        <SecondCard />
      </div>
    </div>
  );
};
