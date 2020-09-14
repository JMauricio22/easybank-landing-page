import React from "react";
import ImageMockups from "../../images/image-mockups.png";
import "./MockupsImage.css";

function MockupsImage() {
  return (
    <div className="mockups">
      <img className="mockups__image" src={ImageMockups} alt="phones" />
    </div>
  );
}

export default MockupsImage;
