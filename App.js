import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header.jsx";
import Banner from "./components/Banner/Banner.jsx";
import MockupsImage from "./components/MockupsImage/MockupsImage.jsx";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage.jsx";
import About from "./components/About/About.jsx";
import Articles from "./components/Articles/Articles.jsx";
import Footer from "./components/Footer/Footer.jsx";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <MockupsImage />
      <BackgroundImage />
      <About />
      <Articles />
      <Footer />
    </>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
