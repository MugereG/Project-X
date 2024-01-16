import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-bottom">
        <div className="container">

          <p className="copyright">
            &copy; 2022 <a href="">Mugere-G</a>. All rights reserved
          </p>

          <ul className="footer-bottom-list">

            <li>
              <a href="#" className="footer-bottom-link">Privacy Policy</a>
            </li>

            <li>
              <a href="#" className="footer-bottom-link">Terms & Condition</a>
            </li>

            <li>
              <a href="#" className="footer-bottom-link">FAQ</a>
            </li>

          </ul>

        </div>
      </div>

    </footer>
  );
};

export default Footer;
