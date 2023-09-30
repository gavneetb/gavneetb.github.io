import React, { useState, useEffect } from "react";

import imprint from "../../res/images/sponsors/imprint.svg";
import city_of_waterloo from "../../res/images/sponsors/city_of_waterloo.svg";
import mushroom from "../../res/images/sponsors/mushroom.svg";
import panago from "../../res/images/sponsors/panago.svg";
import shutterstock from "../../res/images/sponsors/shutterstock.svg";
import uniofwaterloo from "../../res/images/sponsors/uniofwaterloo.png";
import versa from "../../res/images/sponsors/versa.svg";
import extrempa from "../../res/images/sponsors/extrempa.svg";
import ctrl_v from "../../res/images/sponsors/ctrl_v.svg";
import dominoes from "../../res/images/sponsors/dominoes.svg";

import Header from "../../components/Header/Header";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";

export default function Sponsors() {
  const [hoveredLogo, setHoveredLogo] = useState(null);

  const linkStyle = (logo) => {
    return hoveredLogo === logo
      ? { borderColor: "#FFFFFF" }
      : { borderColor: "#3D3D3D" };
  };

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const mobileStyles = {
    container: {
      width: "390px",
      padding: "0 20px", // optional padding
    },
    title: {
      color: "#FFF",
      fontFeatureSettings: "'calt' off",
      fontFamily: "Inter",
      fontSize: "20px",
      fontWeight: 700,
      lineHeight: "50px",
      letterSpacing: "-1px",
      maxWidth: "390px",
      margin: "70px auto",
    },
    logoContainer: {
      backgroundColor: "white",
      display: "inline-block",
      padding: "10px",
      borderTopRightRadius: "50px",
      borderBottomLeftRadius: "50px",
      borderWidth: "6px",
      borderColor: "#FCCD72",
      borderStyle: "solid", // Add this line
      width: "90vw",
      height: "20vh",
    },
    logo: {
      width: "390px",
      maxWidth: "320px", // or another suitable value
      height: "auto", // to maintain aspect ratio
    },
    logoContainerGold: {
      backgroundColor: "white",
      padding: "10px",
      marginRight: "30px",
      borderTopRightRadius: "50px",
      borderBottomLeftRadius: "50px",
      borderWidth: "6px",
      borderColor: "#FCCD72",
      borderStyle: "solid", // Add this line
      width: "40vw",
      height: "20vh",
    },
    logoGold: {
      paddingTop: "10px",
      width: "100px",
      height: "auto",
      fill: "#FFF",
    },
    logoGoldSpace: {
      display: "flex",
      justifyContent: "space-between",
      width: "380px",
      margin: "0 auto 50px auto",
    },
    logoContainerSilver: {
      backgroundColor: "white",
      padding: "10px",
      marginRight: "30px",
      borderTopRightRadius: "50px",
      borderBottomLeftRadius: "50px",
      borderWidth: "6px",
      borderColor: "#C9D0DB",
      borderStyle: "solid", // Add this line
      width: "60vw",
      height: "20vh",
    },
    logoSilver: {
      width: "200px",
      height: "auto",
      fill: "#FFF",
    },
    logoContainerBronze: {
      backgroundColor: "white",
      padding: "10px",
      marginRight: "30px",
      marginBottom: "20px",

      borderTopRightRadius: "50px",
      borderBottomLeftRadius: "50px",
      borderWidth: "6px",
      borderColor: "#C5836E",
      borderStyle: "solid", // Add this line
      width: "40vw",
      height: "12vh",
    },
    logoBronze: {
      width: "120px",
      height: "auto",
      fill: "#FFF",
    },
    logoSpaceBronze: {
      display: "flex",
      flexDirection: "column", // This line is added
      justifyContent: "center",
      alignItems: "center", // To center the children horizontally too
      width: "100%",
      marginBottom: "20px",
      margin: "0 auto 170px auto",
    },
  };

  return (
    <>
      <Header />
      <SectionMain
        mainTitle="Sponsors"
        bgImg={mountainsBackground}
        subTitle="Thank you to our generous sponsors for the support!"
      />
      <div style={isMobile ? mobileStyles.container : {}}>
        {/* Platinum Sponsors */}
        <div
          style={
            isMobile
              ? mobileStyles.title
              : {
                  color: "#FFF",
                  fontFeatureSettings: "'calt' off",
                  fontFamily: "Inter",
                  fontSize: "50px",
                  fontWeight: 700,
                  lineHeight: "50px",
                  letterSpacing: "-1px",
                  width: "450px",
                  margin: "70px auto",
                }
          }
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
              style={
                isMobile
                  ? mobileStyles.logoContainer
                  : {
                      backgroundColor: "white",
                      display: "inline-block",
                      padding: "10px",
                      borderTopRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      borderWidth: "6px",
                      borderColor: "#FCCD72",
                      borderStyle: "solid", // Add this line
                    }
              }
            >
              <img
                src={uniofwaterloo}
                alt="Platinum Sponsor"
                style={
                  isMobile
                    ? mobileStyles.logo
                    : {
                        width: "921px",
                        height: "350px",
                        fill: "#FFF",
                      }
                }
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
              style={
                isMobile
                  ? mobileStyles.logoContainer
                  : {
                      backgroundColor: "white",
                      display: "inline-block",
                      padding: "10px",
                      borderTopRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      borderWidth: "6px",
                      borderColor: "#FCCD72",
                      borderStyle: "solid", // Add this line
                    }
              }
            >
              <img
                src={extrempa}
                alt="Platinum Sponsor"
                style={
                  isMobile
                    ? mobileStyles.logo
                    : {
                        width: "921px",
                        height: "350px",
                        fill: "#FFF",
                      }
                }
              />
            </div>
          </a>
        </div>

        {/* Gold Sponsors */}
        <div
          style={
            isMobile
              ? mobileStyles.title
              : {
                  color: "#FFF",
                  fontFeatureSettings: "'calt' off",
                  fontFamily: "Inter",
                  fontSize: "50px",
                  fontWeight: 700,
                  lineHeight: "50px",
                  letterSpacing: "-1px",
                  width: "450px",
                  margin: "70px auto",
                }
          }
        >
          Gold Sponsors
        </div>

        <div
          style={
            isMobile
              ? mobileStyles.logoGoldSpace
              : {
                  display: "flex",
                  justifyContent: "space-between",
                  width: "921px",
                  margin: "0 auto 70px auto",
                }
          }
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
              style={
                isMobile
                  ? mobileStyles.logoContainerGold
                  : {
                      backgroundColor: "white",
                      padding: "10px",
                      marginRight: "30px",
                      borderTopRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      borderWidth: "6px",
                      borderColor: "#FCCD72",
                      borderStyle: "solid", // Add this line
                    }
              }
            >
              <img
                src={mushroom}
                alt="Gold Sponsor 1"
                style={
                  isMobile
                    ? mobileStyles.logoGold
                    : {
                        width: "430.5px",
                        height: "263px",
                        fill: "#FFF",
                      }
                }
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
              style={
                isMobile
                  ? mobileStyles.logoContainerGold
                  : {
                      backgroundColor: "white",
                      padding: "10px",
                      borderTopRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      borderWidth: "6px",
                      borderColor: "#FCCD72",
                      borderStyle: "solid", // Add this line
                    }
              }
            >
              <img
                src={imprint}
                alt="Gold Sponsor 2"
                style={
                  isMobile
                    ? mobileStyles.logoGold
                    : {
                        width: "430.5px",
                        height: "263px",
                        fill: "#FFF",
                      }
                }
              />
            </div>
          </a>
        </div>

        <div
          style={
            isMobile
              ? mobileStyles.logoGoldSpace
              : {
                  display: "flex",
                  justifyContent: "space-between",
                  width: "921px",
                  margin: "0 auto 70px auto",
                }
          }
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
              style={
                isMobile
                  ? mobileStyles.logoContainerGold
                  : {
                      backgroundColor: "white",
                      padding: "10px",
                      marginRight: "30px",
                      borderTopRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      borderWidth: "6px",
                      borderColor: "#FCCD72",
                      borderStyle: "solid", // Add this line
                    }
              }
            >
              <img
                src={versa}
                alt="Gold Sponsor 1"
                style={
                  isMobile
                    ? mobileStyles.logoGold
                    : {
                        width: "430.5px",
                        height: "263px",
                        fill: "#FFF",
                      }
                }
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
              style={
                isMobile
                  ? mobileStyles.logoContainerGold
                  : {
                      backgroundColor: "white",
                      padding: "10px",
                      borderTopRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      borderWidth: "6px",
                      borderColor: "#FCCD72",
                      borderStyle: "solid", // Add this line
                    }
              }
            >
              <img
                src={city_of_waterloo}
                alt="Gold Sponsor 2"
                style={
                  isMobile
                    ? mobileStyles.logoGold
                    : {
                        width: "430.5px",
                        height: "263px",
                        fill: "#FFF",
                      }
                }
              />
            </div>
          </a>
        </div>

        {/* Silver Sponsors */}
        <div
          style={
            isMobile
              ? mobileStyles.title
              : {
                  color: "#FFF",
                  fontFeatureSettings: "'calt' off",
                  fontFamily: "Inter",
                  fontSize: "50px",
                  fontWeight: 700,
                  lineHeight: "50px",
                  letterSpacing: "-1px",
                  width: "450px",
                  margin: "70px auto",
                }
          }
        >
          Silver Sponsors
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
            href="https://www.ctrlv.ca/location/waterloo"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("ctrl_v")}
            onMouseEnter={() => setHoveredLogo("ctrl_v")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <div
              style={
                isMobile
                  ? mobileStyles.logoContainerSilver
                  : {
                      backgroundColor: "white",
                      padding: "10px",
                      marginRight: "30px",
                      borderTopRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      borderWidth: "6px",
                      borderColor: "#C9D0DB",
                      borderStyle: "solid", // Add this line
                    }
              }
            >
              <img
                src={ctrl_v}
                alt="Silver Sponsor 1"
                style={
                  isMobile
                    ? mobileStyles.logoSilver
                    : {
                        width: "480px",
                        height: "230px",
                        fill: "#FFF",
                      }
                }
              />
            </div>
          </a>
        </div>

        {/* Bronze Sponsors */}
        <div
          style={
            isMobile
              ? mobileStyles.title
              : {
                  color: "#FFF",
                  fontFeatureSettings: "'calt' off",
                  fontFamily: "Inter",
                  fontSize: "50px",
                  fontWeight: 700,
                  lineHeight: "50px",
                  letterSpacing: "-1px",
                  width: "450px",
                  margin: "70px auto",
                }
          }
        >
          Bronze Sponsors
        </div>

        <div
          style={
            isMobile
              ? mobileStyles.logoSpaceBronze
              : {
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                  margin: "0 auto 170px auto",
                }
          }
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
              style={
                isMobile
                  ? mobileStyles.logoContainerBronze
                  : {
                      backgroundColor: "white",
                      padding: "10px",
                      marginRight: "30px",
                      borderTopRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      borderWidth: "6px",
                      borderColor: "#C5836E",
                      borderStyle: "solid", // Add this line
                    }
              }
            >
              <img
                src={panago}
                alt="Bronze Sponsor 1"
                style={
                  isMobile
                    ? mobileStyles.logoBronze
                    : {
                        width: "300px",
                        height: "150px",
                        fill: "#FFF",
                      }
                }
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
              style={
                isMobile
                  ? mobileStyles.logoContainerBronze
                  : {
                      backgroundColor: "white",
                      padding: "10px",
                      marginRight: "30px",
                      borderTopRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      borderWidth: "6px",
                      borderColor: "#C5836E",
                      borderStyle: "solid", // Add this line
                    }
              }
            >
              <img
                src={shutterstock}
                alt="Bronze Sponsor 2"
                style={
                  isMobile
                    ? mobileStyles.logoBronze
                    : {
                        width: "300px",
                        height: "150px",
                        fill: "#FFF",
                      }
                }
              />
            </div>
          </a>
          <a
            href="https://www.dominos.ca/en/"
            target="_blank"
            rel="noopener noreferrer"
            style={linkStyle("dominoes")}
            onMouseEnter={() => setHoveredLogo("dominoes")}
            onMouseLeave={() => setHoveredLogo(null)}
          >
            <div
              style={
                isMobile
                  ? mobileStyles.logoContainerBronze
                  : {
                      backgroundColor: "white",
                      padding: "10px",
                      borderTopRightRadius: "50px",
                      borderBottomLeftRadius: "50px",
                      borderWidth: "6px",
                      borderColor: "#C5836E",
                      borderStyle: "solid", // Add this line
                    }
              }
            >
              <img
                src={dominoes}
                alt="Bronze Sponsor 2"
                style={
                  isMobile
                    ? mobileStyles.logoBronze
                    : {
                        width: "300px",
                        height: "150px",
                        fill: "#FFF",
                      }
                }
              />
            </div>
          </a>
        </div>
      </div>
    </>
  );
}
