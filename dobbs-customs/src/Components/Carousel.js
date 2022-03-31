import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Carousel.css";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default function Carousel() {
  return (
    <>
      <Swiper
        speed={2000}
        spaceBetween={300}
        centeredSlides={true}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="/pictures/pic8.jpg" alt="pic8"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pictures/pic2.jpg" alt="pic2"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pictures/pic1.jpg" alt="pic1"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pictures/pic3.jpg" alt="pic3"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pictures/pic5.jpg" alt="pic5"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pictures/pic6.jpg" alt="pic6"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pictures/pic7.jpg" alt="pic7"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pictures/pic4.jpg" alt="pic4"></img>
        </SwiperSlide>
        <SwiperSlide>
          <img src="/pictures/pic9.jpg" alt="pic9"></img>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
