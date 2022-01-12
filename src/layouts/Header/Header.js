import React from "react";
import styles from "./Header.module.css";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import pattrenHorizontal from "assets/images/pattren-horizontal.png";

function Header({ title, from, img, bgImg }) {
  return (
    <div className={styles.headerWrapper}>
      <img src={pattrenHorizontal} className="pattren-bottom" alt="" />
      <div className={styles.header}>
        <div className="container-wrapper">
          <div className={styles.header_container}>
            <div className={styles.header_container_left}>
              <h1 className="uppercase fs-74px weight-7 black 10px">{title}</h1>
              <div className={styles.pageFrom}>
                <Link to="/" className="fs-24px weight-7 uppercase black">
                  {from}
                </Link>
                <div className="flex">
                  <CgArrowLongRight size={40} />
                </div>
                <p className="fs-24px weight-7 uppercase sharp-brown">
                  {title}
                </p>
              </div>
            </div>
            {img ? (
              <div className={styles.header_container_right}>
                <img src={img} alt="" />
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      {bgImg ? <img src={bgImg} className={styles.bgImg} alt="" /> : ""}
    </div>
  );
}

export default Header;
