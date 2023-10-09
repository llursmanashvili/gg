import React, { useRef, useState, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Table } from "antd";
import { Space } from "antd";
import Npp from "./swiper";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";

import "./fitness.css";

function Fitness() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      key: "1",
      დღე: "MONDAY",
      დრო: "13:00, 19:00, 20:00",
      რაოდენობა: "თვეში 8 ვიზიტი",
      ფასი: "70 ₾",
    },
    {
      key: "2",
      დღე: "სამშაბათი",
      დრო: "13:00, 20:00 ",
      რაოდენობა: "თვეში 12 ვიზიტი",
      ფასი: "100 ₾",
    },
    {
      key: "3",
      დღე: "ოთხშაბათი",
      დრო: "13:00, 19:00, 20:00",
    },
    {
      key: "4",
      დღე: "ხუთშაბათი",
      დრო: "13:00, 20:00",
    },
    {
      key: "4",
      დღე: "პარასკევი",
      დრო: "13:00, 19:00, 20:00",
    },
  ];

  const columns = [
    {
      title: "დღე",
      dataIndex: "დღე",
      key: "დღე",
    },
    {
      title: "დრო",
      dataIndex: "დრო",
      key: "დრო",
    },
    {
      title: "რაოდენობა",
      dataIndex: "რაოდენობა",
      key: "რაოდენობა",
    },

    {
      title: "ფასი",
      dataIndex: "ფასი",
      key: "ფასი",
    },
  ];
  const data1 = [
    {
      key: "1",
      დღე: "MONDAY",
      დრო: "11:30, 18:30, 21:00",
      რაოდენობა: "8 შესვლა თვეში",
      ფასი: "40 ₾",
    },
    {
      key: "2",
      დღე: "სამშაბათი",
      დრო: "21:00",
      რაოდენობა: "12 შესვლა თვეში",
      ფასი: "60 ₾",
    },
    {
      key: "3",
      დღე: "ოთხშაბათი",
      დრო: "11:30, 18:30, 21:00",
    },
    {
      key: "4",
      დღე: "ხუთშაბათი",
      დრო: "21:00",
    },
    {
      key: "4",
      დღე: "პარასკევი",
      დრო: "11:30, 18:30, 21:00",
    },
  ];

  const columns1 = [
    {
      title: "დღე",
      dataIndex: "დღე",
      key: "დღე",
    },
    {
      title: "დრო",
      dataIndex: "დრო",
      key: "დრო",
    },
    {
      title: "რაოდენობა",
      dataIndex: "რაოდენობა",
      key: "რაოდენობა",
    },

    {
      title: "ფასი",
      dataIndex: "ფასი",
      key: "ფასი",
    },
  ];
  const data2 = [
    {
      key: "1",
      დღე: "სამშაბათი",
      დრო: "20:00",
      რაოდენობა: "8 სესია თვეში",
      ფასი: "60 ₾",
    },
    {
      key: "2",
      დღე: "ხუთშაბათი",
      დრო: " 20:00",
    },
  ];

  const columns2 = [
    {
      title: "დღე",
      dataIndex: "დღე",
      key: "დღე",
    },
    {
      title: "დრო",
      dataIndex: "დრო",
      key: "დრო",
    },
    {
      title: "რაოდენობა",
      dataIndex: "რაოდენობა",
      key: "რაოდენობა",
    },

    {
      title: "ფასი",
      dataIndex: "ფასი",
      key: "ფასი",
    },
  ];

  const data3 = [
    {
      key: "1",
      დღე: "ორშაბათი",
      დრო: "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      რაოდენობა: "4 შესვლა თვეში",
      ფასი: "60 ₾",
      ფას: "70 ₾",
    },
    {
      key: "2",
      დღე: "სამშაბათი",
      დრო: "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      რაოდენობა: "8 შესვლა თვეში",
      ფასი: "90 ₾",
      ფას: "130 ₾",
    },
    {
      key: "3",
      დღე: "ოთხშაბათი",
      დრო: "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      რაოდენობა: "12 შესვლა თვეში",
      ფასი: "110 ₾",
      ფას: "160 ₾",
    },
    {
      key: "4",
      დღე: "ხუთშაბათი",
      დრო: "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      რაოდენობა: "16 შესვლა თვეში",
      ფასი: "150 ₾",
      ფას: "190 ₾",
    },
    {
      key: "4",
      დღე: "პარასკევი",
      დრო: "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
    },
    {
      key: "4",
      დღე: "შაბათი",
      დრო: "07:00;  08:00;  09:00;  10:00;  12:00;  14:00;  20:00;  21:00;  22:00;  23:00",
    },
    {
      key: "4",
      დღე: "კვირა",
      დრო: "09:00;  10:00;  11:00;  12:00;  14:00;  15:00;  16:00;  17:00;  18:00;  20:00;  21:00;  22:00;  23:00",
    },
  ];

  const columns3 = [
    {
      title: "დღე",
      dataIndex: "დღე",
      key: "დღე",
    },
    {
      title: "დრო",
      dataIndex: "დრო",
      key: "დრო",
    },
    {
      title: "რაოდენობა",
      dataIndex: "რაოდენობა",
      key: "რაოდენობა",
    },

    {
      title: "ფასი",
      dataIndex: "ფასი",
      key: "ფასი",
    },
    {
      title: "ფასი (17+)",
      dataIndex: "ფას",
      key: "ფას",
    },
  ];
  const data4 = [
    {
      key: "1",
      ".": "ქალების თავისუფალი ცურვა      ",
      ორშ: "✘",
      სამშ: "19:00      ",
      ოთხშ: "✘",
      ხუთშ: "19:00      ",
      პარ: "✘",
      შაბ: "13:00, 19:00      ",
      კვი: "13:00, 19:00      ",
      დრო: "13:00, 19:00, 20:00",
      რაოდენობა: "თვეში 8 ვიზიტი",
      ფასი: "70 ₾",
    },
    {
      key: "2",
      ".": "17 წლამდე ცურვის შემსწავლელი ჯგუფები      ",
      დრო: "13:00, 20:00 ",
      ორშ: "11:00, 15:00, 16:00, 17:00",
      სამშ: "11:00, 15:00, 16:00, 17:00",
      ოთხშ: "11:00, 15:00, 16:00, 17:00",
      ხუთშ: "11:00, 15:00, 16:00, 17:00",
      პარ: "11:00, 15:00, 16:00, 17:00",
      შაბ: "11:00, 15:00, 16:00, 17:00",
      კვი: "✘",

      რაოდენობა: "თვეში 12 ვიზიტი",
      ფასი: "100 ₾",
    },
    {
      key: "2",
      ".": "სპორტული ჯგუფი      ",
      დრო: "13:00, 20:00 ",
      ორშ: "18:00",
      სამშ: "18:00",
      ოთხშ: "18:00",
      ხუთშ: "18:00",
      პარ: "18:00",
      შაბ: "18:00",
      კვი: "✘",

      რაოდენობა: "თვეში 12 ვიზიტი",
      ფასი: "100 ₾",
    },
  ];

  const columns4 = [
    {
      title: ".",
      dataIndex: ".",
      key: ".",
    },
    {
      title: "ორშ",
      dataIndex: "ორშ",
      key: "ორშ",
    },
    {
      title: "სამშ",
      dataIndex: "სამშ",
      key: "სამშ",
    },
    {
      title: "ოთხშ",
      dataIndex: "ოთხშ",
      key: "ოთხშ",
    },
    {
      title: "ხუთშ",
      dataIndex: "ხუთშ",
      key: "ხუთშ",
    },
    {
      title: "პარ",
      dataIndex: "პარ",
      key: "პარ",
    },
    {
      title: "შაბ",
      dataIndex: "შაბ",
      key: "შაბ",
    },
    {
      title: "კვი",
      dataIndex: "კვი",
      key: "კვი",
    },
  ];
  return (
    <>
      <Npp />
      <h1 className="h1"> აუზი</h1>
      <Table
        className="tableo"
        columns={columns3}
        dataSource={data3}
        pagination={false}
      />
      <Table
        className="tablei"
        columns={columns4}
        dataSource={data4}
        pagination={false}
      />
      <h1 className="h1"> აკვა აერობიკა</h1>
      <Table
        className="table"
        columns={columns}
        dataSource={data}
        pagination={false}
      />

      <h1 className="h1"> ფიტნეს აერობიკა</h1>
      <Table
        className="table"
        columns={columns1}
        dataSource={data1}
        pagination={false}
      />

      <h1 className="h1"> იოგა</h1>
      <Table
        className="table"
        columns={columns2}
        dataSource={data2}
        pagination={false}
      />
    </>
  );
}
function Fitnessen() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      key: "1",
      DAY: "Monday",
      TIME: "13:00, 19:00, 20:00",
      NUMBER: "8 Entry in a month",
      PRICE: "70 GEL",
    },
    {
      key: "2",
      DAY: "Tuesday",
      TIME: "13:00, 20:00 ",
      NUMBER: "12 Entry in a month",
      PRICE: "100 GEL",
    },
    {
      key: "3",
      DAY: "Wednesday",
      TIME: "13:00, 19:00, 20:00",
    },
    {
      key: "4",
      DAY: "Thursday",
      TIME: "13:00, 20:00",
    },
    {
      key: "4",
      DAY: "Friday",
      TIME: "13:00, 19:00, 20:00",
    },
  ];

  const columns = [
    {
      title: "DAY",
      dataIndex: "DAY",
      key: "DAY",
    },
    {
      title: "TIME",
      dataIndex: "TIME",
      key: "TIME",
    },
    {
      title: "NUMBER",
      dataIndex: "NUMBER",
      key: "NUMBER",
    },

    {
      title: "PRICE",
      dataIndex: "PRICE",
      key: "PRICE",
    },
  ];
  const data1 = [
    {
      key: "1",
      DAY: "Monday",
      TIME: "11:30, 18:30, 21:00",
      NUMBER: "8 Entry in a month",
      PRICE: "40 GEL",
    },
    {
      key: "2",
      DAY: "Tuesday",
      TIME: " 21:00 ",
      NUMBER: "12 Entry in a month",
      PRICE: "60 GEL",
    },
    {
      key: "3",
      DAY: "Wednesday",

      TIME: "11:30, 18:30, 21:00",
    },
    {
      key: "4",
      DAY: "Thursday",
      TIME: " 21:00",
    },
    {
      key: "4",
      DAY: "Friday",
      TIME: "11:30, 18:30, 21:00",
    },
  ];

  const columns1 = [
    {
      title: "DAY",
      dataIndex: "DAY",
      key: "DAY",
    },
    {
      title: "TIME",
      dataIndex: "TIME",
      key: "TIME",
    },
    {
      title: "NUMBER",
      dataIndex: "NUMBER",
      key: "NUMBER",
    },

    {
      title: "PRICE",
      dataIndex: "PRICE",
      key: "PRICE",
    },
  ];
  const data2 = [
    {
      key: "1",
      DAY: "Tuesday",
      TIME: " 20:00",
      NUMBER: "8 Entry in a month",
      PRICE: "60 GEL",
    },
    {
      key: "2",
      DAY: "Thursday",
      TIME: " 20:00 ",
    },
  ];

  const columns2 = [
    {
      title: "DAY",
      dataIndex: "DAY",
      key: "DAY",
    },
    {
      title: "TIME",
      dataIndex: "TIME",
      key: "TIME",
    },
    {
      title: "NUMBER",
      dataIndex: "NUMBER",
      key: "NUMBER",
    },

    {
      title: "PRICE",
      dataIndex: "PRICE",
      key: "PRICE",
    },
  ];
  const data3 = [
    {
      key: "1",
      DAY: "MONDAY",
      TIME: "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      NUMBER: "4  Entry in a month",
      PRICE: "60 ₾",
      PRIC: "70 ₾",
    },
    {
      key: "2",
      DAY: "TUESDAY",
      TIME: "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      NUMBER: "8  Entry in a month",
      PRICE: "90 ₾",
      PRIC: "130 ₾",
    },
    {
      key: "3",
      DAY: "WEDNESDAY",
      TIME: "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      NUMBER: "12  Entry in a month",
      PRICE: "110 ₾",
      PRIC: "160 ₾",
    },
    {
      key: "4",
      DAY: "THURSDAY",
      TIME: "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      NUMBER: "16  Entry in a month",
      PRICE: "150 ₾",
      PRIC: "190 ₾",
    },
    {
      key: "4",
      DAY: "FRIDAY",
      TIME: "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
    },
    {
      key: "4",
      DAY: "SATURDAY",
      TIME: "07:00;  08:00;  09:00;  10:00;  12:00;  14:00;  20:00;  21:00;  22:00;  23:00",
    },
    {
      key: "4",
      DAY: "SUNDAY",
      TIME: "09:00;  10:00;  11:00;  12:00;  14:00;  15:00;  16:00;  17:00;  18:00;  20:00;  21:00;  22:00;  23:00",
    },
  ];

  const columns3 = [
    {
      title: "DAY",
      dataIndex: "DAY",
      key: "DAY",
    },
    {
      title: "TIME",
      dataIndex: "TIME",
      key: "TIME",
    },
    {
      title: "NUMBER",
      dataIndex: "NUMBER",
      key: "NUMBER",
    },

    {
      title: "PRICE",
      dataIndex: "PRICE",
      key: "PRICE",
    },
    {
      title: "PRIC (17+)",
      dataIndex: "PRIC",
      key: "PRIC",
    },
  ];
  const data4 = [
    {
      key: "1",
      ".": "Women's freestyle swimming",
      MON: "✘",
      TUE: "19:00      ",
      WED: "✘",
      THU: "19:00      ",
      FRI: "✘",
      SAT: "13:00, 19:00      ",
      SUN: "13:00, 19:00      ",
      დრო: "13:00, 19:00, 20:00",
      რაოდენობა: "თვეში 8 ვიზიტი",
      ფასი: "70 ₾",
    },
    {
      key: "2",
      ".": "Under 17 swimming groups     ",
      დრო: "13:00, 20:00 ",
      MON: "11:00, 15:00, 16:00, 17:00",
      TUE: "11:00, 15:00, 16:00, 17:00",
      WED: "11:00, 15:00, 16:00, 17:00",
      THU: "11:00, 15:00, 16:00, 17:00",
      FRI: "11:00, 15:00, 16:00, 17:00",
      SAT: "11:00, 15:00, 16:00, 17:00",
      SUN: "✘",

      რაოდენობა: "თვეში 12 ვიზიტი",
      ფასი: "100 ₾",
    },
    {
      key: "2",
      ".": "Sports group   ",
      დრო: "13:00, 20:00 ",
      MON: "18:00",
      TUE: "18:00",
      WED: "18:00",
      THU: "18:00",
      FRI: "18:00",
      SAT: "18:00",
      SUN: "✘",

      რაოდენობა: "თვეში 12 ვიზიტი",
      ფასი: "100 ₾",
    },
  ];

  const columns4 = [
    {
      title: ".",
      dataIndex: ".",
      key: ".",
    },
    {
      title: "MON",
      dataIndex: "MON",
      key: "MON",
    },
    {
      title: "TUE",
      dataIndex: "TUE",
      key: "TUE",
    },
    {
      title: "WED",
      dataIndex: "WED",
      key: "WED",
    },
    {
      title: "THU",
      dataIndex: "THU",
      key: "THU",
    },
    {
      title: "FRI",
      dataIndex: "FRI",
      key: "FRI",
    },
    {
      title: "SAT",
      dataIndex: "SAT",
      key: "SAT",
    },
    {
      title: "SUN",
      dataIndex: "SUN",
      key: "SUN",
    },
  ];
  return (
    <>
      <Npp />
      <h1 className="h1">POOL</h1>
      <Table
        className="tableo"
        columns={columns3}
        dataSource={data3}
        pagination={false}
      />
      <Table
        className="tablei"
        columns={columns4}
        dataSource={data4}
        pagination={false}
      />
      <Space
        style={{
          width: "100%",
          margin: "2px",
        }}
      ></Space>
      <h1 className="h1">Aqua Aerobics</h1>
      <Table
        className="table"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Space
        style={{
          width: "100%",
        }}
      ></Space>
      <h1 className="h1">Fitness Aerobics</h1>
      <Table
        className="table"
        columns={columns1}
        dataSource={data1}
        pagination={false}
      />
      <Space
        style={{
          width: "100%",
          margin: "2px",
        }}
      ></Space>
      <h1 className="h1">Yoga</h1>
      <Table
        className="table"
        columns={columns2}
        dataSource={data2}
        pagination={false}
      />
    </>
  );
}
function Fitnessru() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const data = [
    {
      key: "1",
      День: "Понедельник",
      Время: "13:00, 19:00, 20:00",
      Количество: "8 посещений в месяц",
      Цена: "70 лари",
    },
    {
      key: "2",
      День: "Вторник",
      Время: "13:00, 20:00 ",
      Количество: "12 посещений в месяц",
      Цена: "100 лари",
    },
    {
      key: "3",
      День: "Среда",
      Время: "13:00, 19:00, 20:00",
    },
    {
      key: "4",
      День: "Четверг",
      Время: "13:00, 20:00",
    },
    {
      key: "5",
      День: "Пятница",
      Время: "13:00, 19:00, 20:00",
    },
  ];

  const columns = [
    {
      title: "День",
      dataIndex: "День",
      key: "День",
    },
    {
      title: "Время",
      dataIndex: "Время",
      key: "Время",
    },
    {
      title: "Количество",
      dataIndex: "Количество",
      key: "Количество",
    },

    {
      title: "Цена",
      dataIndex: "Цена",
      key: "Цена",
    },
  ];
  const data1 = [
    {
      key: "1",
      День: "Понедельник",
      Время: "11:30, 18:30, 21:00 ",
      Количество: "8 посещений в месяц",
      Цена: "40 лари",
    },
    {
      key: "2",
      День: "Вторник",
      Время: " 21:00",
      Количество: "12 посещений в месяц",
      Цена: "60 лари",
    },
    {
      key: "3",
      День: "Среда",
      Время: "11:30, 18:30, 21:00 ",
    },
    {
      key: "4",
      День: "Четверг",
      Время: "21:00",
    },
    {
      key: "4",
      День: "Пятница",
      Время: "11:30, 18:30, 21:00 ",
    },
  ];

  const columns1 = [
    {
      title: "День",
      dataIndex: "День",
      key: "День",
    },
    {
      title: "Время",
      dataIndex: "Время",
      key: "Время",
    },
    {
      title: "Количество",
      dataIndex: "Количество",
      key: "Количество",
    },

    {
      title: "Цена",
      dataIndex: "Цена",
      key: "Цена",
    },
  ];
  const data2 = [
    {
      key: "1",
      День: "Вторник",
      Время: "20:00",
      Количество: "8 посещений в месяц",
      Цена: "60 лари",
    },
    {
      key: "2",
      День: "Четверг",
      Время: " 20:00 ",
    },
  ];

  const columns2 = [
    {
      title: "День",
      dataIndex: "День",
      key: "День",
    },
    {
      title: "Время",
      dataIndex: "Время",
      key: "Время",
    },
    {
      title: "Количество",
      dataIndex: "Количество",
      key: "Количество",
    },

    {
      title: "Цена",
      dataIndex: "Цена",
      key: "Цена",
    },
  ];
  const data3 = [
    {
      key: "1",
      День: "	понедельник",
      Время:
        "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      Количество: "4 посещений в месяц",
      Цена: "60 ₾",
      Цен: "70 ₾",
    },
    {
      key: "2",
      День: "вторник",
      Время:
        "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      Количество: "8 посещений в месяц",
      Цена: "90 ₾",
      Цен: "130 ₾",
    },
    {
      key: "3",
      День: "среда",
      Время:
        "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      Количество: "12 посещений в месяц",
      Цена: "110 ₾",
      Цен: "160 ₾",
    },
    {
      key: "4",
      День: "четверг",
      Время:
        "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
      Количество: "16 посещений в месяц",
      Цена: "150 ₾",
      Цен: "190 ₾",
    },
    {
      key: "4",
      День: "пятница",
      Время:
        "07:00;  08:00;  09:00;  10:00;  12:00; 14:00;  21:00;  22:00;  23:00",
    },
    {
      key: "4",
      День: "суббота",
      Время:
        "07:00;  08:00;  09:00;  10:00;  12:00;  14:00;  20:00;  21:00;  22:00;  23:00",
    },
    {
      key: "4",
      День: "воскресенье",
      Время:
        "09:00;  10:00;  11:00;  12:00;  14:00;  15:00;  16:00;  17:00;  18:00;  20:00;  21:00;  22:00;  23:00",
    },
  ];

  const columns3 = [
    {
      title: "День",
      dataIndex: "День",
      key: "День",
    },
    {
      title: "Время",
      dataIndex: "Время",
      key: "Время",
    },
    {
      title: "Количество",
      dataIndex: "Количество",
      key: "Количество",
    },

    {
      title: "Цена",
      dataIndex: "Цена",
      key: "Цена",
    },
    {
      title: "Цена (17+)",
      dataIndex: "Цен",
      key: "Цен",
    },
  ];
  const data4 = [
    {
      key: "1",
      ".": "Свободное плавание женщин",
      пн: "✘",
      вт: "19:00      ",
      ср: "✘",
      чт: "19:00      ",
      пт: "✘",
      сб: "13:00, 19:00      ",
      вс: "13:00, 19:00      ",
      დრო: "13:00, 19:00, 20:00",
      რაოდენობა: "თვეში 8 ვიზიტი",
      ფასი: "70 ₾",
    },
    {
      key: "2",
      ".": "Группы по плаванию до 17 лет ",
      დრო: "13:00, 20:00 ",
      пн: "11:00, 15:00, 16:00, 17:00",
      вт: "11:00, 15:00, 16:00, 17:00",
      ср: "11:00, 15:00, 16:00, 17:00",
      чт: "11:00, 15:00, 16:00, 17:00",
      пт: "11:00, 15:00, 16:00, 17:00",
      сб: "11:00, 15:00, 16:00, 17:00",
      вс: "✘",

      რაოდენობა: "თვეში 12 ვიზიტი",
      ფასი: "100 ₾",
    },
    {
      key: "2",
      ".": "Спортивная группа  ",
      დრო: "13:00, 20:00 ",
      пн: "18:00",
      вт: "18:00",
      ср: "18:00",
      чт: "18:00",
      пт: "18:00",
      сб: "18:00",
      вс: "✘",

      რაოდენობა: "თვეში 12 ვიზიტი",
      ფასი: "100 ₾",
    },
  ];

  const columns4 = [
    {
      title: ".",
      dataIndex: ".",
      key: ".",
    },
    {
      title: "пн",
      dataIndex: "пн",
      key: "пн",
    },
    {
      title: "вт",
      dataIndex: "вт",
      key: "вт",
    },
    {
      title: "ср",
      dataIndex: "ср",
      key: "ср",
    },
    {
      title: "чт",
      dataIndex: "чт",
      key: "чт",
    },
    {
      title: "пт",
      dataIndex: "пт",
      key: "пт",
    },
    {
      title: "сб",
      dataIndex: "сб",
      key: "сб",
    },
    {
      title: "вс",
      dataIndex: "вс",
      key: "вс",
    },
  ];
  return (
    <>
      <Npp />
      <h1 className="h1">Бассейн</h1>
      <Table
        className="tableo"
        columns={columns3}
        dataSource={data3}
        pagination={false}
      />
      <Table
        className="tablei"
        columns={columns4}
        dataSource={data4}
        pagination={false}
      />
      <Space
        style={{
          width: "100%",
          margin: "2px",
        }}
      ></Space>
      <h1 className="h1"> Аква Аэробика</h1>
      <Table
        className="table"
        columns={columns}
        dataSource={data}
        pagination={false}
      />
      <Space
        style={{
          width: "100%",
        }}
      ></Space>
      <h1 className="h1">Фитнес-Аэробика</h1>
      <Table
        className="table"
        columns={columns1}
        dataSource={data1}
        pagination={false}
      />
      <Space
        style={{
          width: "100%",
          margin: "2px",
        }}
      ></Space>
      <h1 className="h1">Йога</h1>
      <Table
        className="table"
        columns={columns2}
        dataSource={data2}
        pagination={false}
      />
    </>
  );
}

export { Fitness, Fitnessen, Fitnessru };
