import React from "react";
import { useState } from "react";
import tedxuw_2023 from "../../res/images/tedxuw_2023.svg";
import mail from "../../res/images/mail.svg";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <header className="header">
        <div className="bottom-bar">
          <div className="bottom-bar__content">
            <a href="/" className="logo">
              <img className="logo__img" src={tedxuw_2023} alt="logo" />
            </a>

            <nav className="nav">
              <ul className="nav__list">
                <li className="nav__item">
                  <div class="dropdown">
                    <a className="nav__link" href="/Partners">
                      ABOUT
                    </a>
                    <div class="dropdown-content">
                      <a href="#">OUR STORY</a>
                      <a href="#">MEET THE TEAM</a>
                      <a href="#">PAST SPONSORS</a>
                    </div>
                  </div>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/Faq">
                    FAQ
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="/Partners">
                    SPONSORS
                  </a>
                </li>
                <li className="nav__item">
                  <a className="nav__link" href="https://medium.com/@tedxuw">
                    BLOG
                  </a>
                </li>
                <li className="nav__item">
                  <a className="btn" href="#">
                    SPONSOR US
                  </a>
                </li>
                <li className="nav__item">
                  <a className="mail-btn" href="#">
                    <img
                      style={{ width: 15, height: 15 }}
                      className="logo__img"
                      src={mail}
                      alt="logo"
                    />
                  </a>
                </li>
              </ul>
            </nav>

            <div className="hamburger">
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
