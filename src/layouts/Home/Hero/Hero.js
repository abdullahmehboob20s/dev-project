import Button from "components/Buttons/Button/Button";
import React from "react";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero_wrapper}>
      <div className={styles.hero}>
        <div className="container-wrapper">
          <div className={styles.heroTitles}>
            <h1 className="fs-74px black weight-3 lh-1 uppercase mb-20px">
              Beautiful Place{" "}
              <span className="weight-7 brown">With Inspired Livings.</span>
            </h1>
            <p className="fs-24px black weight-7 uppercase mb-40px">
              Best Architectures With Family-Friendly Environmen
            </p>

            <div className={styles.herobtns}>
              <Button title="Learn More" bgVariant="btn-brown" />
              <Button title="get in touch" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
