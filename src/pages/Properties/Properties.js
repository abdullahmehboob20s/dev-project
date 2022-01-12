import Header from "layouts/Header/Header";
import Navbar from "layouts/Navbar/Navbar";
import PropertiesSlider from "layouts/Properties/PropertiesSlider/PropertiesSlider";
import React from "react";
import styles from "./Properties.module.css";
import propertyImg1 from "assets/images/property-img-1.png";
import propertyImg2 from "assets/images/property-img-2.png";

function Properties() {
  return (
    <div>
      <Navbar />
      <div className="mb-100px">
        <Header />
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
    </div>
  );
}

export default Properties;
