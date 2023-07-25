import React, { Component } from "react";
import { Grid, Image, Container, ImageGroup, Divider } from "semantic-ui-react";

import facebook from "../../res/images/facebook.svg";
import instagram from "../../res/images/instagram.svg";
import linkedin from "../../res/images/linkedin.svg";
import twitter from "../../res/images/twitter.svg";
import youtube from "../../res/images/youtube.svg";
import stump from "../../res/images/stump.svg";
import tedxuw_2023 from "../../res/images/tedxuw_2023.svg";

// import "../../grid.min.css";

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
      <div>
        <div className="footer">
          <div class="footercontainer">
            <div class="row">
              <div class="column column-1">
                <div class="stump-box">
                  <div class="footer-row">
                    <img src={tedxuw_2023} />
                  </div>
                  <div class="footer-row">
                    <img src={stump} />
                  </div>
                </div>
              </div>
              <div class="column">
                <p class="column-text">Past Websites</p>
                <div class="custom-links">
                  <ul>
                    <li>
                      <a href="#">2020 Vision</a>
                    </li>
                    <li>
                      <a href="#">Making Waves 2018</a>
                    </li>
                    <li>
                      <a href="#">Defying Conventions 2017</a>
                    </li>
                    <li>
                      <a href="#">TEDxUW 2016</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="column">
                <p class="column-text">Contact Us</p>
                <div class="custom-links">
                  <ul>
                    <li>
                      <a href="#">Email: outreach@tedxuw.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="column">
                <p class="column-text">Social</p>
                <div class="custom-links">
                  <ul>
                    <li>
                      <div class="social-links">
                        <a href="#" class="social-icon">
                          <img src={facebook} />
                        </a>
                        <a href="#" class="social-icon">
                          <img src={linkedin} />
                        </a>
                        <a href="#" class="social-icon">
                          <img src={instagram} />
                        </a>
                        <a href="#" class="social-icon">
                          <img src={twitter} />
                        </a>
                        <a href="#" class="social-icon">
                          <img src={youtube} />
                        </a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row row-2">
              <div class="gray-line"> </div>
              <em>
                Copyright © 2023 TEDxUW - All Rights Reserved. <br />
                This independent TEDx event is operated under license from TED.
              </em>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
