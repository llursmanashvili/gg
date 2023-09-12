import ImageGallery from "react-image-gallery";
import double1 from "./photos/luxs/luxs1.jpg";
import double2 from "./photos/luxs/luxs2.jpg";
import double3 from "./photos/luxs/luxs3.jpg";
import double4 from "./photos/luxs/luxs4.jpg";
import double5 from "./photos/luxs/luxs5.jpg";
import double6 from "./photos/luxs/luxs6.jpg";
import double7 from "./photos/luxs/luxs7.jpg";
import double8 from "./photos/luxs/luxs8.jpg";
import double9 from "./photos/luxs/luxs9.jpg";

import "./twin.scss";
import { useEffect } from "react";

import React, { Component } from "react";
const images = [
  {
    original: double1,
    thumbnail: double1,
  },
  {
    original: double2,
    thumbnail: double2,
  },
  {
    original: double3,
    thumbnail: double3,
  },
  {
    original: double4,
    thumbnail: double4,
  },
  {
    original: double5,
    thumbnail: double5,
  },
  {
    original: double6,
    thumbnail: double6,
  },
  {
    original: double7,
    thumbnail: double7,
  },
  {
    original: double8,
    thumbnail: double8,
  },
  {
    original: double9,
    thumbnail: double9,
  },
];

function Double() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="suites">
      <div className="suite">
        <ImageGallery items={images} />
      </div>
      <div className="worth">
        {" "}
        <h1 className="h2">ფასი:</h1>
        <div class="wrapper">
          {" "}
          <div class="bg"> 185 ლარი </div>
          <div class="fg"> 185 ლარი</div>
        </div>
      </div>
    </div>
  );
}
function Double1() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="suites">
      <div className="suite">
        <ImageGallery items={images} />
      </div>
      <div className="worth">
        {" "}
        <h1 className="h2">PRICE:</h1>
        <div class="wrapper">
          {" "}
          <div class="bg"> 185 GEL </div>
          <div class="fg"> 185 GEL</div>
        </div>
      </div>
    </div>
  );
}
function Double2() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="suites">
      <div className="suite">
        <ImageGallery items={images} />
      </div>
      <div className="worth">
        {" "}
        <h1 className="h2">цена:</h1>
        <div class="wrapper">
          {" "}
          <div class="bg">185 лари</div>
          <div class="fg">185 лари</div>
        </div>
      </div>
    </div>
  );
}
export { Double, Double1, Double2 };
