import React from "react";
import Container from "../Container/Container.jsx";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <Container>
        <div className="banner__left-col">
          <h1 className="banner__left-col-title">
            Next generation digital banking
          </h1>
          <p className="banner__left-col-text">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
          <button className="btn">Request Invite</button>
        </div>
      </Container>
    </section>
  );
}

export default Banner;
