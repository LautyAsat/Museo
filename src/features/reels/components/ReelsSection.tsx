"use client";

import Section from "@/src/components/Section";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ReelsSection() {
  return (
    <Section className="mt-16 py-10">
      <div className="w-full h-16 bg-[url('/hash.svg')] bg-repeat-x bg-contain"></div>
      <div className="py-4">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          className="text-white"
        >
          <SwiperSlide>
            <figure className="w-full h-80 bg-gray-800 flex items-center justify-center"></figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="w-full h-80 bg-gray-800 flex items-center justify-center"></figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="w-full h-80 bg-gray-800 flex items-center justify-center"></figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="w-full h-80 bg-gray-800 flex items-center justify-center"></figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="w-full h-80 bg-gray-800 flex items-center justify-center"></figure>
          </SwiperSlide>
          <SwiperSlide>
            <figure className="w-full h-80 bg-gray-800 flex items-center justify-center"></figure>
          </SwiperSlide>
        </Swiper>
      </div>
      <div className="w-full h-16 bg-[url('/hash.svg')] bg-repeat-x bg-contain"></div>
    </Section>
  );
}
