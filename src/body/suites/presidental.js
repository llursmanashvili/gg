import ImageGallery from "react-image-gallery";
import presidental1 from "./photos/presidentallux/presidentallux1.jpg";
import presidental2 from "./photos/presidentallux/presidentallux2.jpg";
import presidental3 from "./photos/presidentallux/presidentallux3.jpg";
import "./twin.scss";
import { useEffect } from "react";

import React, { Component } from "react";
const images = [
  {
    original: presidental1,
    thumbnail: presidental1,
  },
  {
    original: presidental2,
    thumbnail: presidental2,
  },
  {
    original: presidental3,
    thumbnail: presidental3,
  },
];

function Presidental() {
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
          <div class="bg"> 385 ლარი </div>
          <div class="fg"> 385 ლარი</div>
        </div>
      </div>
    </div>
  );
}
export default Presidental;
