import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Parallax } from "react-scroll-parallax";

const SwiperComponent = () => {
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      slidesPerView="auto"
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Parallax speed={-10}>
          <div className="slide">
            <img
              src="https://picsum.photos/id/237/800/300"
              alt=""
              className="h-full w-full rounded-lg object-cover align-middle"
            />
          </div>
        </Parallax>
      </SwiperSlide>
      <SwiperSlide>
        <Parallax speed={-10}>
          <div className="slide">
            <img
              src="https://picsum.photos/id/232/800/300"
              alt=""
              className="h-full w-full rounded-lg object-cover align-middle"
            />
          </div>
        </Parallax>
      </SwiperSlide>
      <SwiperSlide>
        <Parallax speed={-10}>
          <div className="slide">
            <img
              src="https://picsum.photos/id/234/800/300"
              alt=""
              className="h-full w-full rounded-lg object-cover align-middle"
            />
          </div>
        </Parallax>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
