import React from "react";
import TitleBar from "../TitleBar/TitleBar";
import styles from "./TitleBarSideBySide.module.css";

function TitleBarSideBySide({
  tag,
  title,
  desc,
  variantNumber = 2,
  isCenter = false,
}) {
  return (
    <div className={styles.section}>
      <div
        className={`${styles.section_left} ${isCenter ? "text-center" : ""} `}
      >
        <div className="mb-10px">
          <TitleBar
            variantNumber={variantNumber}
            title={tag}
            isCenter={isCenter}
          />
        </div>
        <p className="light-brown fs-38px lh-1 weight-6 ">{title}</p>
      </div>
      <div className={styles.section_right}>
        <p className="fs-18px gray">{desc}</p>
      </div>
    </div>
  );
}

export default TitleBarSideBySide;
