import React, { useState, useRef, useEffect } from "react";
import {
  StyledLandingContainer,
  StyledMissionTitle,
  StyledStatement,
  StyledTitle,
  StyledDescription,
  StyledText,
  StyledButtonText,
  StyledLandingContainer2,
  StyledImg,
  StyledBackgroundImgDiv,
  StyledSocialContainer,
  StyledSocial,
} from "./styles";
import { Container, ImageGroup, Divider, Button } from "semantic-ui-react";
import facebook from "../../res/images/facebook.svg";
import instagram from "../../res/images/instagram.svg";
import linkedin from "../../res/images/linkedin.svg";
import twitter from "../../res/images/twitter.svg";
import collage2 from "../../res/images/collage2.png";
import attendees from "../../res/images/attendees.png";
import { Link } from "react-scroll";
import "../../grid.min.css";
import Header from "../../components/Header/Header";
import BeforeEvent from "../../components/BeforeEvent/BeforeEvent";
import DuringEvent from "../../components/DuringEvent/DuringEvent";
import AfterEvent from "../../components/AfterEvent/AfterEvent";
// Landing page component

import "./Landing.css";
function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    // Add event listener
    window.addEventListener("resize", handleResize);
    // Call handler right away so state gets updated with initial window size
    handleResize();
    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []); // Empty array ensures that effect is only run on mount
  return windowSize;
}

