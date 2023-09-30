import React, { useState, useEffect } from "react";
import Accordion from "../../components/Accordion/Accordion";
import SpeakerCard from "../../components/SpeakerCard";
import speakers from "../../data/speakers";

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
          if (!speakers[person]) {
            return (
              <SpeakerCard
                name={""}
                program={""}
                speech={""}
                role={""}
                picture={""}
                mail={""}
                website={""}
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

          const {
            title,
            speech,
            picture,
            mail,
            website,
            freeTime,
            description,
          } = speakers[person];

          return (
            <SpeakerCard
              //MOBILE VIEW
              isMobileView={isMobileView}
              name={person}
              program={program}
              role={title}
              speech={speech}
              picture={picture}
              mail={mail}
              website={website}
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
