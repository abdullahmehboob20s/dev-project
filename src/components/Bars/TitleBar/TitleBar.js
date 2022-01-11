import React from "react";
import styles from "./TitleBar.module.css";

function TitleBar({ title, variantNumber = 0, isCenter = true }) {
  const type = [styles.bothLines, styles.leftLine, styles.rightLine];
  const typeIndex = variantNumber;

  return (
    <div
      className={`${styles.titlebar} ${type[typeIndex]} ${
        isCenter ? styles.center : ""
      }`}
    >
      <p className="light-gray uppercase fs-16px weight-6 lh-1">{title}</p>
    </div>
  );
}

export default TitleBar;
