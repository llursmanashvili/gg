import React from "react";
import image from "./hotel13.jpg";
import { Image } from "antd";
import { Carousel } from "antd";
import "./Navbar1.css";

const Navbar1 = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <Carousel autoplay effect="fade">
      <div>
        <Image fallback={image} className="contentStyle" />
      </div>
      <div>
        <Image fallback={image} className="contentStyle" />
      </div>{" "}
      <div>
        <Image fallback={image} className="contentStyle" />
      </div>{" "}
      <div>
        <Image fallback={image} className="contentStyle" />
      </div>
    </Carousel>
  );
};
export default Navbar1;
