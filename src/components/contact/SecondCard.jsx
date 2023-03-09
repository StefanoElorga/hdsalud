import React from "react";
import ubication from "../../imgs/contact/ubication.png";
import logo from "../../imgs/logo.png";

export const SecondCard = () => {
  return (
    <div className="container-card-contact">
      <img src={ubication} alt="" className="image-card-contact" />

      <div className="info-card-contact">
        <h1 className="title-card-contact">La Rioja 731</h1>
        <h3 className="subtitle-contact">Corrientes Capital</h3>
        <p className="items-contact">
          Horarios de atención de 08:30 a 17:30 de lunes a viernes.
        </p>
        <p className="items-contact">Teléfono: 3795-109054</p>
        <p className="items-contact">@hdsalud</p>
      </div>
      <img src={logo} alt="" className="logo-contact" />
    </div>
  );
};
