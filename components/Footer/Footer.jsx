import React from "react";
import Container from "../Container/Container.jsx";
import Logo from "../../images/logo-footer.svg";
import IconF from "../../images/icon-facebook.svg";
import IconT from "../../images/icon-twitter.svg";
import IconY from "../../images/icon-youtube.svg";
import IconI from "../../images/icon-instagram.svg";
import IconP from "../../images/icon-pinterest.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container alignStretch={true}>
        <div className="footer__col-left">
          <div className="footer__wrapper-logo">
            <img className="logo logo-white" src={Logo} alt="logo" />
          </div>
          <div className="footer__networks-container">
            <img className="footer__network-img" src={IconF} alt="facebook" />
            <img className="footer__network-img" src={IconY} alt="youtube" />
            <img className="footer__network-img" src={IconT} alt="twitter" />
            <img className="footer__network-img" src={IconP} alt="pinterest" />
            <img className="footer__network-img" src={IconI} alt="instagram" />
          </div>
        </div>
        <div className="footer__col-center">
          <a href="#" className="footer__col-center-link">
            About Us
          </a>
          <a href="#" className="footer__col-center-link">
            Careers
          </a>
          <a href="#" className="footer__col-center-link">
            Contact
          </a>
          <a href="#" className="footer__col-center-link">
            Support
          </a>
          <a href="#" className="footer__col-center-link">
            Blog
          </a>
          <a href="#" className="footer__col-center-link">
            Privacy Policy
          </a>
        </div>
        <div className="footer__col-right">
          <div className="footer__col-right-wp-btn">
            <button className="btn">Request Invite</button>
          </div>
          <div className="footer__col-right-wp-rights">
            <span className="footer__rights">
              © Easybank. All Rights Reserved
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
