import styles from "./Properties.module.css";
import Header from "layouts/Header/Header";
import Navbar from "layouts/Navbar/Navbar";
import PropertiesSlider from "layouts/Properties/PropertiesSlider/PropertiesSlider";
import React from "react";
import propertyImg1 from "assets/images/property-img-1.png";
import propertyImg2 from "assets/images/property-img-2.png";
import LatestProjects from "layouts/Properties/LatestProjects/LatestProjects";
import LatestNews from "layouts/Properties/LatestNews/LatestNews";
import Contact from "layouts/Home/Contact/Contact";
import Footer from "layouts/Footer/Footer";
import propertyImg from "assets/images/property-img.png";

function Properties() {
  return (
    <div>
      <Navbar />
      <div className="mb-100px">
        <Header title="properties" from="home" img={propertyImg} />
      </div>
      <div className="mb-100px">
        <PropertiesSlider
          title="Ronald Reagan Crosing"
          desc="Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. The highest level of market knowledge, transparency, technology utilization, and transaction experience."
          images={[propertyImg1, propertyImg2, propertyImg1, propertyImg2]}
        />
      </div>
      <div className="mb-100px">
        <PropertiesSlider
          reverse={true}
          title="Prime Development"
          desc="Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. The highest level of market knowledge, transparency, technology utilization, and transaction experience."
          images={[propertyImg1, propertyImg2, propertyImg1, propertyImg2]}
        />
      </div>
      <div>
        <LatestProjects />
      </div>
      <div className="mb-100px">
        <LatestNews />
      </div>
      <div className="mb-70px">
        <Contact />
      </div>

      <Footer />
    </div>
  );
}

export default Properties;
