import React from "react";
import styles from "./SliderButtons.module.css";
import {
  HiOutlineArrowNarrowRight,
  HiOutlineArrowNarrowLeft,
} from "react-icons/hi";

function SliderButtons({ prevRef, nextRef }) {
  return (
    <>
      <button
        className={`pointer ${styles.button} ${styles.left}`}
        ref={prevRef}
      >
        <HiOutlineArrowNarrowLeft size={40} />
      </button>

      <button
        className={`pointer ${styles.button} ${styles.right}`}
        ref={nextRef}
      >
        <HiOutlineArrowNarrowRight size={40} />
      </button>
    </>
  );
}

export default SliderButtons;
