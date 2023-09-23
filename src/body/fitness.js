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
      დღე: "ორშაბათი",
      დრო: "13:00, 19:00, 20:00",
      რაოდენობა: "თვეში 8 ვიზიტი",
      ფასი: "70 ლარი",
    },
    {
      key: "2",
      დღე: "სამშაბათი",
      დრო: "13:00, 20:00 ",
      რაოდენობა: "თვეში 12 ვიზიტი",
      ფასი: "100 ლარი",
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
      დღე: "ორშაბათი",
      დრო: "11:30, 18:30, 21:00",
      რაოდენობა: "8 შესვლა თვეში",
      ფასი: "40 ლარი",
    },
    {
      key: "2",
      დღე: "სამშაბათი",
      დრო: "21:00",
      რაოდენობა: "12 შესვლა თვეში",
      ფასი: "60 ლარი",
    },
    {
      key: "3",
      დღე: "ოთხშაბათი",
      დრო: "11:30, 18:30, 21:00",
      რაოდენობა: "20 შესვლა თვეში",
      ფასი: "80 ლარი",
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
      ფასი: "60 ლარი",
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

  return (
    <>
      <Npp />
      <h1 className="h1"> აკვა აერობიკა</h1>
      <Table className="table" columns={columns} dataSource={data} />

      <h1 className="h1"> ფიტნეს აერობიკა</h1>
      <Table className="table" columns={columns1} dataSource={data1} />
      <Space
        style={{
          width: "100%",
          margin: "2px",
        }}
      ></Space>
      <h1 className="h1"> იოგა</h1>
      <Table className="table" columns={columns2} dataSource={data2} />
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
      NUMBER: "20 Entry in a month",
      PRICE: "80 GEL",
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

  return (
    <>
      <Npp />
      <Space
        style={{
          width: "100%",
          margin: "2px",
        }}
      ></Space>
      <h1 className="h1">Aqua Aerobics</h1>
      <Table className="table" columns={columns} dataSource={data} />
      <Space
        style={{
          width: "100%",
        }}
      ></Space>
      <h1 className="h1">Fitness Aerobics</h1>
      <Table className="table" columns={columns1} dataSource={data1} />
      <Space
        style={{
          width: "100%",
          margin: "2px",
        }}
      ></Space>
      <h1 className="h1">Yoga</h1>
      <Table className="table" columns={columns2} dataSource={data2} />
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
      Количество: "20 посещений в месяц",
      Цена: "80 лари",
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

  return (
    <>
      <Npp />
      <Space
        style={{
          width: "100%",
          margin: "2px",
        }}
      ></Space>
      <h1 className="h1"> Аква Аэробика</h1>
      <Table className="table" columns={columns} dataSource={data} />
      <Space
        style={{
          width: "100%",
        }}
      ></Space>
      <h1 className="h1">Фитнес-Аэробика</h1>
      <Table className="table" columns={columns1} dataSource={data1} />
      <Space
        style={{
          width: "100%",
          margin: "2px",
        }}
      ></Space>
      <h1 className="h1">Йога</h1>
      <Table className="table" columns={columns2} dataSource={data2} />
    </>
  );
}

export { Fitness, Fitnessen, Fitnessru };
