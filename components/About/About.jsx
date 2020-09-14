import React from "react";
import Container from "../Container/Container.jsx";
import "./About.css";
import Icon1 from "../../images/icon-online.svg";
import Icon2 from "../../images/icon-budgeting.svg";
import Icon3 from "../../images/icon-onboarding.svg";
import Icon4 from "../../images/icon-api.svg";

function About() {
  return (
    <section className="about">
      <Container>
        <h2 className="about__title"> Why choose Easybank?</h2>
        <p className="about__paragraph">
          We leverage Open Banking to turn your bank account into your financial
          hub. Control your finances like never before.
        </p>
        <div className="about__item">
          <img className="about__item-img" src={Icon1} alt="item" />
          <h3 className="about__item-title"> Online Banking</h3>
          <p className="about__item-text">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="about__item">
          <img className="about__item-img" src={Icon2} alt="item" />
          <h3 className="about__item-title"> Simple Budgeting</h3>
          <p className="about__item-text">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="about__item">
          <img className="about__item-img" src={Icon3} alt="item" />
          <h3 className="about__item-title"> Fast Onboarding</h3>
          <p className="about__item-text">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="about__item">
          <img className="about__item-img" src={Icon4} alt="item" />
          <h3 className="about__item-title"> Open API</h3>
          <p className="about__item-text">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </Container>
    </section>
  );
}

export default About;
