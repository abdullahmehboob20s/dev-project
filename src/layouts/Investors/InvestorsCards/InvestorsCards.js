import React from "react";
import styles from "./InvestorsCards.module.css";

import investorImg1 from "assets/images/investor-img-1.png";
import investorImg2 from "assets/images/investor-img-2.png";
import investorImg3 from "assets/images/investor-img-3.png";
import investorImg4 from "assets/images/investor-img-4.png";
import investorImg5 from "assets/images/investor-img-5.png";
import investorImg6 from "assets/images/investor-img-6.png";
import investorImg7 from "assets/images/investor-img-7.png";
import investorImg8 from "assets/images/investor-img-8.png";
import investorImg9 from "assets/images/investor-img-9.png";
import investorImg10 from "assets/images/investor-img-10.png";
import investorImg11 from "assets/images/investor-img-11.png";
import investorImg12 from "assets/images/investor-img-12.png";
import investorImg13 from "assets/images/investor-img-13.png";
import investorImg14 from "assets/images/investor-img-14.png";
import investorImg15 from "assets/images/investor-img-15.png";
import InvestorImgCard from "components/Cards/InvestorImgCard/InvestorImgCard";

function InvestorsCards() {
  return (
    <div className="container-wrapper-2">
      <div className="text-center mb-50px">
        <p className="fs-38px light-brown weight-6 lh-1 mb-15px">
          Our Investors
        </p>
        <p className="fs-18px gray weight-4">
          Hand selected, local experienced agents, and neighborhood specialists,
          work with you to achieve your goals. The highest level of market
          knowledge, transparency, technology utilization, and transaction
          experience.
        </p>
      </div>

      <div className={styles.investors}>
        <div>
          <InvestorImgCard img={investorImg1} />
          <InvestorImgCard img={investorImg6} />
          <InvestorImgCard img={investorImg11} />
        </div>
        <div>
          <InvestorImgCard img={investorImg2} />
          <InvestorImgCard img={investorImg7} />
          <InvestorImgCard img={investorImg12} />
        </div>
        <div>
          <InvestorImgCard img={investorImg3} />
          <InvestorImgCard img={investorImg8} />
          <InvestorImgCard img={investorImg13} />
        </div>
        <div>
          <InvestorImgCard img={investorImg4} />
          <InvestorImgCard img={investorImg9} />
          <InvestorImgCard img={investorImg14} />
        </div>
        <div>
          <InvestorImgCard img={investorImg5} />
          <InvestorImgCard img={investorImg10} />
          <InvestorImgCard img={investorImg15} />
        </div>
      </div>
    </div>
  );
}

export default InvestorsCards;
