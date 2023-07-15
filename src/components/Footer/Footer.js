import React, { Component } from "react";
import { Grid, Image, Container, ImageGroup, Divider } from "semantic-ui-react";

import facebook from "../../res/images/facebook.svg";
import instagram from "../../res/images/instagram.svg";
import linkedin from "../../res/images/linkedin.svg";
import twitter from "../../res/images/twitter.svg";
import "../../grid.min.css";

import "./Footer.css";

import {
  StyledLink,
  StyledHeading,
  StyledDescription,
  StyledList,
  StyledSubtleLink,
  StyledHr,
  StyledFooterContainer,
  StyledConnectContainer,
} from "./styles";
import EmailForm from "../../components/EmailForm/EmailForm";
class Footer extends Component {
  render() {
    return (
      <div id="footer">
        <StyledFooterContainer>
          <StyledHr />
          <div class="ui grid ">
            <div class="row" style={{ columnGap: "80px", alignItems: "left" }}>
              <StyledConnectContainer>
                <Container style={{ textAlign: "left" }}>
                  <StyledHeading>Let's stay connected!</StyledHeading>
                  <StyledDescription>
                    Enter your email to receive the latest news and
                    opportunities from the TEDxUW Community.
                  </StyledDescription>
                  <EmailForm />
                  <Container
                    style={{
                      marginBottom: "33px",
                      marginTop: "34px",
                      marginRight: "auto",
                      color: "white",
                      width: "166px",
                      position: "relative",
                      textAlign: "left",
                    }}>
                    <div class="ui grid" style={{ color: "white" }}>
                      <div class="column">
                        <ImageGroup>
                          <a
                            href="https://www.facebook.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                              style={{ width: "24px" }}
                              alt=""
                              src={facebook}
                              onMouseOut={(e) =>
                                (e.currentTarget.src = facebook)
                              }
                            />
                          </a>
                        </ImageGroup>
                      </div>
                      <div class="column">
                        <ImageGroup>
                          <a
                            href="https://www.linkedin.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                              style={{ width: "24px" }}
                              alt=""
                              src={linkedin}
                              onMouseOut={(e) =>
                                (e.currentTarget.src = linkedin)
                              }
                            />
                          </a>
                        </ImageGroup>
                      </div>
                      <div class="column">
                        <ImageGroup>
                          <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                              style={{ width: "24px" }}
                              alt=""
                              src={instagram}
                              onMouseOut={(e) =>
                                (e.currentTarget.src = instagram)
                              }
                            />
                          </a>
                        </ImageGroup>
                      </div>
                      <div class="column">
                        <ImageGroup>
                          <a
                            href="https://twitter.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            <img
                              style={{ width: "24px" }}
                              alt=""
                              src={twitter}
                              onMouseOut={(e) =>
                                (e.currentTarget.src = twitter)
                              }
                            />
                          </a>
                        </ImageGroup>
                      </div>
                    </div>
                  </Container>
                  <StyledDescription>
                    Copyright © 2020 TEDxUW - All Rights Reserved.
                    <br />
                    This independent TEDx event is operated under license from
                    TED.
                  </StyledDescription>
                </Container>
              </StyledConnectContainer>
              <div class="three wide column" className="column1">
                <Container style={{ textAlign: "left" }}>
                  <StyledHeading>Contact</StyledHeading>
                  <StyledLink href="mailto:partnership@tedxuw.com">
                    partnership@tedxuw.com
                  </StyledLink>
                  <StyledHeading>Past Websites</StyledHeading>
                  <StyledLink href="http://2018.tedxuw.com/">
                    TEDxUW 2018
                    <br />
                  </StyledLink>
                  <StyledLink href="https://tedxuw.github.io/2017/">
                    TEDxUW 2017
                    <br />
                  </StyledLink>
                  <StyledLink href="https://tedxuw.github.io/2016/">
                    TEDxUW 2016
                    <br />
                  </StyledLink>
                </Container>
              </div>
              <div class="two wide column">
                <Container style={{ textAlign: "left" }}>
                  <StyledHeading>Navigate</StyledHeading>
                  <StyledSubtleLink href="/">
                    Home
                    <br />
                  </StyledSubtleLink>
                  <StyledSubtleLink href="Speakers">
                    Speakers
                    <br />
                  </StyledSubtleLink>
                  <StyledSubtleLink href="Partners">
                    Partners
                    <br />
                  </StyledSubtleLink>
                  <StyledSubtleLink href="About">
                    About
                    <br />
                  </StyledSubtleLink>
                  <StyledSubtleLink href="Faq">
                    FAQ
                    <br />
                  </StyledSubtleLink>
                  <StyledSubtleLink href="https://medium.com/@tedxuw">
                    Blog
                    <br />
                  </StyledSubtleLink>
                </Container>
              </div>
            </div>
          </div>
        </StyledFooterContainer>
      </div>
    );
  }
}

export default Footer;
