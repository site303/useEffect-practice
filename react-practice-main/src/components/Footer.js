import React from 'react';
import facebook from '../img/facebook.svg';
import youtube from '../img/youtube.svg';
import insta from '../img/instagram.svg';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__tex-container">
            <ul className="footer__list-items">
              <li className="footer__list-item">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque fuga nihil assumenda a voluptatibus, quaerat recusandae natus vero quod?</p>
              </li>
              <li className="footer__list-item">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam cum nihil ducimus provident! Dolorem consequatur quaerat </p>
              </li>
              <li className="footer__list-item">
                <h3>Lorem, ipsum dolor.</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla officiis dolorum harum magnam nihil </p>
              </li>
            </ul>
          </div>
          <div className="footer__social-container">
            <ul>
              <li><a href="#"><img src={facebook} alt="facebook" /></a></li>
              <li><a href="#"><img src={youtube} alt="youtube" /></a></li>
              <li><a href="#"><img src={insta} alt="instagram" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
