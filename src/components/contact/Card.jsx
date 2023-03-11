import React from "react";
import services from "../../imgs/contact/services.jpeg";
import logo from "../../imgs/logo.png";
export const Card = () => {
  return (
    <div className="container-card-services">
      <img src={services} alt="" className="image-services" />

      <div className="services">
        <h1 className="title-services">Servicios</h1>
        <h3 className="subtitle-services">consultas</h3>
        <ul className="ul-services">
          <li className="li-services">• autorefractometria</li>
          <li className="li-services">• Refracción con Foroptero Digital</li>
          <li className="li-services">• Test de agudeza visual</li>
          <li className="li-services">• Examen ortoptico</li>
          <li className="li-services">• Biomicroscopía</li>
          <li className="li-services">• Tonometría</li>
          <li className="li-services">• Gonioscopía</li>
          <li className="li-services">• Fondo de ojo</li>
          <li className="li-services">• Cicloplejía en pediatría</li>
          <li className="li-services">• Visión crómaticas</li>
        </ul>
      </div>
    </div>
  );
};
