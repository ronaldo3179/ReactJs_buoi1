import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Compoments/Header";
import Banner from "./Compoments/Banner";
import Items from "./Compoments/Item";
import Footer from "./Compoments/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <Header />
    <Banner />
    <Items />
    <Footer />
  </div>
);
