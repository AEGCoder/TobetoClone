import React from "react";
import { FaCheck } from "react-icons/fa6";

const PlatformBasvurularCom = () => {
  return (
    <div className="sm:w-[450px]  w-[80%] sm:ml-0 ml-10  bg-white shadow-lg items-start justify-center relative shadow-gray-600 h-[140px] rounded-2xl flex flex-col gap-y-3  p-3">
      <h2 className="font-bold text-black">İstanbul Kodluyor Bilgilendirme</h2>
      <div className="flex items-center gap-x-1">
        <span className="text-green-500 font-bold text-lg">
          <FaCheck />
        </span>
        <p>İstanbul Kodluyor Bilgilendirme</p>
      </div>
      <div className="flex items-center gap-x-1">
        <span className="text-green-500 font-bold text-lg">
          <FaCheck />
        </span>
        <p>İstanbul Kodluyor Belge Yükleme Formu onaylandı.</p>
      </div>
      <span className="bg-[#0A6A34] text-white absolute top-0 right-0 py-1 px-10 rounded-3xl">
        Kabul Edildi
      </span>
    </div>
  );
};

export default PlatformBasvurularCom;
