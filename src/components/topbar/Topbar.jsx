import React, { useState } from "react";
import "./topbar.css";
import ourLogo from "../../imgs/logo.png";
import { Facebook } from "../../imgs/svgs/Facebook";
import { Instagram } from "../../imgs/svgs/Instagram";
import { Phone } from "../../imgs/svgs/Phone";

export const Topbar = () => {
  return (
    <div className="topbar-container">
      {/* redes y numero */}
      <div className="webs-number-container">
        <div className="webs">
          <Facebook />
          <Instagram />
        </div>
        <a className="number-container">
          <Phone /> <p className="number">3795-109054</p>
        </a>
      </div>
      {/* logo y nombre */}
      <div className="logo-container">
        <img src={ourLogo} alt="" width={50} height={50} className="logo" />
        <h1 className="name">HD Salud</h1>
      </div>

      {/* Navegación */}
      <ul className="navigation-container">
        <li className="my-li">
          <a
            href="#specialties-section"
            className={`navigation-buttons bottom-line `}
          >
            Especialidades
          </a>
        </li>

        <li className="my-li">
          <a
            href="#contact-section"
            className={`navigation-buttons bottom-line `}
          >
            Contacto
          </a>
        </li>
      </ul>
    </div>
  );
};
