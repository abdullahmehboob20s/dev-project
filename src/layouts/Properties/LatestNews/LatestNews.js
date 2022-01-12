import React from "react";
import styles from "./LatestNews.module.css";
import newsImg1 from "assets/images/news-img-1.png";
import newsImg2 from "assets/images/news-img-2.png";
import newsImg3 from "assets/images/news-img-3.png";
import LatestNewsCard from "components/Cards/latestNewsCard/LatestNewsCard";
import Button from "components/Buttons/Button/Button";
import pattrenVertical from "assets/images/pattren-vertical.png";

function LatestNews() {
  return (
    <div className="bg-lightest-white py-100px relative">
      <img src={pattrenVertical} className="pattren-left-top_center" alt="" />

      <div className="container-wrapper-2">
        <div className="mb-50px">
          <div className={`${styles.titles} `}>
            <h1 className="light-brown text-center fs-38px weight-6 mb-10px">
              Latest News
            </h1>
            <p className="text-center gray fs-18px weight-4 ">
              Hand selected, local experienced agents, and neighborhood
              specialists, work with you to achieve your goals. The highest
              level of market knowledge.
            </p>
          </div>
        </div>

        <div className={`${styles.latestNewsCards} mb-70px`}>
          <LatestNewsCard
            title="Start Of Installation Of Water & Heating"
            img={newsImg1}
            date="20 Apr, 2019"
          />
          <LatestNewsCard
            title="Installation Of Internal Engineering"
            img={newsImg2}
            date="20 Apr, 2019"
          />
          <LatestNewsCard
            title="Our Sales Office Holiday Schedule"
            img={newsImg3}
            date="20 Apr, 2019"
          />
        </div>

        <div className={styles.viewAllNews}>
          <Button title="view all news" bgVariant="btn-brown" />
        </div>
      </div>
    </div>
  );
}

export default LatestNews;