function Landing(props) {
  const size = useWindowSize();
  var gap = size.width < "500" ? "10px" : "35px";
  var social_padding = "0px";
  if (size.width < "526") {
    social_padding = "20px";
  }
  if (size.width < "400") {
    social_padding = "0px";
  }
  if (size.width < "300") {
    gap = "0px";
  }

  return (
    <div>
      <Header color="black" />
      <BeforeEvent />
      {/* <DuringEvent /> */}
      {/* <AfterEvent /> */}
      <StyledLandingContainer style={{ marginTop: "90px" }}>
        <StyledTitle>
          <span style={{ textDecoration: "underline 15px solid #e62b1e" }}>
            &nbsp;&nbsp;What is TEDx
          </span>
          ?
        </StyledTitle>
      </StyledLandingContainer>
      <StyledLandingContainer>
        <StyledDescription>
          In the spirit of ideas worth spreading, TED has created a program
          called&nbsp;
          <a
            style={{ color: "#e62b1e" }}
            href="https://www.ted.com/about/programs-initiatives/tedx-program">
            TEDx
          </a>
          .
        </StyledDescription>
        <StyledDescription style={{ marginBottom: "100px" }}>
          TEDx is a program of local, self-organized events that bring people
          together to share a TED-like experience. Our event is called TEDxUW,
          where x = independently organized TED event. At our TEDxUW, TED Talks
          video and live speakers will combine to spark deep discussion and
          connection in a small group. The TED Conference provides general
          guidance for the TEDx program, but individual TEDx events, including
          ours, are self-organized.
        </StyledDescription>

        <StyledTitle>
          <span style={{ textDecoration: "underline 15px solid #e62b1e" }}>
            &nbsp;&nbsp;What is TEDxUW
          </span>
          ?
        </StyledTitle>

        <StyledDescription style={{ marginBottom: "30px" }}>
          <span
            style={{
              color: "#afafaf",
              fontFamily: "Avenir",
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "24px",
              lineHeight: "33px",
              textAlign: "left",
            }}>
            Founded in 2011
          </span>
          , TEDxUW is the University of Waterloo's official TEDx experience. It
          is one in a series of 3,000+ events being held worldwide as part of
          the international TED movement to create open platforms for riveting
          ideas to be shared with the world. The diverse group of students,
          faculty, and alumni learn from one another, both as speakers and as
          attendees, and leave the conference driven to creatively and
          collectively improve our future.
        </StyledDescription>
        <StyledDescription style={{ marginBottom: "30px" }}>
          <span
            style={{
              color: "#afafaf",
              fontFamily: "Avenir",
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "24px",
              lineHeight: "33px",
              textAlign: "left",
            }}>
            Our mission
          </span>
          &nbsp; is to bring together intelligent, talented and energetic
          members within the University of Waterloo community to foster an
          environment in which change-makers are able to showcase their ideas
          and achievements to a global audience. With TEDxUW talks published on
          TED.com and amassing over 5 million views on YouTube, TEDxUW sparks
          innovation across the globe starting at the University of Waterloo.
        </StyledDescription>
        <StyledDescription style={{ paddingBottom: "6rem" }}>
          <span
            style={{
              color: "#afafaf",
              fontFamily: "Avenir",
              fontStyle: "normal",
              fontWeight: "800",
              fontSize: "24px",
              lineHeight: "33px",
              textAlign: "left",
            }}>
            At the University of Waterloo
          </span>
          , ideas are a part of who we are. Both on and off campus, we cultivate
          and apply diverse, multidisciplinary ideas in a variety of fields.
          Hosting a TEDx conference each year is our distinct way of supporting
          and encouraging the “ideas worth spreading” philosophy. Our goal is to
          highlight the collective contributions of our university to a global
          society, simultaneously championing the University of Waterloo as a
          community where great minds and big ideas always meet. TEDxUW strives
          to position the University and its extended community on an
          international activity platform that is being watched, shared and
          talked about by the world’s top thinkers, thought leaders,
          businessmen, problem-solvers, entrepreneurs, writers, activists, and
          change-makers.
        </StyledDescription>
      </StyledLandingContainer>
      <StyledBackgroundImgDiv
        style={{
          backgroundImage: `url(${collage2})`,
        }}>
        <StyledLandingContainer2>
          <div class="ui grid">
            <div
              class="row"
              style={{ columnGap: "60px", alignItems: "center" }}>
              <div class="five wide column">
                <StyledImg src={attendees} />
              </div>
              <div class="seven wide column">
                <StyledStatement>
                  “There aren’t many times I’d say I’d be willing to travel 18
                  hours to go to a 7 hour conference but I’d do this again in a
                  heartbeat.”
                </StyledStatement>
                <StyledStatement> - 2017 TEDxUW Delegate</StyledStatement>
              </div>
            </div>
          </div>
        </StyledLandingContainer2>
      </StyledBackgroundImgDiv>
      <StyledText style={{ textAlign: "center" }}>
        Follow us on Social Media!
      </StyledText>
      <StyledSocialContainer>
        <div
          class="relaxed ui grid"
          style={{
            columnGap: gap,
            // background: "red",
            paddingLeft: social_padding,
            paddingRight: social_padding,
          }}>
          <div class="column" className="social_col">
            <ImageGroup>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer">
                <StyledSocial
                  alt=""
                  src={facebook}
                  onMouseOut={(e) => (e.currentTarget.src = facebook)}
                />
              </a>
            </ImageGroup>
          </div>
          <div class="column" className="social_col">
            <ImageGroup>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer">
                <StyledSocial
                  alt=""
                  src={linkedin}
                  onMouseOut={(e) => (e.currentTarget.src = linkedin)}
                />
              </a>
            </ImageGroup>
          </div>
          <div class="column" className="social_col">
            <ImageGroup>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer">
                <StyledSocial
                  alt=""
                  src={instagram}
                  onMouseOut={(e) => (e.currentTarget.src = instagram)}
                />
              </a>
            </ImageGroup>
          </div>
          <div class="column" className="social_col">
            <ImageGroup>
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer">
                <StyledSocial
                  alt=""
                  src={twitter}
                  onMouseOut={(e) => (e.currentTarget.src = twitter)}
                />
              </a>
            </ImageGroup>
          </div>
        </div>
      </StyledSocialContainer>
    </div>
  );
}

export default Landing;
