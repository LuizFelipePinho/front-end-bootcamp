import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Components/Shared/Header/Header";
import Navbar from "./Components/Shared/Navbar/Navbar";
import Section from "./Components/Shared/Section/Section";
import Collection from "./Components/Pages/Collection/Collection";
import Slider from "./Components/Pages/Slider/Slider";
import Footer from "./Components/Shared/Footer/Footer";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Section />
    <Collection />
    <Slider />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
