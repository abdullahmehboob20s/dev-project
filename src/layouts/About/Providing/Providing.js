import TitleBar from "components/Bars/TitleBar/TitleBar";
import React from "react";
import styles from "./Providing.module.css";
import serviceProvidingImg1 from "assets/images/service-providing-img-1.png";
import serviceProvidingImg2 from "assets/images/service-providing-img-2.png";
import serviceProvidingImg3 from "assets/images/service-providing-img-3.png";
import serviceProvidingImg4 from "assets/images/service-providing-img-4.png";
import ServiceProvidingCard from "components/Cards/ServiceProvidingCard/ServiceProvidingCard";

function Providing() {
  return (
    <div className="bg-lightest-white py-70px">
      <div className="container-wrapper-2">
        <div className="text-center mb-50px">
          <TitleBar title="Best Service" />
          <p className="fs-38px weight-6 light-brown">Service We Provide</p>
        </div>

        <div className={styles.cards}>
          <ServiceProvidingCard
            img={serviceProvidingImg1}
            title="Business Consultancy"
            desc="Describe your home online and get your appraisal in 5 minutes."
            link="/"
          />
          <ServiceProvidingCard
            img={serviceProvidingImg2}
            title="Business Planing"
            desc="Describe your home online and get your appraisal in 5 minutes."
            link="/"
          />
          <ServiceProvidingCard
            img={serviceProvidingImg3}
            title="Our Marketing Analaysis"
            desc="Describe your home online and get your appraisal in 5 minutes."
            link="/"
          />
          <ServiceProvidingCard
            img={serviceProvidingImg4}
            title="Properties Development"
            desc="Describe your home online and get your appraisal in 5 minutes."
            link="/"
          />
        </div>
      </div>
    </div>
  );
}

export default Providing;
