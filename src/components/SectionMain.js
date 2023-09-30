import React from "react";
import "./SectionMain.css";

export default function SectionMain({ mainTitle, subTitle, bgImg }) {
  const bgStyle = {
    backgroundImage: `url(${bgImg})`,
  };

  return (
    <div className="main-section" style={bgStyle}>
      <div className="second-main-section">
        <h1 className="main-title">{mainTitle}</h1>
        <h3 className="subtitle-section">{subTitle}</h3>
      </div>
    </div>
  );
}
