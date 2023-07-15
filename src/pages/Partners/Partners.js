import React from "react";
import { Container, ImageGroup, Divider, Button } from "semantic-ui-react";
import {
  StyledRedHeader,
  StyledMainHeader,
  StyledHeaderDescription,
  StyledSpeakerContainer,
  StyledSpeakerContainer2,
  StyledSpeakerContainer3,
  StyledImg,
  StyledDivider,
} from "./styles";
import down from "../../res/images/down.svg";
import university_of_waterloo from "../../res/images/sponsors/university_of_waterloo.svg";
import basecamp from "../../res/images/sponsors/basecamp.svg";
import city_of_waterloo from "../../res/images/sponsors/city_of_waterloo.svg";
import mailchimp from "../../res/images/sponsors/mailchimp.svg";
import waterloo_arts_endowment_fund from "../../res/images/sponsors/waterloo_arts_endowment_fund.svg";
import wusa from "../../res/images/sponsors/wusa.svg";

import { Link } from "react-scroll";
import Header from "../../components/Header/Header";
import "./Partners.css";

const Partners = () => (
  <section>
    <div
      style={{
        background:
          "linear-gradient(180deg, rgba(230, 43, 30, 0.2) 17.25%, rgba(230, 43, 30, 0) 100%)",
        width: "100%",
        marginLeft: "auto",
        marginRight: "auto",
        marginTop: "0px",
      }}>
      <Header color="#2e0807" height="200" />
      <StyledSpeakerContainer>
        <StyledRedHeader style={{ paddingTop: "64px" }}>
          Coming Soon
        </StyledRedHeader>
        <StyledMainHeader>2021 Partners </StyledMainHeader>
        <StyledHeaderDescription>
          In the meantime, thank you to our 2020 partners for their support!
        </StyledHeaderDescription>
      </StyledSpeakerContainer>
      <StyledSpeakerContainer2>
        <Link to="partners" smooth={true} spy={true}>
          <img
            src={down}
            style={{ width: "32px", marginTop: "83px", marginBottom: "40px" }}
          />
        </Link>
      </StyledSpeakerContainer2>
    </div>

    <StyledSpeakerContainer3>
      <div class="partners">
        <div class="ui grid">
          <div class="column" className="sponsor_col">
            <StyledImg src={university_of_waterloo} />
          </div>
          <div class="column" className="sponsor_col">
            <StyledImg src={wusa} />
          </div>
          <div class="column" className="sponsor_col">
            <StyledImg src={waterloo_arts_endowment_fund} />
          </div>
          <div class="column" className="sponsor_col">
            <StyledImg src={basecamp} />
          </div>
          <div class="column" className="sponsor_col">
            <StyledImg src={city_of_waterloo} />
          </div>
          <div class="column" className="sponsor_col">
            <StyledImg src={mailchimp} />
          </div>
        </div>
      </div>
    </StyledSpeakerContainer3>
  </section>
);

export default Partners;
