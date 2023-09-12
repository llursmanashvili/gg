import React, { useEffect } from "react";
import { MDBContainer, MDBCol, MDBRow } from "mdb-react-ui-kit";
import cafe1 from "./photos/cafe/cafe1.jpg";
import cafe3 from "./photos/cafe/cafe3.jpg";
import cafe4 from "./photos/cafe/cafe4.jpg";
import cafe6 from "./photos/cafe/cafe6.jpg";
import cafe7 from "./photos/cafe/cafe7.jpg";
import cafe8 from "./photos/cafe/cafe8.png";
import cafe9 from "./photos/cafe/cafe9.png";
import cafe11 from "./photos/cafe/cafe11.JPG";
import cafe12 from "./photos/cafe/cafe12.jpg";
import cafe13 from "./photos/cafe/cafe13.jpg";
import cafe14 from "./photos/cafe/cafe14.jpg";
import cafe15 from "./photos/cafe/cafe15.jpg";
import cafe16 from "./photos/cafe/cafe16.jpg";
import cafe17 from "./photos/cafe/cafe17.jpg";
import cafe18 from "./photos/cafe/cafe18.JPG";
import cafe19 from "./photos/cafe/cafe19.jpg";
import cafe20 from "./photos/cafe/cafe20.JPG";
import cafe21 from "./photos/cafe/cafe21.jpg";
import cafe24 from "./photos/cafe/cafe24.jpg";
import { QRCode, Space, theme } from "antd";
import { MDBIcon } from "mdbreact";
import AOS from "aos";
import "aos/dist/aos.css";
import "./cafe.css";
const { useToken } = theme;

function Cafe() {
  const { token } = useToken();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cafe">
      <div className="first">
        <h2 className="h2">მენიუს სანახავად დაასკანერეთ კოდი </h2>

        <Space>
          <QRCode
            color="#faad14"
            value="https://cafe-bargeorgiagold.kovzy.com/qr-menu?lang=1&fbclid=IwAR0UHKy5IT0hokAeP5so3BOSmEiaZ-6Kb6iqypCBimHPZ6pGgmKf_4SuagE&branch=1"
            className="qr"
          />
        </Space>
        <p></p>
        <p></p>
        <h3 className="h3">ან დააკლიკეთ ღილაკს</h3>
        <button class="golden-btn" style={{ fontSize: "1.3em" }}>
          <a
            className="aa"
            href="https://cafe-bargeorgiagold.kovzy.com/qr-menu?lang=1&fbclid=IwAR0UHKy5IT0hokAeP5so3BOSmEiaZ-6Kb6iqypCBimHPZ6pGgmKf_4SuagE&branch=1"
          >
            MENU
          </a>
        </button>
        <h3 className="h3">
          ასევე იხილეთ ჩვენი გალერეა{" "}
          <MDBIcon fas icon="arrow-alt-circle-down" />
        </h3>
      </div>
      <div className="container">
        <img className="cafeimg" data-aos="zoom-in" src={cafe1}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe3}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe4}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe8}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe9}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe6}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe7}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe11}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe12}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe13}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe14}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe15}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe16}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe17}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe18}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe19}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe20}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe21}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe24}></img>
      </div>
    </div>
  );
}
function Cafe1() {
  const { token } = useToken();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cafe">
      <div className="first">
        <h2 className="h2">scan QR code to see menu</h2>

        <Space>
          <QRCode
            color="#faad14"
            value="https://cafe-bargeorgiagold.kovzy.com/qr-menu?lang=1&fbclid=IwAR0UHKy5IT0hokAeP5so3BOSmEiaZ-6Kb6iqypCBimHPZ6pGgmKf_4SuagE&branch=1"
            className="qr"
          />
        </Space>
        <p></p>
        <p></p>
        <h3 className="h3">or click button </h3>
        <button class="golden-btn" style={{ fontSize: "1.3em" }}>
          <a
            className="aa"
            href="https://cafe-bargeorgiagold.kovzy.com/qr-menu?lang=1&fbclid=IwAR0UHKy5IT0hokAeP5so3BOSmEiaZ-6Kb6iqypCBimHPZ6pGgmKf_4SuagE&branch=1"
          >
            MENU
          </a>
        </button>
        <h3 className="h3">
          see our gallery <MDBIcon fas icon="arrow-alt-circle-down" />
        </h3>
      </div>
      <div className="container">
        <img className="cafeimg" data-aos="zoom-in" src={cafe1}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe3}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe4}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe8}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe9}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe6}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe7}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe11}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe12}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe13}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe14}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe15}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe16}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe17}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe18}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe19}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe20}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe21}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe24}></img>
      </div>
    </div>
  );
}
function Cafe2() {
  const { token } = useToken();
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="cafe">
      <div className="first">
        <h2 className="h2">отсканируйте QR-код, чтобы увидеть меню</h2>

        <Space>
          <QRCode
            color="#faad14"
            value="https://cafe-bargeorgiagold.kovzy.com/qr-menu?lang=1&fbclid=IwAR0UHKy5IT0hokAeP5so3BOSmEiaZ-6Kb6iqypCBimHPZ6pGgmKf_4SuagE&branch=1"
            className="qr"
          />
        </Space>
        <p></p>
        <p></p>
        <h3 className="h3">или нажмите кнопку</h3>
        <button class="golden-btn" style={{ fontSize: "1.3em" }}>
          <a
            className="aa"
            href="https://cafe-bargeorgiagold.kovzy.com/qr-menu?lang=1&fbclid=IwAR0UHKy5IT0hokAeP5so3BOSmEiaZ-6Kb6iqypCBimHPZ6pGgmKf_4SuagE&branch=1"
          >
            Меню
          </a>
        </button>
        <h3 className="h3">
          Посмотрите нашу галерею. <MDBIcon fas icon="arrow-alt-circle-down" />
        </h3>
      </div>
      <div className="container">
        <img className="cafeimg" data-aos="zoom-in" src={cafe1}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe3}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe4}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe8}></img>
        <img className="cafeimg" data-aos="zoom-in" src={cafe9}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe6}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe7}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe11}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe12}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe13}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe14}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe15}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe16}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe17}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe18}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe19}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe20}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe21}></img>
        <img className="cafeimgi" data-aos="zoom-in" src={cafe24}></img>
      </div>
    </div>
  );
}
export { Cafe, Cafe1, Cafe2 };
