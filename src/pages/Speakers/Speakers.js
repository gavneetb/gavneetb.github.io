import React, { useState } from "react";

import "./Speakers.css";
import SectionMain from "../../components/SectionMain";
import mountainsBackground from "../../res/images/mountainsBackground.svg";
// import SpeakerCard from "../../components/SpeakerCard";
import RowGroup from "./SpeakerRowGroup";

import Accordion from "../../components/Accordion/Accordion";
import Header from "../../components/Header/Header";

function About() {
  const [isOpen, setIsOpen] = useState(false);

  function setAccordianOpen(open) {
    setIsOpen(open);
  }

  return (
    <>
      <Header />
      <SectionMain
        mainTitle="Speakers"
        subTitle="View this year’s speaker lineup."
        bgImg={mountainsBackground}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div style={{ width: "85%" }}>
          <div className="team-section">
            <RowGroup even={true} persons={["Anil Gupta", "Arda Ocal"]} />
            <RowGroup
              even={true}
              persons={["Camelia Nunez", "Dhananja Jayalath"]}
            />
            <RowGroup
              even={true}
              persons={["Liena Zaiden", "Jordan Howlett"]}
            />
            <RowGroup
              even={true}
              persons={["Robert Clapperton", "Tyler Jing"]}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
