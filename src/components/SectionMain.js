import React from "react";
import "./SectionMain.css";

export default function SectionMain({ mainTitle, subTitle, bgImg }) {
  const divStyle = {
    backgroundColor: "white",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "70vh",
  };

  const secondMainSectionStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    marginRight: 50,
  };

  const mainTitleStyle = {
    textTransform: "uppercase",
    paddingBottom: "1rem",
    paddingLeft: "100px",
    borderBottom: "15px solid #D43F2E",
    fontSize: "5rem",
  };

  const subTitleStyle = {
    marginTop: 25,
    fontFamily: "Inter",
    fontSize: "24px",
    fontWeight: "300",
    maxWidth: "550px",
    textAlign: "right",
  };

  // Define responsive styles within the respective style objects
  const responsiveStyles = {
    "@media (max-width: 650px)": {
      height: "30vh",
      padding: "20px",
      ...divStyle,
      ...secondMainSectionStyle, // Apply responsive styles to second-main-section
      ...mainTitleStyle, // Apply responsive styles to main-title
      ...subTitleStyle, // Apply responsive styles to subtitle-section
    },
  };

  return (
    <div
      className="main-section"
      style={{ ...divStyle, ...responsiveStyles, "--bg-img": `url(${bgImg})` }}
    >
      <div className="second-main-section" style={secondMainSectionStyle}>
        <h1 className="main-title" style={mainTitleStyle}>
          {mainTitle}
        </h1>
        <h3 className="subtitle-section" style={subTitleStyle}>
          {subTitle}
        </h3>
      </div>
    </div>
  );
}
