import React from "react";
import styles from "./Testimonials.module.css";
import TestimonialsImg1 from "assets/images/Testimonials-img-1.png";
import TestimonialsImg2 from "assets/images/Testimonials-img-2.png";
import TestimonialsImg3 from "assets/images/Testimonials-img-3.png";
import TitleBar from "components/Bars/TitleBar/TitleBar";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import SwiperCore, { Pagination } from "swiper";
SwiperCore.use([Pagination]);

const TestimonialImg = ({ img, featured = false }) => {
  return (
    <div className={styles.TestimonialImg}>
      <img src={img} alt="" />
      {featured ? (
        <div className={styles.featured}>
          <p className="lh-1">“</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

function Testimonials() {
  return (
    <div className="container-wrapper-2">
      <div className={styles.testimonials}>
        <div className={styles.testimonials_left}>
          <div className="mb-30px">
            <div className={styles.testimonials_images}>
              <TestimonialImg img={TestimonialsImg1} />
              <TestimonialImg img={TestimonialsImg2} featured={true} />
              <TestimonialImg img={TestimonialsImg3} />
            </div>
          </div>

          <p className="fs-24px gray weight-4 mb-35px">
            This is due to their excellent service, competitive pricing and
            customer support. It's throughly refresing to get such a personal
            touch. Duis aute lorem ipsum is simply.
          </p>

          <div>
            <p className="fs-24px light-brown weight-7 lh-1">Michel Jackson</p>
            <p className="fs-16px weight-4 gray">Satisfied Customers</p>
          </div>
        </div>

        <div className={styles.testimonials_right}>
          <div className="mb-15px">
            <TitleBar title="Testimonials" isCenter={false} variantNumber={2} />
          </div>

          <Swiper
            slidesPerView={1}
            pagination={true}
            className="testimonials_slider"
          >
            <SwiperSlide>
              <p className="fs-38px light-brown weight-6 lh-1_1">
                Collections from Our Customers.
              </p>
            </SwiperSlide>
            <SwiperSlide>
              <p className="fs-38px light-brown weight-6 lh-1_1">
                Collections from Our Customers.
              </p>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
