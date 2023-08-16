import React from "react";
import tedxuw_2023 from "../../res/images/tedxuw_2023.svg";
import mail from "../../res/images/mail.svg";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header-layout">
          <div className="header-section">
            <a href="/">
              <img src={tedxuw_2023} alt="logo" />
            </a>
            <nav>
              <ul className="nav-layout">
                <li className="nav-link">
                  <div class="dropdown">
                    <a className="nav__link" href="#">
                      ABOUT
                    </a>
                    <div class="dropdown-content">
                      <a href="/OurStory">OUR STORY</a>
                      <a href="/About">MEET THE TEAM</a>
                      <a href="/Partners">PAST SPONSORS</a>
                    </div>
                  </div>
                </li>
                <li className="nav-link">
                  <a href="/Faq">FAQ</a>
                </li>
                <li className="nav-link">
                  <a href="/Sponsors">SPONSORS</a>
                </li>
                <li className="nav-link">
                  <a href="/Blog">BLOG</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header-section">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScrEIkSgOQPhrP-fmzVf414Hu5qTMio_RJ4wGeb9pV5VrsMWw/viewform"
              className="nav-btn"
              target="_blank"
            >
              <span style={{ padding: "0 30px", textTransform: "uppercase" }}>
                Become a Speaker
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
