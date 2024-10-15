import React, { useState } from "react";
import "./qualification.css";

const Qualificaion = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualifications</h2>
      <span className="section__subtitle">Mon parcours personnel</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Éducation
          </div>
          <div
            className={
              toggleState === 2
                ? "qualification__button button--flex qualification__active"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt qualification__icon"></i>{" "}
            Expériences
          </div>
        </div>
        <div className="qualification__sections">
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Licence 3 Métiers du développement informatique
                </h3>
                <span className="qualification__subtitle">
                  Univ Marseille - France
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Depuis Sep 2024...
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Bachelor 2 Développement Web (1 an)
                </h3>
                <span className="qualification__subtitle">
                  EPSI PARIS - France
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2023 - Mai 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  École supérieure d&apos;ingénierie informatique
                  <br />
                  (2 ans)
                </h3>
                <span className="qualification__subtitle">
                  ESTIN BÉJAIA - Algérie
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Sep 2021 - Jun 2023
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Responsable <br />
                  E-Commerce <br />
                  (7 mois)
                </h3>
                <span className="qualification__subtitle">DLHP - France</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Mar 2024 - Sep 2024
                </div>
              </div>
              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">
                  Développeur Web Frontend en stage <br />
                  (2 mois)
                </h3>
                <span className="qualification__subtitle">DLHP - France</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2024 - Mar 2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Développeur d&apos;applications Android en stage <br />
                  (6 mois)
                </h3>
                <span className="qualification__subtitle">
                  ESTIN BÉJAIA - Algérie
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> Jan 2023 - Jun 2023
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualificaion;
