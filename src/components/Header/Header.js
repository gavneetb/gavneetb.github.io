import React, { useState, useEffect } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button, Checkbox, Form, Container } from "semantic-ui-react";
import {
  Styledli,
  StyledButtonText,
  StyledButton,
  StyledNavContainer,
} from "./styles";
import tedxuw_logo from "../../res/images/tedxuw_logo.svg";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "../Burger/Burger";

const useScrollPosition = () => {
  // if (typeof window === "undefined") return 500;

  // Store the state
  const [scrollPos, setScrollPos] = useState(window.pageYOffset);

  // On Scroll
  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  // Add and remove the window listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  return scrollPos;
};

const boxStyles = {
  color: "white",
  position: "-webkit-sticky",
  position: "sticky",
  top: "0",
  left: "0",
  paddingLeft: "0px !important",
  width: "100%",
  zIndex: "10",
  position: "fixed",
  height: "76px",
};

function Header(props) {
  const scrollPos = useScrollPosition();
  const headerColor = scrollPos < props.height ? props.color : "black";
  return (
    <div
      style={{
        backgroundColor: headerColor,
        ...boxStyles,
      }}>
      <HamburgerMenu />
      <StyledNavContainer>
        <ul
          style={{
            marginTop: "0px",
            paddingTop: "35px",
            paddingBottom: "0px",
            display: "flex",
            listStyle: "none",
            height: "50px",
            justifyContent: "space-around",
            background: "none",
            width: "70%",
          }}>
          <li>
            <a href="/">
              <img
                src={tedxuw_logo}
                style={{
                  transform: "translate(-75px,-10px)",
                  position: "fixed",
                }}
              />
            </a>
          </li>

          <NavLink exact to="/Speakers">
            <Styledli>Speakers</Styledli>
          </NavLink>
          <NavLink exact to="/Partners">
            <Styledli>Partners</Styledli>
          </NavLink>
          <NavLink exact to="/About">
            <Styledli>About</Styledli>
          </NavLink>
          <NavLink exact to="/Faq">
            <Styledli>FAQ</Styledli>
          </NavLink>
          <a href="https://medium.com/@tedxuw">
            <Styledli>Blog</Styledli>
          </a>

          <li
            style={{ transform: "translate(550px,-40px)", position: "fixed" }}>
            <StyledButton>
              <StyledButtonText>Register Now</StyledButtonText>
            </StyledButton>
          </li>
        </ul>
      </StyledNavContainer>
    </div>
  );
}

export default Header;
