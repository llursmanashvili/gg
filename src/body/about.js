import ImageGallery from "react-image-gallery";
import lux from "./photos/luxs/luxs1.jpg";
import "./about.scss";
import { useEffect } from "react";

import React, { Component } from "react";
const images = [
  {
    original: lux,
    thumbnail: lux,
  },
  {
    original: "https://picsum.photos/id/1015/1000/600/",
    thumbnail: "https://picsum.photos/id/1015/250/150/",
  },
  {
    original: "https://picsum.photos/id/1019/1000/600/",
    thumbnail: "https://picsum.photos/id/1019/250/150/",
  },
];

function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="suite">
      <ImageGallery items={images} />
    </div>
  );
}
export default About;
