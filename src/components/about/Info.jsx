import React from "react";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        {/* <i className="bx bx-award about__icon"></i> */}
        <i className="bx bxs-graduation about__icon"></i>
        <h3 className="about__title">Formation</h3>
        <span className="about__subtitle">
          +4 ans<br />d&apos;études en Informatique
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-briefcase-alt about__icon"></i>
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">
          +10 projets académiques et personnels
        </span>
      </div>

      <div className="about__box">
        <i className="bx bx-support about__icon"></i>
        <h3 className="about__title">Collaboration</h3>
        <span className="about__subtitle">
          Ouvert à l&apos;apprentissage et au travail d&apos;équipe
        </span>
      </div>
    </div>
  );
};

export default Info;
