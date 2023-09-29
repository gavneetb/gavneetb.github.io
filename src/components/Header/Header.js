import React from "react";
import tedxuw_2023 from "../../res/images/tedxuw_2023.svg";
import mail from "../../res/images/mail.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-layout">
          <div className="header-section">
            <Link to="/">
              <img src={tedxuw_2023} alt="logo" />
            </Link>
            <nav>
              <ul className="nav-layout">
                <li className="nav-link">
                  <div class="dropdown">
                    <Link className="nav__link" to="#">
                      ABOUT
                    </Link>
                    <div class="dropdown-content">
                      <Link to="/OurStory">OUR STORY</Link>
                      <Link to="/About">MEET THE TEAM</Link>
                      {/* <Link to="/Partners">PAST SPONSORS</Link> */}
                    </div>
                  </div>
                </li>
                <li className="nav-link">
                  <Link to="/Faq">FAQ</Link>
                </li>
                <li className="nav-link">
                  <Link to="/Sponsors">SPONSORS</Link>
                </li>
                <li className="nav-link">
                  <Link to="/Speakers">SPEAKERS</Link>
                </li>
                <li className="nav-link">
                  <Link to="/Blog">BLOG</Link>
                </li>
                <li className="nav-link">
                  <Link to="/Schedule">SCHEDULE</Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* <div className="header-section">
            <div
              style={{
                backgroundColor: "black",
                padding: "10px 30px",
                textTransform: "uppercase",
                borderRadius: "20px",
              }}
            >
              {" "}
              <Link to="/#conference-schedule">Click for Schedule!</Link>
            </div>
          </div> */}
          <div className="header-section">
            <a href="mailto:outreach@tedxuw.com" className="nav-btn">
              <img style={{ width: 15, height: 15 }} src={mail} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
