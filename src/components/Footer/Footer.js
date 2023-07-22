import React, { Component } from "react";
import { Grid, Image, Container, ImageGroup, Divider } from "semantic-ui-react";

import facebook from "../../res/images/facebook.svg";
import instagram from "../../res/images/instagram.svg";
import linkedin from "../../res/images/linkedin.svg";
import twitter from "../../res/images/twitter.svg";
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
              <div class="column column-1">Row 1, Column 1</div>
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
                      <p style={{ color: "black", fontWeight: "bold" }}>
                        Email:
                      </p>
                      <a href="#">outreach@tedxuw.com</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="column">
                <p class="column-text">Social</p>
                <div class="social-media-block">
                  <ul>
                    <div class="social-links">
                      <a href="#" class="social-icon">
                        {facebook}
                      </a>
                      <a href="#" class="social-icon">
                        <i class="fab fa-twitter"></i>
                      </a>
                      <a href="#" class="social-icon">
                        <i class="fab fa-instagram"></i>
                      </a>
                      <a href="#" class="social-icon">
                        <i class="fab fa-linkedin-in"></i>
                      </a>
                      <a href="#" class="social-icon">
                        <i class="fab fa-youtube"></i>
                      </a>
                    </div>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row row-2">
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
