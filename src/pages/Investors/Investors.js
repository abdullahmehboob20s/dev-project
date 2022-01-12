import Footer from "layouts/Footer/Footer";
import Header from "layouts/Header/Header";
import Contact from "layouts/Home/Contact/Contact";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import styles from "./Investors.module.css";
import investorsImg from "assets/images/investors-img.png";
import InvestorsCards from "layouts/Investors/InvestorsCards/InvestorsCards";

function Investors() {
  return (
    <div>
      <Navbar />
      <div className="mb-100px">
        <Header title="investors" from="Home" img={investorsImg} />
      </div>

      <div className="mb-150px">
        <InvestorsCards />
      </div>

      <div className="mb-100px">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default Investors;
