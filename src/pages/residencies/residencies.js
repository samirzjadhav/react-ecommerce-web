import React from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import data from "../../utilites/slider.json";

const residencies = () => {
  return (
    <section className="r-wrapper">
      <div className="padding innerWidth r-container">
        <div className="r-head flexColStart">
          <span>Best Choices</span>
          <span>Popular residencies</span>
        </div>
      </div>
    </section>
  );
};

export default residencies;
