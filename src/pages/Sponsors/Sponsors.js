import React from "react";

import imprint from "../../res/images/sponsors/imprint.svg";
import city_of_waterloo from "../../res/images/sponsors/city_of_waterloo.svg";
import mushroom from "../../res/images/sponsors/mushroom.svg";
import panago from "../../res/images/sponsors/panago.svg";
import shutterstock from "../../res/images/sponsors/shutterstock.svg";
import uniofwaterloo from "../../res/images/sponsors/uniofwaterloo.png";

import Header from "../../components/Header/Header";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";

export default function Sponsors() {
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
        </div>

        <div
          style={{
            margin: "0 auto 170px auto",
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
            src={city_of_waterloo}
            alt="Gold Sponsor 3"
            style={{
              width: "430.5px",
              height: "263px",
              fill: "#FFF",
            }}
          />
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
        </div>
      </div>
    </>
  );
}
