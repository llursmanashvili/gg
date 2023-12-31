import React, { useRef, useState, useEffect } from "react";
import standart from "./photos/luxs/luxs1.jpg";
import { Card, Card1, Card2 } from "./card";
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
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Carousel className="carousel" autoplay effect="fade">
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image1}
              className="contentStyle"
            />
          </div>{" "}
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image5}
              className="contentStyle"
            />
          </div>
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image6}
              className="contentStyle"
            />
          </div>
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image7}
              className="contentStyle"
            />
          </div>
        </Carousel>
      </div>
      <Card />
      <div className="bookingo">
        {" "}
        <div className="booking">
          <Link to="https://www.booking.com/hotel/ge/georgia-gold.en-gb.html?aid=311984&label=georgia-gold-t0gXwN65gk%2Aj7wRB3w71mgS589009011118%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1707827740752%3Alp1007469%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcGt_tphEo8pAE6BwGOTZ3E&sid=51680a194d492e8df448b80f909b96c9&dest_id=-2327318;dest_type=city;dist=0;group_adults=1;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;srepoch=1692288148;srpvid=912870c657a201b6;type=total;ucfs=1&">
            <button className="bookingi">დაჯავშნეთ სასურველი ნომერი</button>
          </Link>
        </div>
      </div>{" "}
    </>
  );
};
const Navbar2 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Carousel className="carousel" autoplay effect="fade">
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image1}
              className="contentStyle"
            />
          </div>{" "}
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image5}
              className="contentStyle"
            />
          </div>
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image6}
              className="contentStyle"
            />
          </div>
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image7}
              className="contentStyle"
            />
          </div>
        </Carousel>
      </div>
      <Card1 />
      <div className="bookingo">
        {" "}
        <div className="booking">
          <Link to="https://www.booking.com/hotel/ge/georgia-gold.en-gb.html?aid=311984&label=georgia-gold-t0gXwN65gk%2Aj7wRB3w71mgS589009011118%3Apl%3Ata%3Ap1%3Ap2%3Aac%3Aap%3Aneg%3Afi%3Atikwd-1707827740752%3Alp1007469%3Ali%3Adec%3Adm%3Appccp%3DUmFuZG9tSVYkc2RlIyh9YcGt_tphEo8pAE6BwGOTZ3E&sid=51680a194d492e8df448b80f909b96c9&dest_id=-2327318;dest_type=city;dist=0;group_adults=1;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;srepoch=1692288148;srpvid=912870c657a201b6;type=total;ucfs=1&">
            <button className="bookingi">book your suite</button>
          </Link>
        </div>
      </div>
    </>
  );
};
const Navbar3 = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div>
        <Carousel className="carousel" autoplay effect="fade">
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image1}
              className="contentStyle"
            />
          </div>{" "}
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image5}
              className="contentStyle"
            />
          </div>
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image6}
              className="contentStyle"
            />
          </div>
          <div>
            <Image
              alt="hotel georgia gold"
              fallback={image7}
              className="contentStyle"
            />
          </div>
        </Carousel>
      </div>
      <Card2 />
      <div className="bookingo">
        {" "}
        <div className="booking">
          <Link to="https://www.booking.com/hotel/ge/georgia-gold.ru.html?aid=311984&label=georgia-gold-t0gXwN65gk%2Aj7wRB3w71mgS589009011118%253Apl%253Ata%253Ap1%253Ap2%253Aac%253Aap%253Aneg%253Afi%253Atikwd-1707827740752%253Alp1007469%253Ali%253Adec%253Adm%253Appccp%253DUmFuZG9tSVYkc2RlIyh9YcGt_tphEo8pAE6BwGOTZ3E&sid=197a903bb62a87a7a246e70ddbcda15e&dest_id=-2327318;dest_type=city;dist=0;group_adults=1;group_children=0;hapos=1;hpos=1;no_rooms=1;req_adults=1;req_children=0;room1=A;sb_price_type=total;sr_order=popularity;srepoch=1695551813;srpvid=b7694a9de7b8001b;type=total;ucfs=1&#hotelTmpl">
            <button className="bookingi">Забронируйте номер</button>
          </Link>
        </div>
      </div>
    </>
  );
};
export { Navbar1, Navbar2, Navbar3 };
