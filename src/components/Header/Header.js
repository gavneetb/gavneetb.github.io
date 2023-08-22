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
                      <Link to="/Partners">PAST SPONSORS</Link>
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
                  <Link to="/Blog">BLOG</Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-section">
            <a
              href="https://bit.ly/registerTEDxUW2023"
              className="nav-btn"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span style={{ padding: "0 30px", textTransform: "uppercase" }}>
                Register for TEDxUW 2023!
              </span>
            </a>
            <a href="mailto:outreach@tedxuw.com" className="nav-btn">
              <img style={{ width: 15, height: 15 }} src={mail} alt="logo" />
            </a>
          </div>
        </div>
      </div>
    </div>
    // <header className='header'>
    //   <div>
    //     <a href='/' className='logo'>
    //       <img className='logo__img' src={tedxuw_2023} alt='logo' />
    //     </a>
    // <nav className='nav'>
    //   <ul className='nav__list'>
    //     <li className='nav__item'>
    //       <div class='dropdown'>
    //         <a className='nav__link' href='/Partners'>
    //           ABOUT
    //         </a>
    //         <div class='dropdown-content'>
    //           <a href='#'>OUR STORY</a>
    //           <a href='#'>MEET THE TEAM</a>
    //           <a href='#'>PAST SPONSORS</a>
    //         </div>
    //       </div>
    //     </li>
    //     <li className='nav__item'>
    //       <a className='nav__link' href='/Faq'>
    //         FAQ
    //       </a>
    //     </li>
    //     <li className='nav__item'>
    //       <a className='nav__link' href='/Partners'>
    //         SPONSORS
    //       </a>
    //     </li>
    //     <li className='nav__item'>
    //       <a className='nav__link' href='https://medium.com/@tedxuw'>
    //         BLOG
    //       </a>
    //     </li>
    //     <li className='nav__item'>
    //       <a className='btn' href='#'>
    //         SPONSOR US
    //       </a>
    //     </li>
    //     <li className='nav__item'>
    //       <button className='mail-btn' href='#'>
    //         <img style={{ width: 15, height: 15 }} src={mail} alt='logo' />
    //       </button>
    //     </li>
    //   </ul>
    // </nav>
    //   </div>

    //   <div className='hamburger'>
    //     <div className='bar'></div>
    //     <div className='bar'></div>
    //     <div className='bar'></div>
    //   </div>
    // </header>
  );
};

export default Header;
