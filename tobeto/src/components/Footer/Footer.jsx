import React from "react";
import { FaFacebookF,FaInstagram,FaTwitter,FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="container mx-auto py-5 flex flex-col gap-y-2">
      <div className="bg-gradient-to-r from-purple-300 via-purple-400 to-fuchsia-900 w-full h-1"></div>
      <div className=" w-full  grid sm:grid-cols-4 grid-cols-2 sm:gap-y-0 gap-y-5 p-2">
        {/* div 1 components */}
        <div className="w-full">
          <h1 className="sm:text-xl text-lg font-bold pb-3">Site Haritası</h1>
          <ul className="flex flex-col items-start gap-y-1 sm:text-sm text-xs">
            <li>
              <a href="">Hakkımızda</a>
            </li>
            <li>
              <a href="">Bireyler İçin</a>
            </li>
            <li>
              <a href="">Kurumlar İçin</a>
            </li>
            <li>
              <a href="">Kurumsal Kimlik</a>
            </li>
            <li>
              <a href="">S.S.S.</a>
            </li>
            <li>
              <a href="">İletişim</a>
            </li>
          </ul>
        </div>
        {/* div 2 components */}
        <div className="w-full">
          <h1 className="sm:text-xl text-lg font-bold pb-3">Kaynaklar</h1>
          <ul className="flex flex-col items-start gap-y-1 sm:text-sm text-xs">
            <li>
              <a href="">Üyelik Sözleşmesi ve Kullanım Koşulları</a>
            </li>
            <li>
              <a href="">KVKK Aydınlatma Metni</a>
            </li>
            <li>
              <a href="">İlgili Kişi Başvuru Formu</a>
            </li>
            <li>
              <a href="">Çerez Politikası</a>
            </li>
            <li>
              <a href="">Cayma Formu</a>
            </li>
            <li>
              <a href="">İletişim</a>
            </li>
          </ul>
        </div>
        {/* div 3 components */}
        <div className="w-full">
          <h1 className="sm:text-xl text-lg font-bold pb-3">Eğitim Yolculukları</h1>
          <ul className="flex flex-col items-start gap-y-1 sm:text-sm text-xs">
            <li>
              <a href="">Front End</a>
            </li>
            <li>
              <a href="">Full Stack</a>
            </li>
            <li>
              <a href="">Web & Mobile</a>
            </li>
            <li>
              <a href="">Veri Bilimi</a>
            </li>
            <li>
              <a href="">Siber Güvenlik</a>
            </li>
            <li>
              <a href="">UI / UX</a>
            </li>
          </ul>
        </div>
        {/* div 4 components */}
        <div className="w-full">
          <h1 className="sm:text-xl text-lg font-bold pb-3">Blog</h1>
          <ul className="flex flex-col items-start gap-y-1 sm:text-sm text-xs">
            <li>
              <a href="">
                Web API Nedir? Programlama Yazılımının Arayüzü Nasıl Çalışır?
              </a>
            </li>
            <li>
              <a href="">Yapay Zeka Chatbot: İşte Geleceğin İletişim Aracı!</a>
            </li>
            <li>
              <a href="">
                Yazılım Test Otomasyonu: İş Akışınızı Daha Verimli Hale Getirin!
              </a>
            </li>
            <li>
              <a href="">
                Node.js Nedir ve Nasıl Kullanılır? İşte Sana Basit ve Etkili
                Kılavuz
              </a>
            </li>
            <li>
              <a href="">
                Robotlar ve Yapay Zeka İçin Hangi Yazılım Dili Kullanılır?
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="bg-gradient-to-r from-purple-300 via-purple-400 to-fuchsia-900 w-full h-1"></div>
      <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-3 items-center justify-between w-full sm:px-10 px-1 pt-5">
        <div>
            <img className="w-24 object-cover text-purple-400" src="img/tobetologo.png" alt="" />
        </div>
        <div>
            <p>© 2022 Tobeto I Her Hakkı Saklıdır</p>
        </div>
        <div className="flex items-center gap-x-5 text-purple-600 sm:text-2xl text-lg">
            <span className="border border-white p-2 rounded-md border-dashed shadow-md shadow-white"><FaFacebookF /></span>
            <span className="border border-white p-2 rounded-md border-dashed shadow-md shadow-white"><FaInstagram /></span>
            <span className="border border-white p-2 rounded-md border-dashed shadow-md shadow-white"><FaTwitter /></span>
            <span className="border border-white p-2 rounded-md border-dashed shadow-md shadow-white"><FaLinkedinIn /></span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
