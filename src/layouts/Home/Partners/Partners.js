import TitleBar from "components/Bars/TitleBar/TitleBar";
import React from "react";
import styles from "./Partners.module.css";
import partner1 from "assets/images/partner-1.png";
import partner2 from "assets/images/partner-2.png";
import partner3 from "assets/images/partner-3.png";
import partner4 from "assets/images/partner-4.png";
import partner5 from "assets/images/partner-5.png";
import partner6 from "assets/images/partner-6.png";

function Partners() {
  return (
    <div className="container-wrapper-2">
      <div className="mb-15px">
        <TitleBar title="artners" variantNumber={0} isCenter={true} />
        <p className="fs-38px weight-6 text-center light-brown">our partners</p>
      </div>

      <div className={styles.partners}>
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
        <img src={partner5} alt="" />
        <img src={partner6} alt="" />
      </div>
    </div>
  );
}

export default Partners;
