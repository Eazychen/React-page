import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
      style={{ minHeight: "500px" }}
    >
      <SwiperSlide>
        <div style={{ backgroundColor: "lightblue", minHeight: "500px" }}>
          Slide1
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundColor: "lightcoral", minHeight: "500px" }}>
          Slide 2
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div style={{ backgroundColor: "lightgreen", minHeight: "500px" }}>
          Slide 3
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
