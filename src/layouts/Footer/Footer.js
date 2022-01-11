import React from "react";
import styles from "./Footer.module.css";
import logo from "assets/images/logo.png";

function Footer() {
  return (
    <div className={styles.footerWrapper}>
      <div className="container-wrapper">
        <div className={styles.footer}>
          <img src={logo} alt="" />

          <div className={styles.languages}>
            <p className="fs-18px weight-7 light-brown">EN</p>
            <p className="fs-18px weight-7 gray">FR</p>
            <p className="fs-18px weight-7 gray">DE</p>
          </div>

          <div>
            <p className="fs-18px weight-5 gray">
              © <span className="weight-7">Primedeveloper</span>. All Rights
              Resevered
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
