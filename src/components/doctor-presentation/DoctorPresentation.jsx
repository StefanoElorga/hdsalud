import React, { useRef, useEffect, useState } from "react";
import "./doctorPresentation.css";
import img from "../../imgs/logo.png";

export const DoctorPresentation = () => {
  const ref = useRef(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;
      if (element) {
        const { top, bottom } = element.getBoundingClientRect();
        if (top >= 0 && bottom <= window.innerHeight) {
          setIsActive(true);
        } else {
          setIsActive(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container-doctorpresentation">
      <div className="container-image">
        <img
          src={img}
          className={`image ${isActive ? "active" : ""}`}
          ref={ref}
        />
      </div>
      <div className="doctor-description-container">
        <h1 className="doctor-name">Dr Gonzalo Martos</h1>
        <p className="doctor-description">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
    </div>
  );
};
