import React from "react";
import { BsAmd, BsAlipay, BsAmazon } from "react-icons/bs";
import Footer from "../../components/Footer/Footer";
const Kurumlaricin = () => {
  return (
    <div className="container mx-auto flex flex-col gap-y-20 items-center">
      <div>
        <p className="font-bold sm:text-xl text-sm p-1 text-center tracking-wider leading-relaxed">
          Tobeto; yetenekleri yakalar, değerlendirir, geliştirir, <br />{" "}
          destekler, eğitir, istihdam eder, ekosisteme dahil eder.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 grid-cols-1 gap-10">
        <div className="sm:w-[545px] w-full h-[340px] border flex flex-col gap-y-5 items-center justify-center text-center rounded-xl">
          <p className="sm:text-3xl text-lg font-bold text-white">
            Doğru yeteneğe ulaşmak için
          </p>
          <p className="text-gray-400 sm:px-2 px-10">
            Kurumların değişen yetenek ihtiyaçları için <br /> istihdama hazır
            adaylar yetiştirir.
          </p>
        </div>
        <div className="sm:w-[545px] w-full h-[340px] border flex sm:flex-row flex-col sm:gap-y-0 gap-y-5  items-center  rounded-xl">
          <div className="sm:w-1/3 w-full h-full bg-[#828282] flex flex-col gap-y-5 sm:text-xl text-sm items-center justify-center rounded-lg sm:rounded-br-full rounded-br-sm hover:bg-[#9231F3] group transition-all duration-300 cursor-pointer">
            <span className="sm:text-3xl text-lg group-hover:hidden flex">
              <BsAmd />
            </span>
            <span className="flex group-hover:hidden">DEĞERLENDİRME</span>
            <p className="hidden group-hover:flex transition-all duration-300 text-sm p-2 leading-snug">
              Değerlendirilmiş ve yetişmiş geniş yetenek havuzuna erişim olanağı
              ve ölçme, değerlendirme, seçme ve raporlama hizmeti.
            </p>
          </div>
          <div className="sm:w-1/3 w-full h-full bg-[#828282] flex flex-col gap-y-5 sm:text-xl text-sm  items-center justify-center rounded-lg sm:rounded-br-full rounded-br-sm hover:bg-[#9231F3] group transition-all duration-300 cursor-pointer">
            <span className="sm:text-3xl text-lg group-hover:hidden flex">
              <BsAlipay />
            </span>
            <span className="group-hover:hidden flex">BOOTCAMP</span>
            <p className="hidden group-hover:flex transition-all sm:px-2 px-10 duration-300 text-sm p-2 leading-snug">
              Codecademy içerikleri, alanında uzman eğitmenler ile canlı
              dersler, mentör desteği, proje ve uygulamalar ile kuruma özel
              bootcamp projeleri için uçtan uca destek ve stratejik ortaklık.
            </p>
          </div>
          <div className="sm:w-1/3 w-full h-full bg-[#828282] flex flex-col gap-y-5 sm:text-xl text-sm  items-center justify-center rounded-lg sm:rounded-br-full rounded-br-sm hover:bg-[#9231F3] group transition-all duration-300 cursor-pointer">
            <span className="sm:text-3xl text-lg group-hover:hidden flex">
              <BsAmazon />
            </span>
            <span className="group-hover:hidden flex">ESLEŞTİRME</span>
            <p className="group-hover:flex hidden text-sm  sm:px-2 px-10 transition-all duration-300 leading-snug">
              Esnek, uzaktan, tam zamanlı iş gücü için doğru ve hızlı işe alım.
            </p>
          </div>
        </div>
        <div className="sm:w-[545px] w-full h-[340px] border flex flex-col gap-y-5 items-center justify-center text-center rounded-xl">
          <p className="sm:text-3xl text-lg font-bold text-white">
            Çalışanlarınız için Tobeto
          </p>
          <p className="text-gray-400">
            Çalışanların ihtiyaçları doğrultusunda, mevcut <br /> becerilerini
            güncellemelerine veya yeni beceriler <br /> kazanmalarına destek
            olur.
          </p>
        </div>
        <div className="sm:w-[545px] w-full h-[340px] border flex sm:flex-row flex-col sm:gap-y-0 gap-y-5  items-center  rounded-xl">
          <div className="sm:w-1/3 w-full h-full bg-[#828282] flex flex-col gap-y-5 text-xl items-center justify-center rounded-lg sm:rounded-tr-full rounded-tr-sm hover:bg-[#9231F3] group transition-all duration-300 cursor-pointer">
            <span className="sm:text-3xl text-lg group-hover:hidden flex">
              <BsAmd />
            </span>
            <span className="flex group-hover:hidden">ÖLÇME ARAÇLARI</span>
            <p className="hidden group-hover:flex transition-all duration-300 text-sm p-2 leading-snug">
              Uzmanlaşmak için yeni beceriler kazanmak (reskill) veya yeni bir
              role başlamak (upskill) isteyen adaylar için, teknik ve yetkinlik
              ölçme araçları.
            </p>
          </div>
          <div className="sm:w-1/3 w-full h-full bg-[#828282] flex flex-col gap-y-5 items-center justify-center rounded-lg sm:rounded-tr-full rounded-tr-sm hover:bg-[#9231F3] group transition-all duration-300 cursor-pointer">
            <span className="text-3xl group-hover:hidden flex">
              <BsAlipay />
            </span>
            <span className="group-hover:hidden flex">EĞİTİM</span>
            <p className="hidden group-hover:flex transition-all duration-300 text-sm p-2 leading-snug">
              Yeni uzmanlık becerileri ve yeni bir rol için gerekli yetkinlik
              kazınımı ihtiyaçlarına bağlı olarak açılan eğitimlere katılım ve
              kuruma özel sınıf açma olanakları.
            </p>
          </div>
          <div className="sm:w-1/3 w-full h-full bg-[#828282] flex flex-col gap-y-5 items-center justify-center rounded-lg sm:rounded-tr-full rounded-tr-sm hover:bg-[#9231F3] group transition-all duration-300 cursor-pointer">
            <span className="text-3xl group-hover:hidden flex">
              <BsAmazon />
            </span>
            <span className="group-hover:hidden flex">GELİŞİM</span>
            <p className="group-hover:flex hidden text-sm p-2 transition-all duration-300 leading-snug">
              Kurumsal hedefler doğrultusunda mevcut yetenek gücünün gelişimi ve
              konumlandırılmasına destek.
            </p>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-4 items-center gap-x-10 bg-[#221C3A] sm:p-20 p-4 sm:rounded-full rounded-lg mb-14">
        <p>
          Kurumlara özel eğitim paketleri ve bootcamp programları için bizimle
          iletişime geçin.
        </p>
        <button className="bg-[#9231f3] py-2 px-10 rounded-3xl">
          Bize Ulaşın
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Kurumlaricin;
