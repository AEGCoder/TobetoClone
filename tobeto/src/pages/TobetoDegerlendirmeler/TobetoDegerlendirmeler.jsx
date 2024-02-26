import React from "react";
import PlatformHeader from "../../components/PlatformHeader/PlatformHeader";
import { IoMdArrowDropright } from "react-icons/io";
import { FaSitemap } from "react-icons/fa6";

const TobetoDegerlendirmeler = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen text-black">
      <PlatformHeader />
      <div className="flex flex-col pb-5 gap-y-3 items-center container mx-auto sm:px-10 px-2">
        <div>
          <h1 className="sm:text-3xl text-2xl text-center fontr-bold">
            {" "}
            <span className="text-purple-500">Yetkinlik</span> lerini ücretsiz
            ölç, bilgilerini test et.
          </h1>
        </div>
        <div className="bg-gradient-to-r from-purple-300 via-violet-500 to-purple-700 flex flex-col justify-between p-5 font-bold rounded-2xl h-[300px] text-2xl items-center text-white w-full">
          <p>Tobeto İşte Başarı Modeli</p>
          <p>
            80 soru ile yetkinliklerini ölç, önerilen eğitimleri tamamla,
            rozetini kazan.
          </p>
          <a
            className="bg-purple-800 p-3 rounded-xl hover:bg-yellow-500 transition-all duration-300"
            href=""
          >
            Raporu Görüntüle
          </a>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-start gap-x-10  w-full text-white">
          <div className="sm:w-[50%] w-full bg-gradient-to-r from-sky-300 via-blue-900 to-indigo-700 flex items-center justify-between p-5 rounded-lg h-[400px] flex-col text-3xl">
            <p>Yazılımda Başarı Testi</p>
            <p>
              Çoktan seçmeli sorular ile teknik <br /> bilgini test et.
            </p>
            <div className="flex items-center">
              <span>
                <IoMdArrowDropright />
              </span>
              <span>
                <IoMdArrowDropright />
              </span>
              <span>
                <IoMdArrowDropright />
              </span>
            </div>
          </div>
          <div className="sm:w-[50%] w-full">
            <ul className="flex flex-col gap-y-2 sm:text-base text-sm">
              <li className="bg-gradient-to-r from-violet-300 via-purple-400 to-blue-400 flex items-center justify-between p-3 rounded-2xl">
                <div className="flex items-center gap-x-3 sm:text-xl text-base w-[50%]">
                  <span>
                    <FaSitemap />
                  </span>
                  <p>Front End</p>
                </div>
                <div>
                  <button className="bg-white text-black p-3 rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300">
                    Raporu Görüntüle
                  </button>
                </div>
              </li>
              <li className="bg-gradient-to-r from-violet-300 via-purple-400 to-blue-400 flex items-center justify-between p-3 rounded-2xl">
                <div className="flex items-center gap-x-3 sm:text-xl text-base w-[50%]">
                  <span>
                    <FaSitemap />
                  </span>
                  <p>Full Stack</p>
                </div>
                <div>
                  <button className="bg-white text-black p-3 rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300">
                    Raporu Görüntüle
                  </button>
                </div>
              </li>
              <li className="bg-gradient-to-r from-violet-300 via-purple-400 to-blue-400 flex items-center justify-between p-3 rounded-2xl">
                <div className="flex items-center gap-x-3 sm:text-xl text-base w-[50%]">
                  <span>
                    <FaSitemap />
                  </span>
                  <p>Back End</p>
                </div>
                <div>
                  <button className="bg-white text-black p-3 rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300">
                    Raporu Görüntüle
                  </button>
                </div>
              </li>
              <li className="bg-gradient-to-r from-violet-300 via-purple-400 to-blue-400 flex items-center justify-between p-3 rounded-2xl">
                <div className="flex items-center gap-x-3 sm:text-xl text-base w-[50%]">
                  <span>
                    <FaSitemap />
                  </span>
                  <p>Microsoft SQL Server</p>
                </div>
                <div>
                  <button className="bg-white text-black p-3 rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300">
                    Raporu Görüntüle
                  </button>
                </div>
              </li>
              <li className="bg-gradient-to-r from-violet-300 via-purple-400 to-blue-400 flex items-center justify-between p-3 rounded-2xl">
                <div className="flex items-center gap-x-3 sm:text-xl text-base w-[50%]">
                  <span>
                    <FaSitemap />
                  </span>
                  <p>Masaüstü Programlama</p>
                </div>
                <div>
                  <button className="bg-white text-black p-3 rounded-lg hover:bg-yellow-500 hover:text-white transition-all duration-300">
                    Raporu Görüntüle
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full">
          <h1 className="font-bold text-center py-5 tracking-wide sm:text-3xl text-xl">
            <span className="text-purple-500">Aboneliğe özel</span>{" "}
            değerlendirme araçları için
          </h1>
          <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center gap-x-10 w-full text-white">
            <div className="sm:w-[50%] w-full min-h-[300px] bg-gradient-to-r from-purple-500 via-fuchsia-400 to-rose-400 rounded-2xl p-5 flex flex-col items-center justify-between text-2xl font-bold">
              <p>Kazanım Odaklı Testler</p>
              <p>
                Dijital gelişim kategorisindeki eğitimlere <br /> başlamadan
                öncekonuyla ilgili bilgin <br /> ölçülür ve seviyene göre
                yönlendirilirsin.
              </p>
            </div>
            <div className="sm:w-[50%] w-full flex flex-col items-center justify-between min-h-[300px] bg-gradient-to-r from-purple-500 via-fuchsia-400 to-rose-400 rounded-2xl text-lg p-5">
              <p>
                Huawei Talent Interview <br />
                Teknik Bilgi Sınavı*
              </p>
              <p>
                Sertifika alabilmen için, eğitim <br /> yolculuğunun sonunda
                teknik <br /> yetkinliklerin ve kod bilgin ölçülür.
              </p>
              <p>
                4400+ soru | 30+ programlama dili <br />4 zorluk seviyesi
              </p>
              <p>
                Türkiye Ar-Ge Merkezi tarafından tasarlanmıştır
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#9833FF] w-full  h-16 flex items-center justify-around">
          <img className="w-28 object-cover " src="img/tobetologo.png" alt="" />
          <a className="bg-white text-gray-600 rounded-xl py-2 px-6" href="">Bize Ulaşın</a>
        </div>
    </div>
  );
};

export default TobetoDegerlendirmeler;
