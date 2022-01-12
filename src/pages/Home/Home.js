import Footer from "layouts/Footer/Footer";
import Contact from "layouts/Home/Contact/Contact";
import Hero from "layouts/Home/Hero/Hero";
import Mission from "layouts/Home/Mission/Mission";
import Partners from "layouts/Home/Partners/Partners";
import Projects from "layouts/Home/Projects/Projects";
import Team from "layouts/Home/Team/Team";
import Testimonials from "layouts/Home/Testimonials/Testimonials";
import Navbar from "layouts/Navbar/Navbar";
import React from "react";
import styles from "./Home.module.css";

function Home() {
  return (
    <div>
      <Navbar />
      <div className="mb-150px">
        <Hero />
      </div>
      <div className="mb-150px">
        <Mission />
      </div>
      <div className="mb-150px">
        <Partners />
      </div>
      <div className="mb-150px">
        <Projects />
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

export default Home;
