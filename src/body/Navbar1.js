import React, { useRef, useState } from "react";
import standart from "./photos/luxs/luxs1.jpg";
import Card from "./card";
// Import Swiper styles
import "swiper/css";
import "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Link } from "react-router-dom";
import "./Navbar1.css";

// import required modules
import image1 from "./carousel/carousel2.JPG";

import image5 from "./carousel/carousel6.jpg";
import image6 from "./carousel/carousel7.JPG";
import image7 from "./carousel/carousel8.JPG";

import { Image } from "antd";
import { Carousel } from "antd";

const Navbar1 = () => {
  return (
    <>
      <div>
        <Carousel className="carousel" autoplay effect="fade">
          <div>
            <Image fallback={image1} className="contentStyle" />
          </div>{" "}
          <div>
            <Image fallback={image5} className="contentStyle" />
          </div>
          <div>
            <Image fallback={image6} className="contentStyle" />
          </div>
          <div>
            <Image fallback={image7} className="contentStyle" />
          </div>
        </Carousel>
      </div>
      <Card />
    </>
  );
};
export default Navbar1;
