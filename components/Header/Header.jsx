import React from "react";
import Logo from "../../images/logo.svg";
import "./Header.css";
import Container from "../Container/Container.jsx";

function Header() {
  return (
    <header className="header">
      <Container verticalAlign={true}>
        <img className="logo" src={Logo} alt="logo" />
        <nav>
          <ul className="header__nav">
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                Home
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                About
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                Contact
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                Blog
              </a>
            </li>
            <li className="header__nav-item">
              <a className="header__nav-link" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn">Request Invite</button>
      </Container>
    </header>
  );
}

export default Header;
