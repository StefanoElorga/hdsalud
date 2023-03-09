import React, { useEffect, useState } from "react";
import "./specialties.css";
import oneSpeciality from "../../imgs/specialties/1 speciality.jpeg";
import twoSpeciality from "../../imgs/specialties/2 speciality.jpeg";
import threeSpeciality from "../../imgs/specialties/3 speciality.jpeg";
import fourSpeciality from "../../imgs/specialties/4 speciality.jpeg";
import fiveSpeciality from "../../imgs/specialties/5 speciality.jpeg";
import sixSpeciality from "../../imgs/specialties/6 speciality.jpeg";

export const Specialties = () => {
  const [isSeparatorActive, setIsSeparatorActive] = useState(false);
  const specialties = [
    { img: oneSpeciality, name: "especialidad" },
    { img: twoSpeciality, name: "especialidad" },
    { img: threeSpeciality, name: "especialidad" },
    { img: fourSpeciality, name: "especialidad" },
    { img: fiveSpeciality, name: "especialidad" },
    { img: sixSpeciality, name: "especialidad" },
  ];

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    const separator = document.querySelector(".separator");
    const separatorPosition = separator.getBoundingClientRect();
    const screenHeight = window.innerHeight;
    if (separatorPosition.top < screenHeight && separatorPosition.bottom >= 0) {
      setIsSeparatorActive(true);
    } else {
      setIsSeparatorActive(false);
    }
  };
  return (
    <div className="container-specialties">
      <h1 className="title">NUESTRAS ESPECIALIDADES...</h1>
      <div
        className={isSeparatorActive ? "separator active" : "separator"}
      ></div>

      <div className="container-cards">
        {specialties.map((specialty, i) => {
          return (
            <div className="card" key={i}>
              <h3 className="speciality-name">{specialty.name}</h3>
              <img src={specialty.img} alt="" className="speciality-image" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
