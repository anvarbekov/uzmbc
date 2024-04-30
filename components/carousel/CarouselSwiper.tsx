"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import Link from "next/link";

export default function CarouselSwiper() {
  return (
    <div className="swiper__inner">
      <Swiper loop={true} navigation={true} className="mySwiper">
        <SwiperSlide>
          <img
            className="swiper__img"
            src="/images/banner-1.jpeg"
            alt="Banner 1"
          />
          <div className="swiper__bg"></div>
          <div className="swiper__img-info">
            <h2>Multi Business Company</h2>
            <Link href={"/contact"}>
              <button className="button type1"></button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiper__img"
            src="/images/banner-2.jpg"
            alt="Banner 2"
          />
          <div className="swiper__bg"></div>
          <div className="swiper__img-info">
            <h2>Multi Business Company</h2>
            <Link href={"/contact"}>
              <button className="button type1"></button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="swiper__img"
            src="/images/banner-3.jpg"
            alt="Banner 3"
          />
          <div className="swiper__bg"></div>
          <div className="swiper__img-info">
            <h2>Multi Business Company</h2>
            <Link href={"/contact"}>
              <button className="button type1"></button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
