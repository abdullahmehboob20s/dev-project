import React from "react";
import styles from "./LatestProjects.module.css";

import projectImg1 from "assets/images/project-img-1.png";
import projectImg2 from "assets/images/project-img-2.png";
import projectImg3 from "assets/images/project-img-3.png";
import projectImg4 from "assets/images/project-img-4.png";

import pattrenHorizontal from "assets/images/pattren-horizontal.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Navigation } from "swiper";
import ProjectCard from "components/Cards/ProjectCard/ProjectCard";
import SliderButtons from "components/Buttons/SliderButtons/SliderButtons";
SwiperCore.use([Navigation]);

function LatestProjects() {
  let navigationPrevRef = React.useRef(null);
  let navigationNextRef = React.useRef(null);
  return (
    <div className="bg-dark-blue py-50px relative">
      <img src={pattrenHorizontal} className="pattren-top_left" alt="" />

      <div className="mb-60px">
        <div className="container-wrapper">
          <div className={styles.titles}>
            <h1 className="light-brown text-center fs-38px weight-6 mb-20px">
              Latest Projects
            </h1>

            <p className="text-center fs-18px white weight-4 ">
              Our estate agents will help you to choose the perfect location for
              the home of your dream or you can look through the gallery of new
              residential complexes by yourself
            </p>
          </div>
        </div>
      </div>

      <div className="mb-70px relative ">
        <img src={pattrenHorizontal} className="pattren-bottom" alt="" />

        <div
          style={{ paddingBottom: "15px" }}
          className={styles.latestProjectCards}
        >
          <Swiper
            slidesPerView={4}
            spaceBetween={30}
            className="lastesProjectsSlider"
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
            breakpoints={{
              1200: {
                slidesPerView: 4,
              },
              800: {
                slidesPerView: 3,
              },
              500: {
                slidesPerView: 2,
              },
              200: {
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              <ProjectCard
                img={projectImg1}
                title="Triangle Concrete House On lake"
                link="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                img={projectImg4}
                title="Triangle Concrete House On lake"
                link="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                img={projectImg3}
                title="Triangle Concrete House On lake"
                link="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                img={projectImg4}
                title="Triangle Concrete House On lake"
                link="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                img={projectImg1}
                title="Triangle Concrete House On lake"
                link="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                img={projectImg4}
                title="Triangle Concrete House On lake"
                link="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                img={projectImg3}
                title="Triangle Concrete House On lake"
                link="/"
              />
            </SwiperSlide>
            <SwiperSlide>
              <ProjectCard
                img={projectImg4}
                title="Triangle Concrete House On lake"
                link="/"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className={styles.sliderBtns}>
        <SliderButtons
          prevRef={navigationPrevRef}
          nextRef={navigationNextRef}
        />
      </div>
    </div>
  );
}

export default LatestProjects;
