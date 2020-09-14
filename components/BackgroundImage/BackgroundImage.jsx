import React from "react";
import BImage from "../../images/bg-intro-desktop.svg";
import "./BackgroundImage.css";

function BackgroundImage() {
  return (
    <div className="bg-intro">
      <img className="bg-intro__img" src={BImage} alt="bg" />
    </div>
  );
}

export default BackgroundImage;
