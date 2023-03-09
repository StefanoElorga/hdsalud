import React, { useState } from "react";
import "./slider.css";
import image1 from "../../imgs/silder-images/1-slide.jpg";
import corrientes from "../../imgs/silder-images/corrientes.jpg";

const slides = [
  { image: corrientes, text: "ENCONTRANOS EN CORRIENTES", button: "CONTACTO" },
  {
    image: image1,
    text: "Trabajamos para ayudarte a tener el placer de ver perfectamente",
  },
];

export const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`slide ${index === currentSlide ? "active" : ""}`}
        >
          <img src={slide.image} alt={slide.text} />
          <div className="slide-content">
            <h2>{slide.text}</h2>
            {slide.button ? (
              <button className="my-button">{slide.button}</button>
            ) : null}
          </div>
        </div>
      ))}
      <button className="prev" onClick={prevSlide}>
        &#10094;
      </button>
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
    </div>
  );
};
