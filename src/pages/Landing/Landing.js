import React, { useEffect } from "react";

import Header from "../../components/Header/Header";
import LandingMain from "../../components/LandingMain";
import backgroundImage from "../../res/images/LandingMain.svg";
import WhatSection from "../../res/images/WhatSection.svg";
import mainpage1 from "../../res/images/mainpage1.svg";
import TEDxUW_Section from "../../res/images/infoPics/TEDxUWSection.svg";

import "./Landing.css";

function Landing() {
  const divStyle = {
    backgroundImage: `url(${WhatSection})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "200vh",
  };

  const divStyle2 = {
    backgroundImage: `url(${TEDxUW_Section})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "148vh",
  };

  useEffect(() => {
    if (location.hash) {
      let element = document.getElementById(location.hash.substring(1));
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <div>
      <Header />
      <LandingMain
        mainTitle="From the Ground Up"
        subTitle="Thank you to our generous sponsors for the support!"
        Image={backgroundImage}
      />
      <div class="what-section-main" style={divStyle}></div>
      <div class="what-section-mobile" style={divStyle2}></div>
      <div>
        <div class="mission-container">
          <h1 class="mission-title">Our Mission</h1>

          <p class="mission-statement">
            ...is to bring together intelligent, talented and energetic members
            within the University of Waterloo community to foster an environment
            in which change-makers are able to showcase their ideas and
            achievements to a global audience.
          </p>

          <p class="mission-statement-highlight">
            With TEDxUW talks published on TED.com and amassing over 5 million
            views on YouTube, TEDxUW sparks innovation across the globe starting
            at the University of Waterloo.
          </p>

          <p class="mission-statement">
            At the University of Waterloo, ideas are a part of who we are. Both
            on and off campus, we cultivate and apply diverse, multidisciplinary
            ideas in a variety of fields. Hosting a TEDx conference each year is
            our distinct way of supporting and encouraging the “ideas worth
            spreading” philosophy. Our goal is to highlight the collective
            contributions of our university to a global society, simultaneously
            championing the University of Waterloo as a community where great
            minds and big ideas always meet. TEDxUW strives to position the
            University and its extended community on an international activity
            platform that is being watched, shared and talked about by the
            world’s top thinkers, thought leaders, business-people,
            problem-solvers, entrepreneurs, writers, activists, and
            change-makers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Landing;
