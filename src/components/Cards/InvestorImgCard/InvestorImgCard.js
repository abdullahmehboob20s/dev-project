import React from "react";
import styles from "./InvestorImgCard.module.css";

function InvestorImgCard({ img }) {
  return (
    <div className={styles.card}>
      <img src={img} alt="" />
    </div>
  );
}

export default InvestorImgCard;
