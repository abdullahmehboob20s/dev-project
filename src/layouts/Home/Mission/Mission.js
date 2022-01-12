import TitleBarSideBySide from "components/Bars/TitleBarSideBySide/TitleBarSideBySide";
import React from "react";
import styles from "./Mission.module.css";
import missionImg1 from "assets/images/mission-img-1.png";
import missionImg2 from "assets/images/mission-img-2.png";
import missionImg3 from "assets/images/mission-img-3.png";
import missionImg4 from "assets/images/mission-img-4.png";
import missionImg5 from "assets/images/mission-img-5.png";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";
import useMediaQuery from "utils/hooks/useMediaQuery ";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation, Pagination } from "swiper";
import MissionSliderCard from "components/Cards/MissionSliderCard/MissionSliderCard";
SwiperCore.use([Navigation, Pagination]);

const sliderData = [
  {
    img: missionImg1,
    title: "Construction",
    desc: "Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. ",
  },
  {
    img: missionImg2,
    title: "Marketing",
    desc: "Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. ",
  },
  {
    img: missionImg3,
    title: "Investment",
    desc: "Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. ",
  },
  {
    img: missionImg4,
    title: "LEASING",
    desc: "Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. ",
  },
  {
    img: missionImg5,
    title: "Acquisition",
    desc: "Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. ",
  },
];

function Mission() {
  let navigationPrevRef = React.useRef(null);
  let navigationNextRef = React.useRef(null);
  const [swiperState, setSwiperState] = React.useState(null);
  const [swiperActiveIndex, setSwiperActiveIndex] = React.useState(0);
  const isBellowThousand = useMediaQuery("(max-width: 1000px)");
  const bringInViewParentRef = React.useRef(null);
  const bringInViewRef = React.useRef(null);

  React.useEffect(() => {
    bringInViewParentRef.current.scrollTo(
      bringInViewRef?.current?.offsetLeft -
        bringInViewRef?.current?.clientWidth,
      0
    );
  });

  return (
    <div className="container-wrapper-2">
      <div className="mb-50px">
        <TitleBarSideBySide
          tag="what we do?"
          title="Our mission is design & develop the best interior around"
          desc="Hand selected, local experienced agents, and neighborhood specialists, work with you to achieve your goals. The highest level of market knowledge, transparency, technology utilization, and transaction experience."
        />
      </div>

      <div className={styles.mission_slider}>
        <div className={styles.mission_slider_left} ref={bringInViewParentRef}>
          {sliderData.map((data, index) => (
            <p
              ref={swiperActiveIndex === index ? bringInViewRef : null}
              className={`${styles.sliderPoint} ${
                swiperActiveIndex === index ? styles.active : ""
              } pointer fs-24px uppercase weight-4 mb-20px`}
              onClick={() => swiperState?.slideTo(index)}
            >
              {index + 1}. {data.title}
            </p>
          ))}
        </div>
        <div className={styles.mission_slider_right}>
          <div className={styles.sliderControler}>
            <button ref={navigationPrevRef}>
              <IoIosArrowUp size={35} className="pointer light-gray" />
            </button>
            <div className="mission-slidrepagination"></div>
            <button ref={navigationNextRef}>
              <IoIosArrowDown size={35} className="pointer light-gray" />
            </button>
          </div>

          <Swiper
            direction={isBellowThousand ? "horizontal" : "vertical"}
            slidesPerView={1}
            className="missionSlider"
            onSlideChange={(swiper) => setSwiperActiveIndex(swiper.activeIndex)}
            onSwiper={(swiper) => {
              setSwiperState(swiper);
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
            pagination={{
              el: ".mission-slidrepagination",
              clickable: true,
              type: "bullets",
              bulletElement: "div",
              bulletClass: "mission-slider-bullet",
              bulletActiveClass: "mission-slider-bullet-active",
              renderBullet: (index, className) => {
                return `<div  class=${className}></div>`;
              },
            }}
          >
            {sliderData.map((data, index) => (
              <SwiperSlide>
                <MissionSliderCard data={data} index={index} key={index} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Mission;
