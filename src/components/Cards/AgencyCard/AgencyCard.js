import React from "react";
import styles from "./AgencyCard.module.css";

function AgencyCard({ icon, title, desc }) {
  return (
    <div>
      <img src={icon} className="mb-10px" alt="" />
      <p className="fs-28px weight-6 mb-15px lh-1_1 light-brown">{title}</p>
      <p className="fs-18px weight-4 gray">{desc}</p>
    </div>
  );
}

export default AgencyCard;
