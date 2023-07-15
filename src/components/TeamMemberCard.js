import React from "react";
import aboutLinkedin from "../res/images/logos/aboutLinkedin.svg";

export default function TeamMemberCard({
  name,
  role,
  profilePicture,
  ddQsAndAs,
  linkedin,
}) {
  return (
    <div>
      <img
        src={profilePicture}
        style={{ borderBottomLeftRadius: 50, borderTopRightRadius: 50 }}
      />
      <div style={{ display: "flex", alignItems: "center" }}>
        <h1
          style={{
            fontFamily: "inter",
            fontWeight: 700,
            color: "#D43F2E",
            marginRight: "10px",
          }}
        >
          {name}
        </h1>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">
          <img
            style={{ width: "24px" }}
            alt=""
            src={aboutLinkedin}
            onMouseOut={(e) => (e.currentTarget.src = aboutLinkedin)}
          />
        </a>
      </div>
      <h3 style={{ fontFamily: "inter", fontWeight: 200, color: "#FFFFFF" }}>
        {role}
      </h3>
      <span
        style={{
          fontFamily: "inter",
          fontWeight: 200,
          color: "#FFFFFF",
          borderBottom: "1px solid #FFFFFF",
        }}
      >
        Read More/Read Less
      </span>
    </div>
  );
}
