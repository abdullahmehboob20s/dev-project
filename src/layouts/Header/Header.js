import React from "react";
import styles from "./Header.module.css";
import { CgArrowLongRight } from "react-icons/cg";
import { Link } from "react-router-dom";
import propertyImg from "assets/images/property-img.png";

function Header() {
  return (
    <div className={styles.headerWrapper}>
      <div className={styles.header}>
        <div className="container-wrapper">
          <div className={styles.header_container}>
            <div className={styles.header_container_left}>
              <h1 className="uppercase fs-74px weight-7 black 10px">
                properties
              </h1>
              <div className={styles.pageFrom}>
                <Link to="/" className="fs-24px weight-7 uppercase black">
                  home
                </Link>
                <div className="flex">
                  <CgArrowLongRight size={40} />
                </div>
                <p className="fs-24px weight-7 uppercase sharp-brown">
                  properties
                </p>
              </div>
            </div>
            <div className={styles.header_container_right}>
              <img src={propertyImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
