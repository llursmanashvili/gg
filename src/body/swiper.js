import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import "swiper/css/autoplay";

import React, { useRef, useState } from "react";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import fitness from "./photos/fitness/fitness1.jpg";
import fitness1 from "./photos/fitness/fitness2.jpg";
import fitness2 from "./photos/fitness/fitness3.jpg";
import fitness3 from "./photos/fitness/fitness4.jpg";
import fitness4 from "./photos/fitness/fitness5.JPG";
import fitness5 from "./photos/fitness/fitness6.JPG";
import fitness6 from "./photos/fitness/fitness7.jpeg";
import fitness7 from "./photos/fitness/fitness8.jpeg";
import fitness8 from "./photos/fitness/fitness9.jpeg";
import fitness9 from "./photos/fitness/fitness10.jpeg";
import fitness10 from "./photos/fitness/fitness11.JPG";
import fitness11 from "./photos/fitness/fitness13.jpg";
export default function Npp() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        effect={"fade"}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiperi"
        style={{
          width: "85%",
          height: "450px",
          borderRadius: "5px",
        }}
      >
        <SwiperSlide style={{ height: "100%" }}>
          <img alt="hotel georgia gold" src={fitness11} />
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <img alt="hotel georgia gold" src={fitness} />
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <img alt="hotel georgia gold" src={fitness1} />
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <img alt="hotel georgia gold" src={fitness6} />
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <img alt="hotel georgia gold" src={fitness7} />
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <img alt="hotel georgia gold" src={fitness8} />
        </SwiperSlide>

        <SwiperSlide style={{ height: "100%" }}>
          <img alt="hotel georgia gold" src={fitness2} />
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <img alt="hotel georgia gold" src={fitness3} />
        </SwiperSlide>
        <SwiperSlide style={{ height: "100%" }}>
          <img alt="hotel georgia gold" src={fitness4} />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
