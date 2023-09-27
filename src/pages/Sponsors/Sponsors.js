import React, { useState } from "react";

import imprint from "../../res/images/sponsors/imprint.svg";
import city_of_waterloo from "../../res/images/sponsors/city_of_waterloo.svg";
import mushroom from "../../res/images/sponsors/mushroom.svg";
import panago from "../../res/images/sponsors/panago.svg";
import shutterstock from "../../res/images/sponsors/shutterstock.svg";
import uniofwaterloo from "../../res/images/sponsors/uniofwaterloo.png";
import versa from "../../res/images/sponsors/versa.svg";
import extrempa from "../../res/images/sponsors/extrempa.svg";

import Header from "../../components/Header/Header";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";

export default function Sponsors() {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const linkStyle = (logo) => ({
    textDecoration: "none",
    transition: "transform 0.3s",
    display: "inline-block",
    transform: hoveredLogo === logo ? "scale(1.1)" : "scale(1)",
  });

  return (
    <>
      <Header />
      <SectionMain
        mainTitle="Sponsors"
        bgImg={mountainsBackground}
        subTitle="Thank you to our generous sponsors for the support!"
      />
      <div style={{ textAlign: "center" }}>
        {/* Platinum Sponsors */}
        <div
          style={{
            color: "#FFF",
            fontFeatureSettings: "'calt' off",
            fontFamily: "Inter",
            fontSize: "50px",
            fontWeight: 700,
            lineHeight: "50px",
            letterSpacing: "-1px",
            width: "450px",
            margin: "70px auto",
          }}
        >
          Platinum Sponsors
        </div>

        <div style={{ margin: "0 auto 170px auto" }}>
          <a
            href="https://uwaterloo.ca/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("uniofwaterloo")}
            onMouseEnter={() => setHoveredLogo("uniofwaterloo")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <div
              style={{
                backgroundColor: "white",
                display: "inline-block",
                padding: "10px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderWidth: "6px",
                borderColor: "#FCCD72",
                borderStyle: "solid", // Add this line
              }}
            >
              <img
                src={uniofwaterloo}
                alt="Platinum Sponsor"
                style={{
                  width: "921px",
                  height: "350px",
                  fill: "#FFF",
                }}
              />
            </div>
          </a>
        </div>
        <div style={{ margin: "0 auto 170px auto" }}>
          <a
            href="https://www.extempra.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("extrempa")}
            onMouseEnter={() => setHoveredLogo("extrempa")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <div
              style={{
                backgroundColor: "white",
                display: "inline-block",
                padding: "10px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderWidth: "6px",
                borderColor: "#FCCD72",
                borderStyle: "solid", // Add this line
              }}
            >
              <img
                src={extrempa}
                alt="Platinum Sponsor"
                style={{
                  width: "921px",
                  height: "350px",
                  fill: "#FFF",
                }}
              />
            </div>
          </a>
        </div>

        {/* Gold Sponsors */}
        <div
          style={{
            color: "#FFF",
            fontFeatureSettings: "'calt' off",
            fontFamily: "Inter",
            fontSize: "50px",
            fontWeight: 700,
            lineHeight: "50px",
            letterSpacing: "-1px",
            width: "450px",
            margin: "70px auto",
          }}
        >
          Gold Sponsors
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "921px",
            margin: "0 auto 70px auto",
          }}
        >
          <a
            href="https://littlemushroomcatering.ca/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("mushroom")}
            onMouseEnter={() => setHoveredLogo("mushroom")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                marginRight: "30px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderWidth: "6px",
                borderColor: "#FCCD72",
                borderStyle: "solid", // Add this line
              }}
            >
              <img
                src={mushroom}
                alt="Gold Sponsor 1"
                style={{
                  width: "430.5px",
                  height: "263px",
                  fill: "#FFF",
                }}
              />
            </div>
          </a>
          <a
            href="https://www.4imprint.ca/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("imprint")}
            onMouseEnter={() => setHoveredLogo("imprint")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderWidth: "6px",
                borderColor: "#FCCD72",
                borderStyle: "solid", // Add this line
              }}
            >
              <img
                src={imprint}
                alt="Gold Sponsor 2"
                style={{
                  width: "430.5px",
                  height: "263px",
                  fill: "#FFF",
                }}
              />
            </div>
          </a>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "921px",
            margin: "0 auto 70px auto",
          }}
        >
          <a
            href="https://versa-networks.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("versa")}
            onMouseEnter={() => setHoveredLogo("versa")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                marginRight: "30px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderWidth: "6px",
                borderColor: "#FCCD72",
                borderStyle: "solid", // Add this line
              }}
            >
              <img
                src={versa}
                alt="Gold Sponsor 1"
                style={{
                  width: "430.5px",
                  height: "263px",
                  fill: "#FFF",
                }}
              />
            </div>
          </a>
          <a
            href="https://www.waterloo.ca/en/index.aspx"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("city_of_waterloo")}
            onMouseEnter={() => setHoveredLogo("city_of_waterloo")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderWidth: "6px",
                borderColor: "#FCCD72",
                borderStyle: "solid", // Add this line
              }}
            >
              <img
                src={city_of_waterloo}
                alt="Gold Sponsor 2"
                style={{
                  width: "430.5px",
                  height: "263px",
                  fill: "#FFF",
                }}
              />
            </div>
          </a>
        </div>

        {/* Bronze Sponsors */}
        <div
          style={{
            color: "#FFF",
            fontFeatureSettings: "'calt' off",
            fontFamily: "Inter",
            fontSize: "50px",
            fontWeight: 700,
            lineHeight: "50px",
            letterSpacing: "-1px",
            width: "450px",
            margin: "70px auto",
          }}
        >
          Bronze Sponsors
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            margin: "0 auto 170px auto",
          }}
        >
          <a
            href="https://www.panago.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("panago")}
            onMouseEnter={() => setHoveredLogo("panago")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                marginRight: "30px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderWidth: "6px",
                borderColor: "#C5836E",
                borderStyle: "solid", // Add this line
              }}
            >
              <img
                src={panago}
                alt="Bronze Sponsor 1"
                style={{
                  width: "330px",
                  height: "169px",
                  fill: "#FFF",
                }}
              />
            </div>
          </a>
          <a
            href="https://www.shutterstock.com/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("shutterstock")}
            onMouseEnter={() => setHoveredLogo("shutterstock")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <div
              style={{
                backgroundColor: "white",
                padding: "10px",
                borderTopRightRadius: "50px",
                borderBottomLeftRadius: "50px",
                borderWidth: "6px",
                borderColor: "#C5836E",
                borderStyle: "solid", // Add this line
              }}
            >
              <img
                src={shutterstock}
                alt="Bronze Sponsor 2"
                style={{
                  width: "330px",
                  height: "169px",
                  fill: "#FFF",
                }}
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
