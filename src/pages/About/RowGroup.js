import React, { useState, useEffect } from "react";

import Accordion from "../../components/Accordion/Accordion";

import TeamMemberCard from "../../components/TeamMemberCard";

import people from "../../data/people";

export default function EvenRowGroup({ persons, even }) {
  //MOBILE VIEW
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 450);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 450);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [whichProfileOpen, setWhichProfileOpen] = useState(null);

  const [accordianIsOpen, setAccordianIsOpen] = useState(false);

  const [program, setProgram] = useState("");
  const [freeTime, setFreeTime] = useState("");
  const [description, setDescription] = useState("");

  function toggleAccordian(open) {
    setAccordianIsOpen(open);
  }

  function setPersonInfo(personProgram, personFreeTime, personDescription) {
    setProgram(personProgram);
    setFreeTime(personFreeTime);
    setDescription(personDescription);
  }

  function setMyProfileOpen(personIndex) {
    setWhichProfileOpen(personIndex);
  }

  return (
    <>
      <div className={even ? "grid-container-even" : "grid-container-odd"}>
        {persons.map((person, index) => {
          if (!people[person]) {
            return (
              <TeamMemberCard
                name={""}
                program={""}
                role={""}
                picture={""}
                linkedin={""}
                freeTime={""}
                myIndex={""}
                reading={false}
                toggleAccordian={toggleAccordian}
                setPersonInfo={setPersonInfo}
                setMyProfileOpen={setMyProfileOpen}
                className="grid-item"
              />
            );
          }

          const { title, program, picture, linkedin, freeTime, description } =
            people[person];

          return (
            <TeamMemberCard
              isMobileView={isMobileView}
              name={person}
              program={program}
              role={title}
              picture={picture}
              linkedin={linkedin}
              freeTime={freeTime}
              description={description}
              myIndex={index}
              reading={whichProfileOpen === index}
              toggleAccordian={toggleAccordian}
              setPersonInfo={setPersonInfo}
              setMyProfileOpen={setMyProfileOpen}
              className="grid-item"
            />
          );
        })}
      </div>
      <Accordion isOpen={accordianIsOpen}>
        {/* <p
          style={{
            color: "white",
            fontFamily: "inter",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          Q: What year & program are you in?
        </p>
        <p
          style={{
            color: "white",
            fontFamily: "inter",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          A: {program}
        </p>
        <p
          style={{
            color: "white",
            fontFamily: "inter",
            fontSize: "20px",
            fontWeight: "700",
          }}
        >
          Q: What do you like to do in your free time?
        </p> */}
        <p
          style={{
            color: "white",
            fontFamily: "inter",
            fontSize: "20px",
            fontWeight: "400",
          }}
        >
          {description}
        </p>
      </Accordion>
    </>
  );
}
