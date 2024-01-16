import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="header-bottom">
        <div className="container">

        <img src="/wellness.png" alt="Logo" className='logo'/>

          <nav className="navbar" data-navbar>

            <div className="navbar-top">

              <Link to="/" className="logo">
                <img src="./assets/images/logo-blue.svg" alt="Clinic logo" />
              </Link>

              <button className="nav-close-btn" aria-label="Close Menu" data-nav-close-btn>
                <ion-icon name="close-outline"></ion-icon>
              </button>

            </div>

            <ul className="navbar-list"> 

              <li>
                <Link to="/" className="navbar-link" data-nav-link>home</Link>
              </li>

              <li>
                <Link to="/aboutus" className="navbar-link" data-nav-link>about us</Link>
              </li>

              <li>
                <Link to="/services" className="navbar-link" data-nav-link>our services</Link>
              </li>

              <li>
                <Link to="/blog" className="navbar-link" data-nav-link>blog</Link>
              </li>

              <li>
                <Link to="/gallery" className="navbar-link" data-nav-link>gallery</Link>
              </li>

              <li>
                <Link to="/contact" className="navbar-link" data-nav-link>contact us</Link>
              </li>

            </ul>

          </nav>

          <ul className="social-list">

            <li>
              <a href="https://api.whatsapp.com/send?phone=254707752571" target="_blank" rel="noopener noreferrer">
                <img src="./whatsapp.png" alt="WhatsApp Logo" className="logo-image" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src="./instagram.png" alt="Instagram Logo" className="logo-image" />
              </a>
            </li>

            <li>
              <a href="#">
                <img src="./call.png" alt="Phonecall Logo" className="logo-image" />
              </a>
            </li>

          </ul>

        </div>
      </div>
    </header>
  );
};

export default Header;
