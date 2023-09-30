import React, { useState, useEffect } from "react"; // Added useEffect

import Header from "../../components/Header/Header";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";
import schedule_section from "../../res/images/schedule_section.svg";
import schedule_mobile from "../../res/images/schedule_mobile.svg";

export default function Schedule() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    const handleVisibilityChange = () => {
      if (!document.hidden) {
        handleResize();
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, []);

  const divStyle3 = {
    backgroundImage: `url(${schedule_section})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "240vh",
  };

  const divStyle4 = {
    backgroundImage: `url(${schedule_mobile})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "75vh",
    width: "90%",
    marginLeft: "30px",
  };

  return (
    <>
      <Header />
      <SectionMain
        mainTitle="Schedule"
        bgImg={mountainsBackground}
        subTitle="Check out the cool things planned on the day of the event!"
      />
      <div
        id="conference-schedule"
        style={windowWidth <= 450 ? divStyle4 : divStyle3}
      ></div>
    </>
  );
}
