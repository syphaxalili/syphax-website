/* eslint-disable react/no-unknown-property */
import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://linkedin.com/in/syphaxalili"
        className="home__social-icon"
        target="_blank"
      >
        <i class="uil uil-linkedin-alt"></i>
      </a>

      <a
        href="https://github.com/syphaxalili"
        className="home__social-icon"
        target="_blank"
      >
        <i className="uil uil-github-alt"></i>
      </a>

      <a
        href="https://t.me/syphax_al"
        className="home__social-icon"
        target="_blank"
      >
        <i className="bx bxl-telegram"></i>
      </a>
    </div>
  );
};

export default Social;
