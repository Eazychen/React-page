import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const images = [
  "/images/swiper-1.jpg",
  "/images/swiper-2.jpg",
  "/images/swiper-3.jpg",
  "/images/swiper-4.jpg",
  "/images/swiper-5.jpg",
];

const SwiperComponent = () => {
  return (
    <div className="bg-gray-200">
      <div className="mt-14 pb-5 lg:mt-20">
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          slidesPerView="auto"
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper shadow-xl"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="flex items-center justify-center transition-opacity duration-300"
            >
              <img
                src={image}
                alt={`Slide${index}`}
                className="max-h-[200px] w-full object-cover opacity-90 md:max-h-[400px] xl:max-h-[600px]"
                loading="lazy"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SwiperComponent;
