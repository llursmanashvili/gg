import ImageGallery from "react-image-gallery";
import family1 from "./photos/familylux/familylux1.jpg";
import family2 from "./photos/familylux/familylux2.jpg";
import family3 from "./photos/familylux/familylux3.jpg";
import family4 from "./photos/familylux/familylux4.jpg";
import family5 from "./photos/familylux/familylux5.jpg";
import family6 from "./photos/familylux/familylux6.jpg";

import "./twin.scss";
import { useEffect } from "react";

import React, { Component } from "react";
const images = [
  {
    original: family1,
    thumbnail: family1,
  },
  {
    original: family2,
    thumbnail: family2,
  },
  {
    original: family3,
    thumbnail: family3,
  },
  {
    original: family4,
    thumbnail: family4,
  },
  {
    original: family5,
    thumbnail: family5,
  },
  {
    original: family6,
    thumbnail: family6,
  },
];

function Family() {
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
          <div class="bg"> 285 ლარი </div>
          <div class="fg"> 285 ლარი</div>
        </div>
      </div>
    </div>
  );
}
function Family1() {
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
          <div class="bg"> 285 GEL </div>
          <div class="fg"> 285 GEL</div>
        </div>
      </div>
    </div>
  );
}
function Family2() {
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
          <div class="bg"> 285 лари</div>
          <div class="fg"> 285 лари</div>
        </div>
      </div>
    </div>
  );
}
export { Family, Family1, Family2 };
