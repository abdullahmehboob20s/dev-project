import React from "react";
import styles from "./MissionSliderCard.module.css";

function MissionSliderCard({ data, index }) {
  return (
    <div className={styles.missionSlide}>
      <img src={data.img} alt="" />

      <div className={styles.missionSlide_content}>
        <p className="fs-20px weight-7 light-brown uppercase mb-5px">
          {index + 1}. {data.title}
        </p>
        <p className="fs-16px gray weight-4">{data.desc}</p>
      </div>
    </div>
  );
}

export default MissionSliderCard;
