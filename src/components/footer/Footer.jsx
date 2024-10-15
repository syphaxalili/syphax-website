import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Syphax</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              À propos
            </a>
          </li>

          <li>
            <a href="#portfolio" className="footer__link">
              Projets
            </a>
          </li>

          <li>
            <a href="#qualification" className="footer__link">
              Qualifications
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://linkedin.com/in/syphaxalili"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/syphaxalili"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-github"></i>
          </a>

          <a
            href="https://t.me/syphax_al"
            className="footer__social-link"
            target="_blank"
          >
            <i className="bx bxl-telegram"></i>
          </a>
        </div>

        <span className="footer__copy">
          2024 &#169; Syphax ALILI. Tous droits réservés.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
