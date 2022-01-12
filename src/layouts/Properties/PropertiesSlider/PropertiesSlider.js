import Button from "components/Buttons/Button/Button";
import React from "react";
import styles from "./PropertiesSlider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation } from "swiper";
import SliderButtons from "components/Buttons/SliderButtons/SliderButtons";
SwiperCore.use([Navigation]);

function PropertiesSlider({
  images,
  title,
  desc,
  link = "/",
  btnText = "VIEW ALLS",
  reverse = false,
}) {
  let navigationPrevRef = React.useRef(null);
  let navigationNextRef = React.useRef(null);
  return (
    <div
      className={`${styles.propertySlider} ${reverse ? styles.reverse : ""}`}
    >
      <div className={styles.propertySlider_left}>
        <Swiper
          slidesPerView={2}
          freeMode={true}
          className="propertySlider"
          onSwiper={(swiper) => {
            setTimeout(() => {
              swiper.params.navigation.prevEl = navigationPrevRef.current;
              swiper.params.navigation.nextEl = navigationNextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            });
          }}
          navigation={{
            prevEl: navigationPrevRef.current,
            nextEl: navigationNextRef.current,
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className={styles.propertySlider_right}>
        <p className="fs-38px light-brown mb-10px weight-6">{title}</p>

        <p className="fs-18px weight-4 gray mb-40px">{desc}</p>

        <div className={`mb-50px ${styles.propertySlider_right_btn_wrap}`}>
          <Button title={btnText} to={link} />
        </div>

        <div className={styles.propertySliderButtons}>
          <SliderButtons
            prevRef={navigationPrevRef}
            nextRef={navigationNextRef}
          />
        </div>
      </div>
    </div>
  );
}

export default PropertiesSlider;
