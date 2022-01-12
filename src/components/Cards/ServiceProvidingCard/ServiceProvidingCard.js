import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { Link } from "react-router-dom";
import styles from "./ServiceProvidingCard.module.css";

function ServiceProvidingCard({ img, title, desc, link = "/" }) {
  return (
    <div className={styles.serviceProvidingCard}>
      <img src={img} className="w-full" alt="" />
      <div className={styles.content}>
        <p className="fs-28px light-brown weight-6 lh-1_1 mb-10px">{title}</p>
        <p className="fs-18px gray weight-4 mb-25px">{desc}</p>

        <Link to={link} className="fs-18px light-brown weight-7 pointer">
          <p>read more</p>
          <BsArrowRightShort size={30} />
        </Link>
      </div>
    </div>
  );
}

export default ServiceProvidingCard;
