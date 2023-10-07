import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import hotel1 from "./photos/hotel/hotel6.jpg";
import hotel2 from "./photos/hotel/hotel16.JPG";
import hotel3 from "./photos/hotel/hotel7.jpg";
import hotel4 from "./photos/hotel/hotel19.jpeg";
import hotel5 from "./photos/hotel/hotel20.jpeg";
import hotel6 from "./photos/hotel/hotel5.jpg";
import hotel7 from "./photos/hotel/hotel18.JPG";
import hotel8 from "./photos/hotel/hotel21.jpg";
import hotel9 from "./photos/hotel/hotel10.jpg";
import hotel10 from "./photos/cafe/cafe2.jpg";
import hotel11 from "./photos/cafe/cafe1.jpg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import "./about.css";

// import required modules
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import { delay } from "framer-motion";

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Swiper
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel2} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel3} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel4} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel5} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel6} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel7} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel8} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel9} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel10} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel11} />
        </SwiperSlide>
      </Swiper>
      <h1 className="h1">
        სასტუმრო „Georgia Gold”-ში ყველაფერია სტუმრების კომფორტული
        დასვენებისთვის: ▪️სტუმართმოყვარე გუნდი ▪️ელეგანტური გარემო ▪️
        სტანდარტული, ლუქსი, საოჯახო და საპრეზიდენტო ტიპის ნომრები ▪️ გორში
        ყველაზე დიდი საცურაო აუზი ▪️ კაფე-ბარი, არაჩვეულებრივი კერძებით,
        სასმელებითა და დესერტებით ▪️ საკონფერენციო სივრცე ▪️ სატრანსპორტო
        მომსახურება ▪️ სპორტულ გამაჯანსაღებელი ვარჯიშები (იოგა, აკვა აერობიკა და
        ფიტნეს აერობიკა) ▪️ ულამაზესი ისტორიული ხედები სასტუმრო მდებარეობს
        ქალაქის ცენტრში, ყველასთვის ცნობილ და მოსახერხებელ ადგილას: ქ. გორი,
        სტალინის 26ა
      </h1>
    </>
  );
}
function Abouten() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Swiper
        autoplay={{ delay: 2000 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel2} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel3} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel4} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel5} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel6} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel7} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel8} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel9} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel10} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel11} />
        </SwiperSlide>
      </Swiper>
      <h1 className="h1">
        Hotel "Georgia Gold" has everything for a comfortable rest of the
        guests: ▪️hospitable team ▪️elegant environment ▪️ standard, suite,
        family and presidential type rooms ▪️ the largest swimming pool in Gori
        ▪️ cafe-bar with extraordinary dishes, drinks and desserts ▪️ conference
        space ▪️ transport Services ▪️ sports fitness exercises (yoga, aqua
        aerobics and fitness aerobics) ▪️ beautiful historical views The hotel
        is located in the center of the city, in a well-known and convenient
        place for everyone: st. <b>Gori, Stalini 26a</b>
      </h1>
    </>
  );
}
function Aboutru() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Swiper
        autoplay={{ delay: 2000 }}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel1} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel2} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel3} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel4} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel5} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel6} />
        </SwiperSlide>
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel7} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel8} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel9} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel10} />
        </SwiperSlide>{" "}
        <SwiperSlide>
          <img alt="hotel georgia gold" src={hotel11} />
        </SwiperSlide>
      </Swiper>
      <h1 className="h1">
        В отеле "Georgia Gold" есть все для комфортного отдыха гостей: ▪️
        гостеприимная команда ▪️ элегантная обстановка ▪️ стандартные, люксовые,
        семейные и президентские номера ▪️ самый большой бассейн в Гори ▪️
        кафе-бар с необыкновенными блюдами, напитками и десертами ▪️
        конференц-зал ▪️ транспортные услуги ▪️ спортивные фитнес-упражнения
        (йога, аква-аэробика и фитнес-аэробика) ▪️ красивые исторические виды
        Отель расположен в центре города, в известном и удобном для всех месте:
        св. <b>Гори, Сталини 26а</b>
      </h1>
    </>
  );
}
export { About, Abouten, Aboutru };
