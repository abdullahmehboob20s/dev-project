import React from "react";
import styles from "./LatestNewsCard.module.css";

function LatestNewsCard({ img, date, title }) {
  return (
    <div>
      <img src={img} className="w-full mb-10px" alt="" />
      <p className="fs-18px text-center weight-4 gray mb-10px">{date}</p>
      <p className="fs-24px black weight-4 text-center light-black">{title}</p>
    </div>
  );
}

export default LatestNewsCard;
