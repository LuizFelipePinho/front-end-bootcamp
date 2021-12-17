import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Components/Shared/Header/Header";
import Pages from './Components/Pages/Pages'
import Footer from './Components/Shared/Footer/Footer';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Pages/>
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
