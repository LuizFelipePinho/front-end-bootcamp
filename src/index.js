import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./Components/Header/Header";
import Navbar from "./Components/Navbar/Navbar";
import Section from "./Components/Section/Section";
import Collection from "./Components/Pages/Collection/Collection";
import Products from "./Components/Pages/Products/Products";
import Newsletter from "./Components/Pages/Newsletter/Newsletter";
import Carrinho from "./pages/Carrinho/Carrinho"
ReactDOM.render(
  <React.StrictMode>
    <Header />
    <Navbar />
    <Section />
    <Collection />
    <Products />
    <Newsletter />
  </React.StrictMode>,
  document.getElementById("root")
);
