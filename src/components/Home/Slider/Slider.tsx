"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import "./slider.css";

export default function Slider() {
  return (
    <Swiper
      modules={[Pagination,Autoplay]}
      pagination={{
        clickable: true,
      }}
      spaceBetween={20}
      slidesPerView={1}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      loop={true}
      className="home-slider"
    >
      <SwiperSlide>
        <div className="slide slide1">
          <h1>RESİM 1</h1>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide slide2">
          <h1>RESİM 2</h1>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="slide slide3">
          <h1>RESİM 3</h1>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}