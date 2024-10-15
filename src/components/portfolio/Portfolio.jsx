import React, { useState } from "react";
import B2connect from "../../assets/proj-b2connect.jpg";
import Elzero from "../../assets/proj-elzero.jpg";
import Cebioval from "../../assets/proj-cebioval.jpg";
import Educational from "../../assets/proj-educational.jpg";
import Dashboard from "../../assets/proj-dashboard.jpg";
import Leon from "../../assets/proj-leon.jpg";
import "./portfolio.css";

const Portfolio = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="portfolio section" id="portfolio">
      <h2 className="section__title">Portfolio</h2>
      <span className="section__subtitle">Mes réalisations récentes</span>

      <div className="portfolio__container container">
        {/* <div className="portfolio__tabs">
          <div
            className={
              toggleState === 1
                ? "portfolio__button button--flex portfolio__active"
                : "portfolio__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            All
          </div>

          <div
            className={
              toggleState === 2
                ? "portfolio__button button--flex portfolio__active"
                : "portfolio__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            Web
          </div>

          <div
            className={
              toggleState === 3
                ? "portfolio__button button--flex portfolio__active"
                : "portfolio__button button--flex"
            }
            onClick={() => toggleTab(3)}
          >
            App
          </div>

          <div
            className={
              toggleState === 4
                ? "portfolio__button button--flex portfolio__active"
                : "portfolio__button button--flex"
            }
            onClick={() => toggleTab(4)}
          >
            Design
          </div>
        </div> */}
        <div className="portfolio__projects">
          <div
            className={
              toggleState === 1
                ? "portfolio__content portfolio__content-active"
                : "portfolio__content"
            }
          >
            <div className="portfolio__projects-card">
              <a
                href="https://syphaxalili.github.io/b2connect-website/index.html"
                className="project__card-container"
                target="__blank"
              >
                <div className="project-cover">
                  <img src={B2connect} alt="" />
                </div>
                <h4 className="project-title">B2CONNECT France</h4>
                <span className="project-go">
                  Demo <i className="uil uil-arrow-right project-go-icon"></i>
                </span>
              </a>
            </div>

            <div className="portfolio__projects-card">
              <a
                href="https://syphaxalili.github.io/elzero-website/"
                className="project__card-container"
                target="__blank"
              >
                <div className="project-cover">
                  <img src={Elzero} alt="" />
                </div>
                <h4 className="project-title">Elzero</h4>
                <span className="project-go">
                  Demo <i className="uil uil-arrow-right project-go-icon"></i>
                </span>
              </a>
            </div>

            <div className="portfolio__projects-card">
              <a
                href="https://syphaxalili.github.io/cebioval/"
                className="project__card-container"
                target="__blank"
              >
                <div className="project-cover">
                  <img src={Cebioval} alt="" />
                </div>
                <h4 className="project-title">CEBIOVAL</h4>
                <span className="project-go">
                  Demo <i className="uil uil-arrow-right project-go-icon"></i>
                </span>
              </a>
            </div>

            <div className="portfolio__projects-card">
              <a
                href="https://syphaxalili.github.io/educational-website/"
                className="project__card-container"
                target="__blank"
              >
                <div className="project-cover">
                  <img src={Educational} alt="" />
                </div>
                <h4 className="project-title">Educational website</h4>
                <span className="project-go">
                  Demo <i className="uil uil-arrow-right project-go-icon"></i>
                </span>
              </a>
            </div>

            <div className="portfolio__projects-card">
              <a
                href="https://syphaxalili.github.io/dashboard-website/"
                className="project__card-container"
                target="__blank"
              >
                <div className="project-cover">
                  <img src={Dashboard} alt="" />
                </div>
                <h4 className="project-title">Admin dashboard</h4>
                <span className="project-go">
                  Demo <i className="uil uil-arrow-right project-go-icon"></i>
                </span>
              </a>
            </div>

            <div className="portfolio__projects-card">
              <a
                href="https://syphaxalili.github.io/leon-website/"
                className="project__card-container"
                target="__blank"
              >
                <div className="project-cover">
                  <img src={Leon} alt="" />
                </div>
                <h4 className="project-title">Leon</h4>
                <span className="project-go">
                  Demo <i className="uil uil-arrow-right project-go-icon"></i>
                </span>
              </a>
            </div>
          </div>

          {/* <div
            className={
              toggleState === 2
                ? "portfolio__content portfolio__content-active"
                : "portfolio__content"
            }
          >
            <div className="portfolio__projects-card">
              <div className="project-cover">
                <img src={Work1} alt="" />
              </div>
              <h4 className="project-title">Web design</h4>
              <a href="#" className="project-go">
                Demo <i className="uil uil-arrow-right project-go-icon"></i>
              </a>
            </div>

            <div className="portfolio__projects-card">
              <div className="project-cover">
                <img src={Work2} alt="" />
              </div>
              <h4 className="project-title">App mobile</h4>
              <a href="#" className="project-go">
                Demo <i className="uil uil-arrow-right project-go-icon"></i>
              </a>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
