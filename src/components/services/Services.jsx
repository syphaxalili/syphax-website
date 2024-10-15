import React, { useState } from "react";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Services</h2>
      <span className="section__subtitle">Ce que j&apos;offre</span>

      <div className="services__container container grid">
        <div className="services__content">
          <i className="uil uil-arrow services__icon"></i>
          <h3 className="services__title">
            Développement
            <br />
            Frontend
          </h3>

          <span className="services__button" onClick={() => toggleTab(1)}>
            En savoir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 1
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Développement Frontend</h3>
              <p className="services__modal-description">
                Je développe des interfaces web dynamiques et interactives,
                optimisées pour offrir une expérience utilisateur fluide sur
                tous les appareils, tout en respectant les meilleures pratiques
                de design et de performance.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Conception d&apos;interfaces utilisateur (UI) responsives et
                    attrayantes.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Intégration des maquettes avec HTML, CSS, et JavaScript.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Utilisation de frameworks modernes comme React ou Vue.js.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Optimisation des performances frontales pour une navigation
                    fluide.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Test et débogage des fonctionnalités frontales.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-database services__icon"></i>
          <h3 className="services__title">
            Développement
            <br />
            Backend
          </h3>

          <span className="services__button" onClick={() => toggleTab(2)}>
            En savoir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 2
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">Développement Backend</h3>
              <p className="services__modal-description">
                Je mets en place l&apos;architecture serveur, gère la base de
                données et développe des API robustes pour assurer la
                communication efficace entre le frontend et le backend.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Développement d&apos;API RESTful et GraphQL.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Gestion des bases de données (MySQL, MongoDB, etc.).
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Optimisation des performances serveur et du traitement des
                    données.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Intégration des systèmes de paiement, de stockage et
                    d&apos;authentification.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Mise en place de la sécurité et de la gestion des
                    utilisateurs.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="services__content">
          <i className="uil uil-store services__icon"></i>
          <h3 className="services__title">
            Création et gestion de votre boutique en ligne
          </h3>

          <span className="services__button" onClick={() => toggleTab(3)}>
            En savoir plus
            <i className="uil uil-arrow-right services__button-icon"></i>
          </span>

          <div
            className={
              toggleState === 3
                ? "services__modal active-modal"
                : "services__modal"
            }
          >
            <div className="services__modal-content">
              <i
                className="uil uil-times services__modal-close"
                onClick={() => toggleTab(0)}
              ></i>
              <h3 className="services__modal-title">
                Création et gestion de votre boutique en ligne{" "}
              </h3>
              <p className="services__modal-description">
                Je prends en charge la création et la gestion complète de votre
                boutique en ligne, de la mise en place des produits à la
                logistique, afin d&apos;optimiser votre présence sur les
                marketplaces et faciliter vos ventes en ligne.
              </p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Création de votre catalogue et optimisation des fiches
                    produits.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Intégration des produits sur les marketplaces (Amazon,
                    Cdiscount, Fnac, etc.).
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Préparation, traitement et expédition des commandes.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Analyse des ventes et optimisation continue pour améliorer
                    la performance.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">
                    Suivi des expéditions et gestion des retours.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
