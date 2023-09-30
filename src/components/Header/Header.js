import React, { useState, useEffect } from "react";
import tedxuw_2023 from "../../res/images/tedxuw_2023.svg";
import mail from "../../res/images/mail.svg";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Move these lines to the top level
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <div className="header">
      <div className="container">
        <div className="header-layout">
          <div className="header-section">
            <Link to="/">
              <img src={tedxuw_2023} alt="logo" />
            </Link>

            <div className="hamburger" onClick={handleMenuToggle}>
              {isMenuOpen ? (
                <span>&times;</span>
              ) : (
                <>
                  <div className="bar"></div>
                  <div className="bar"></div>
                  <div className="bar"></div>
                </>
              )}
            </div>

            <nav className={`nav ${isMenuOpen ? "nav--open" : ""}`}>
              {isMenuOpen && (
                <div className="close-nav" onClick={handleMenuToggle}>
                  &times;
                </div>
              )}

              <ul className="nav-layout">
                {/* ... (rest of the navigation links) */}
                <li className="nav-link">
                  <div className="dropdown">
                    <Link className="nav__link" to="#">
                      ABOUT
                    </Link>
                    <div className="dropdown-content">
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

              {/* Buttons for mobile view inside hamburger menu */}
              {isMenuOpen && windowWidth <= 450 && (
                <>
                  <div className="header-section2">
                    <div
                      style={{
                        backgroundColor: "black",
                        padding: "10px 30px",
                        textTransform: "uppercase",
                        borderRadius: "20px",
                      }}
                    >
                      <a
                        href="https://drive.google.com/file/d/1QR0qKMLp_-ETpeV4scA28iE3bkmwxlIV/view"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{ color: "inherit", textDecoration: "none" }}
                      >
                        Click here for the pamphlet!
                      </a>
                    </div>
                  </div>
                  <div className="header-section2">
                    <a href="mailto:outreach@tedxuw.com" className="nav-btn">
                      <img
                        style={{ width: 15, height: 15 }}
                        src={mail}
                        alt="logo"
                      />
                    </a>
                  </div>
                </>
              )}
            </nav>
          </div>

          {/* Buttons for desktop view outside of hamburger menu */}
          {!isMenuOpen && window.innerWidth > 450 && (
            <>
              <div className="header-section2">
                <div
                  style={{
                    backgroundColor: "black",
                    padding: "10px 30px",
                    textTransform: "uppercase",
                    borderRadius: "20px",
                  }}
                >
                  <a
                    href="https://drive.google.com/file/d/1QR0qKMLp_-ETpeV4scA28iE3bkmwxlIV/view"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "inherit", textDecoration: "none" }}
                  >
                    Click here for the pamphlet!
                  </a>
                </div>
              </div>
              <div className="header-section2">
                <a href="mailto:outreach@tedxuw.com" className="nav-btn">
                  <img
                    style={{ width: 15, height: 15 }}
                    src={mail}
                    alt="logo"
                  />
                </a>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
