import React from "react";
import Container from "../Container/Container.jsx";
import IMG1 from "../../images/image-currency.jpg";
import IMG2 from "../../images/image-restaurant.jpg";
import IMG3 from "../../images/image-plane.jpg";
import IMG4 from "../../images/image-confetti.jpg";
import "./Articles.css";

function Articles() {
  return (
    <section className="articles">
      <Container className="container">
        <h2 className="articles__title"> Latest Articles</h2>
        <div className="articles__article">
          <img className="articles__article-img" src={IMG1} alt="" />
          <div className="articles__article-body">
            <p className="articles__article-author"> By Claire Robinson</p>
            <p className="articles__article-title">
              Receive money in any currency with no fees
            </p>
            <p className="articles__article-text">
              The world is getting smaller and we’re becoming more mobile. So
              why should you be forced to only receive money in a single …
            </p>
          </div>
        </div>
        <div className="articles__article">
          <img className="articles__article-img" src={IMG2} alt="" />
          <div className="articles__article-body">
            <p className="articles__article-author"> By Wilson Hutton</p>
            <p className="articles__article-title">
              Treat yourself without worrying about money
            </p>
            <p className="articles__article-text">
              Our simple budgeting feature allows you to separate out your
              spending and set realistic limits each month. That means you …
            </p>
          </div>
        </div>
        <div className="articles__article">
          <img className="articles__article-img" src={IMG3} alt="" />
          <div className="articles__article-body">
            <p className="articles__article-author"> By Wilson Hutton</p>
            <p className="articles__article-title">
              Take your Easybank card wherever you go
            </p>
            <p className="articles__article-text">
              We want you to enjoy your travels. This is why we don’t charge any
              fees on purchases while you’re abroad. We’ll even show you …
            </p>
          </div>
        </div>
        <div className="articles__article">
          <img className="articles__article-img" src={IMG4} alt="" />
          <div className="articles__article-body">
            <p className="articles__article-author"> By Claire Robinson</p>
            <p className="articles__article-title">
              Our invite-only Beta accounts are now live!
            </p>
            <p className="articles__article-text">
              After a lot of hard work by the whole team, we’re excited to
              launch our closed beta. It’s easy to request an invite through the
              site ...
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Articles;
