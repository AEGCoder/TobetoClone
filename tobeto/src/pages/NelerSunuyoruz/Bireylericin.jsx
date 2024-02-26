import React, { useState, useEffect } from "react";
import Lottie from "lottie-react";
import axios from "axios";
import animationData from "../../assets/animation.json";
import animationData2 from "../../assets/bizkimizanim.json";
import { FaArrowCircleLeft } from "react-icons/fa";
import Footer from "../../components/Footer/Footer";
const Bireylericin = () => {
  const [data, setData] = useState([]);
  const [biryerdenBaslamak, setBiryerdenBaslamak] = useState([]);
  const [DijitalBirMeslek, setDijitalBirMeslek] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const responsive = await axios.get("jsonFormat/BireylerIcınData.json");
      const data = await responsive.data;
      setData(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const responsive = await axios.get("jsonFormat/BİryerdenBaslamak.json");
      const data = await responsive.data;
      setBiryerdenBaslamak(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const responsive = await axios.get("jsonFormat/DijitalBirMeslek.json");
      const data = await responsive.data;
      setDijitalBirMeslek(data);
    };
    fetchData();
  }, []);

  return (
    <div className="container mx-auto">
      <div className="flex flex-col gap-y-5">
        <p className="border-4 rounded-md sm:text-base text-xs text-center font-bold tracking-wider leading-relaxed border-purple-700 p-3">
          <span className="underline">Dijital Bir Meslek</span> edinmek,{" "}
          <span className="underline">Profesyonel Bir Yönetici</span> olmak ya
          da
          <span className="underline"> Kendini Geliştirmek</span> için İstediğin
          bölümden, <br />
          istediğin kadar eğitimi seçip, eş zamanlı olarak alabilirsin.
        </p>
        <p className="font-bold text-center tracking-widest">
          {" "}
          <span className="text-purple-600 sm:text-lg text-sm underline">
            Codecademy
          </span>{" "}
          iş birliği ile, fark yaratmak senin elinde!
        </p>
        <div className="flex">
          <p className="border-4 sm:p-10 p-5 font-bold tracking-wide sm:text-lg text-xs rounded-full custom-border-animation">
            Uzmanlaşmak istediğin alanı seç, Tobeto platformda öğrenmeye başla!
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-y-7 mt-14 bg-[#1A1A1A]">
        <div className="flex items-center sm:gap-x-10 gap-x-2">
          <p className="font-bold sm:text-xl text-lg text-center tracking-wide">
            Bir Yerden Başlamak İstiyorum
          </p>
          <div className="w-28">
            <Lottie animationData={animationData} />
          </div>
        </div>
        <div>
          <ul className="grid sm:grid-cols-3 grid-cols-2 gap-10 text-sm shadow-lg shadow-orange-300 p-5 rounded-xl">
            {biryerdenBaslamak.map((item, index) => (
              <li
                key={item.id}
                className="sm:w-[240px] w-full text-center p-2 h-[95px] rounded-md border border-gray-200 flex items-center justify-center"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-bold tracking-wider flex items-center justify-center gap-x-5 text-xl w-full">
          <a href="">Tümünü İncele</a>
          <span className="text-2xl shadow-md shadow-white p-1 rounded-full">
            <FaArrowCircleLeft />
          </span>
        </div>
      </div>
      <div className="flex flex-col items-center sm:gap-y-7 gap-y-4 mt-14 bg-[#1A1A1A] ">
        <div className="flex items-center sm:gap-x-10 gap-x-4">
          <p className="font-bold sm:text-xl text-base tracking-wide">
            Dijital Bir Meslek İstiyorum
          </p>
          <div className="sm:w-28 w-14">
            <Lottie animationData={animationData2} />
          </div>
        </div>
        <div>
          <ul className="grid sm:grid-cols-3 grid-cols-2 gap-10 text-sm shadow-lg shadow-blue-300 p-5 rounded-xl">
            {DijitalBirMeslek.map((item, index) => (
              <li
                key={item.id}
                className="sm:w-[240px] w-full h-[95px] p-2 text-center rounded-md border border-gray-200 flex items-center justify-center"
              >
                {item.title}
              </li>
            ))}
          </ul>
        </div>
        <div className="font-bold tracking-wider mt-10 flex items-center sm:gap-x-5 gap-x-2  sm:text-xl text-base w-full">
          <a href="">Tümünü İncele</a>
          <span className="text-2xl shadow-md shadow-white p-1 rounded-full">
            <FaArrowCircleLeft />
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-4 mt-10">
        <div className="flex items-center sm:justify-around justify-between sm:p-0 p-1">
          <div className="">
            <img className="sm:w-20 w-12" src="img/bottom1RightImg.svg" alt="" />
          </div>
          <div>
            <h1 className="sm:font-bold font-medium sm:text-xl text-center text-base tracking-wider">
              Profesyonel Bir Yönetici Olmak İstiyorum
            </h1>
          </div>
          <div>
            <img className="sm:w-20 w-12" src="img/bottom1leftImg.svg" alt="" />
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ul className="grid sm:grid-cols-4 grid-cols-2 gap-5">
            <li className="w-[145px] h-[95px] border border-gray-500 rounded-lg flex items-center justify-center text-center ">
              {" "}
              Ürün <br />
              Yönetimi <br />
              Programı
            </li>
            <li className="w-[145px] h-[95px] border border-gray-500 rounded-lg flex items-center justify-center text-center">
              Dijital <br />
              Pazarlama <br />
              Programı
            </li>
            <li className="w-[145px] h-[95px] border border-gray-500 rounded-l flex items-center justify-center text-center">
              {" "}
              Proje <br />
              Yönetimi <br />
              Programı
            </li>
            <li className="w-[145px] h-[95px] border border-gray-500 rounded-lg flex items-center justify-center text-center">
              {" "}
              Yetenek <br />
              Yönetimi <br />
              Programı
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col gap-y-10">
        <div>
          <h1 className="font-bold tracking-wider sm:text-2xl text-lg mt-20 text-center">
            Kendimi Geliştirmek İstiyorum
          </h1>
        </div>
        <div className="custom-grid my-10">
          <ul className="grid sm:grid-cols-4 grid-cols-2 gap-5 text-sm custom-ul text-white">
            {data.map((item, index) => {
              return (
                <li
                  key={index}
                  className="sm:w-[240px] w-full h-[95px] rounded-md border border-gray-200 flex items-center justify-center"
                >
                  {item.name}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Bireylericin;
