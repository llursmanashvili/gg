import ImageGallery from "react-image-gallery";
import doubletwin1 from "./photos/standart/standartroom1.jpg";
import doubletwin2 from "./photos/standart/standartroom2.jpg";
import doubletwin3 from "./photos/standart/standartroom3.jpg";
import doubletwin4 from "./photos/standart/standartroom4.jpg";
import doubletwin5 from "./photos/standart/standartroom5.jpg";
import doubletwin6 from "./photos/standart/standartroom6.jpg";

import "./twin.scss";
import { useEffect } from "react";

import React, { Component } from "react";
const images = [
  {
    original: doubletwin1,
    thumbnail: doubletwin1,
  },
  {
    original: doubletwin2,
    thumbnail: doubletwin2,
  },
  {
    original: doubletwin3,
    thumbnail: doubletwin3,
  },
  {
    original: doubletwin4,
    thumbnail: doubletwin4,
  },
  {
    original: doubletwin5,
    thumbnail: doubletwin5,
  },
  {
    original: doubletwin6,
    thumbnail: doubletwin6,
  },
];

function Doubletwin() {
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
          <div class="bg"> 145 ლარი </div>
          <div class="fg"> 145 ლარი</div>
        </div>
      </div>
    </div>
  );
}
function Doubletwin1() {
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
          <div class="bg"> 145 GEL </div>
          <div class="fg"> 145 GEL</div>
        </div>
      </div>
    </div>
  );
}
function Doubletwin2() {
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
        <h1 className="h2">Цена:</h1>
        <div class="wrapper">
          {" "}
          <div class="bg"> 145 лари</div>
          <div class="fg"> 145 лари</div>
        </div>
      </div>
    </div>
  );
}

export { Doubletwin, Doubletwin1, Doubletwin2 };
