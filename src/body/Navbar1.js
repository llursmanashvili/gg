import React from "react";
import image1 from "./carousel/carousel2.JPG";
import PhotoAlbum from "react-photo-album";

import image5 from "./carousel/carousel6.jpg";
import image6 from "./carousel/carousel7.JPG";
import image7 from "./carousel/carousel8.JPG";

import { Image } from "antd";
import { Carousel } from "antd";
import "./Navbar1.css";

const Navbar1 = () => {
  return (
    <div>
      <Carousel autoplay effect="fade">
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
  );
};
export default Navbar1;
