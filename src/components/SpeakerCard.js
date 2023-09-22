import React, { useState } from "react";
import speakerWebsite from "../res/images/logos/WebsiteLink.svg";
import speakerMail from "../res/images/mail.svg";

export default function SpeakerCard({
  name,
  program,
  role,
  speech,
  mail,
  website,
  picture,
  freeTime,
  description,
  myIndex,
  reading,
  toggleAccordian,
  setPersonInfo,
  setMyProfileOpen,
  className,
}) {
  if (name === "") {
    return <div></div>;
  }

  const handleEmailClick = () => {
    if (mail) {
      window.location.href = `mailto:${mail}`;
    }
  };

  return (
    <div className={className}>
      <img
        src={picture}
        style={{ borderBottomLeftRadius: 50, borderTopRightRadius: 50 }}
      />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <div style={{ padding: "10px 0" }}>
          <h1
            style={{
              display: "inline-block",
              fontFamily: "inter",
              fontWeight: 700,
              color: "white",
              marginRight: "10px",
            }}
          >
            {name}
          </h1>
          {mail && (
            <img
              style={{ width: "24px", marginRight: "10px", cursor: "pointer" }}
              alt=""
              src={speakerMail}
              onClick={handleEmailClick}
              onMouseOut={(e) => (e.currentTarget.src = speakerMail)}
            />
          )}
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <img
                style={{ width: "24px", cursor: "pointer" }}
                alt=""
                src={speakerWebsite}
                onMouseOut={(e) => (e.currentTarget.src = speakerWebsite)}
              />
            </a>
          )}
        </div>
        <h3
          style={{
            fontSize: "28px",
            fontFamily: "inter",
            fontWeight: 700,
            textAlign: "left",
            color: "#D43F2E",
            paddingBottom: "10px",
          }}
        >
          {speech}
        </h3>
        <h3
          style={{
            fontFamily: "inter",
            fontWeight: 200,
            textAlign: "left",
            color: "#FFFFFF",
            paddingBottom: "10px",
          }}
        >
          {role}
        </h3>
        <span
          className="button"
          style={{
            fontFamily: "inter",
            fontWeight: 200,
            color: "#FFFFFF",
            borderBottom: "1px solid #FFFFFF",
          }}
          onClick={() => {
            if (reading) {
              setMyProfileOpen(null);
            } else {
              setMyProfileOpen(myIndex);
            }
            toggleAccordian(!reading);
            setPersonInfo(program, freeTime, description);
          }}
        >
          {reading ? "Read Less" : "Read More"}
        </span>
      </div>
    </div>
  );
}
