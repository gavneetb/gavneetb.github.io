import React, { useState } from "react";

import Header from "../../components/Header/Header";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";
import schedule_section from "../../res/images/schedule_section.svg";

export default function Schedule() {
  const divStyle3 = {
    backgroundImage: `url(${schedule_section})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "240vh",
  };

  return (
    <>
      <Header />
      <SectionMain
        mainTitle="Schedule"
        bgImg={mountainsBackground}
        subTitle="Check out the cool things planned on the day of the event!"
      />
      <div id="conference-schedule" style={divStyle3}></div>
    </>
  );
}
