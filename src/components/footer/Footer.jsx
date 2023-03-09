import React from "react";
import "./footer.css";
import { Instagram } from "../../imgs/svgs/Instagram";
import { Facebook } from "../../imgs/svgs/Facebook";
import { Twitter } from "../../imgs/svgs/Twitter";
export const Footer = () => {
  return (
    <div className="footer-basic">
      <footer>
        <div className="social">
          <Instagram />

          <Facebook />

          <Twitter />
        </div>

        <div className="gif-eyes-container">
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#">Principal</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Servicios</a>
            </li>
            <li className="list-inline-item">
              <a href="#">Nosotros</a>
            </li>
          </ul>
        </div>

        <p className="copyright">HD Salud © 2023</p>
      </footer>
    </div>
  );
};
