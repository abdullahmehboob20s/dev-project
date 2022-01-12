import Footer from "layouts/Footer/Footer";
import Header from "layouts/Header/Header";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import styles from "./About.module.css";
import aboutImg from "assets/images/about-img.png";
import DynamicTeam from "layouts/About/DynamicTeam/DynamicTeam";
import Providing from "layouts/About/Providing/Providing";
import Testimonials from "layouts/Home/Testimonials/Testimonials";
import Team from "layouts/Home/Team/Team";
import Contact from "layouts/Home/Contact/Contact";

function About() {
  return (
    <div>
      <Navbar />
      <div className="mb-100px">
        <Header title="About Us" from="Home" bgImg={aboutImg} />
      </div>
      <div className="mb-100px">
        <DynamicTeam />
      </div>
      <div className="mb-100px">
        <Providing />
      </div>

      <div className="mb-100px">
        <Testimonials />
      </div>
      <div className="mb-100px">
        <Team />
      </div>
      <div className="mb-100px">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default About;
