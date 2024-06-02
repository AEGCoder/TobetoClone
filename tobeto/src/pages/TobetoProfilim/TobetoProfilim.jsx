import React, { useEffect } from "react";
import PlatformHeader from "../../components/PlatformHeader/PlatformHeader";
import { FaUserCircle, FaUserSecret, FaPhoneAlt } from "react-icons/fa";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { CgMail } from "react-icons/cg";
import { FaRegEye } from "react-icons/fa6";
import Lottie from "lottie-react";
import animationData from "../../assets/newspider.json";
import rozetData from "../../assets/rozet1.json";
import rozetData2 from "../../assets/rozet2.json";
import rozetData3 from "../../assets/rozet3.json";
import { FaEdit,FaShareAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const TobetoProfilim = () => {

  const navigate = useNavigate();
  // JSON string'ini JavaScript nesnesine dönüştür
  const user = JSON.parse(localStorage.getItem("user"));

  let total = 0;
  for (let i = 0; i < 22; i++) {
    total += i;
  }
  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="bg-gray-100 w-full min-h-screen text-black">
      <PlatformHeader />
      <div className="container mx-auto flex sm:flex-row flex-col sm:gap-y-0 gap-y-16 gap-x-5 items-start justify-between sm:px-24 px-2 pb-5 mt-5">
        {/* -----------component 1--------------- */}
        <div className="sm:w-1/3 w-full">
          <ul className="flex flex-col gap-y-6 ">
            <li className="flex flex-col gap-y-1 h-72 shadow-md shadow-gray-600 p-2 rounded-lg">
              <div className="bg-gradient-to-r from-violet-400 via-cyan-200 to-fuchsia-500  p-2 w-full h-[30%] rounded-md flex justify-center items-center">
                <span>
                  <FaUserCircle className="text-5xl text-gray-700 animate-spin" />
                </span>
              </div>
              <div className="flex flex-col gap-y-2">
                <div className="flex items-center gap-x-5">
                  <div>
                    <FaUserSecret size={25} />
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-500">Ad Soyad</span>
                    <span className="font-bold">Konuşkan Tatlı</span>
                  </div>
                </div>
                <div className="flex items-center gap-x-5">
                  <div>
                    <BsFillCalendarDateFill size={25} />
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-500">Doğum Tarihi</span>
                    <span className="font-bold">Girilmemiş</span>
                  </div>
                </div>
                <div className="flex items-center gap-x-5">
                  <div>
                    <CgMail size={25} />
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-500">E-Posta Adresi</span>
                    <span className="font-bold">Konuskan@gmail.com</span>
                  </div>
                </div>
                <div className="flex items-center gap-x-5">
                  <div>
                    <FaPhoneAlt size={21} />
                  </div>
                  <div className="flex flex-col text-sm">
                    <span className="text-gray-500">Telefon Numarası</span>
                    <span className="font-bold">0599-999-99-99</span>
                  </div>
                </div>
              </div>
            </li>
            <li className="flex flex-col gap-y-1 h-12 shadow-md shadow-gray-600 p-2 rounded-lg">
              <p className="font-bold border-b pb-1 border-black">Hakkımda</p>
            </li>
            <li className="flex flex-col justify-around gap-y-1 h-72 shadow-md shadow-gray-600 rounded-lg p-2">
              <h2 className="font-bold">Yetkinliklerim</h2>
              <div className="flex flex-col gap-y-2">
                <p className="shadow-md shadow-gray-500 p-2 pl-3 border-2 border-gray-400 hover:border-0 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                  c#
                </p>
                <p className="shadow-md shadow-gray-500 p-2 pl-3 border-2 border-gray-400 hover:border-0 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                  javascript
                </p>
                <p className="shadow-md shadow-gray-500 p-2 pl-3 border-2 border-gray-400 hover:border-0 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                  Boostrap
                </p>
                <p className="shadow-md shadow-gray-500 p-2 pl-3 border-2 border-gray-400 hover:border-0 rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
                  Algoritmalar
                </p>
              </div>
            </li>
            <li className="flex flex-col justify-around gap-y-1 h-20 shadow-md shadow-gray-600 rounded-lg p-2">
              <p className="font-bold border-b pb-1 border-gray-600">
                Yabancı Dillerim
              </p>
              <p>Henüz bir yabancı dil eklemedin.</p>
            </li>
            <li className="flex flex-col justify-around gap-y-1 h-20 shadow-md shadow-gray-600 rounded-lg p-2">
              <p className="font-bold border-b pb-1 border-gray-600">
                Sertifikalarım
              </p>
              <p>Henüz bir sertifika yüklemedin.</p>
            </li>
            <li className="flex flex-col justify-around gap-y-1 h-20 shadow-md shadow-gray-600 rounded-lg p-2">
              <p className="font-bold border-b pb-1 border-gray-600">
                Medya Hesaplarım
              </p>
              <p>Henüz bir hesap eklemedin.</p>
            </li>
          </ul>
        </div>
        {/* -----------component 2--------------- */}
        <div className="sm:w-2/3 w-full relative">
          <ul className="flex flex-col gap-y-4">
            {/* ----------right component -----1-------- */}
            <li className="flex flex-col bg-gray-100 p-5 rounded-2xl shadow-sm shadow-gray-500">
              <div className="flex items-center justify-between text-base border-b border-gray-400 pb-1">
                <p className="font-bold">Tobeto İşte Başarı Modelim</p>
                <span>
                  <FaRegEye />
                </span>
              </div>
              <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center justify-between pt-5">
                <div className="w-52">
                  <Lottie animationData={animationData} />
                </div>
                <div className="flex flex-col gap-y-3">
                  <div className="flex items-center gap-x-2">
                    <span className="bg-red-600 py-1 px-3 rounded-xl text-white">
                      4.5
                    </span>
                    <p className="text-base font-light">
                      Yeni dünyaya hazırlanıyorum
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="bg-gray-600 py-1 px-3 rounded-xl text-white">
                      4.5
                    </span>
                    <p className="text-base font-light">
                      Profesyonel duruşumu geliştiriyorum
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="bg-green-600 py-1 px-3 rounded-xl text-white">
                      4.5
                    </span>
                    <p className="text-base font-light">
                      Kendimi tanıyor ve yönetiyorum
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="bg-blue-600 py-1 px-3 rounded-xl text-white">
                      4.5
                    </span>
                    <p className="text-base font-light">
                      Yaratıcı ve doğru çözümler geliştiriyorum
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="bg-purple-600 py-1 px-3 rounded-xl text-white">
                      4.5
                    </span>
                    <p className="text-base font-light">
                      Kendimi sürekli geliştiriyorum
                    </p>
                  </div>
                  <div className="flex items-center gap-x-2">
                    <span className="bg-yellow-600 py-1 px-3 rounded-xl text-white">
                      4.5
                    </span>
                    <p className="text-base font-light">
                      Başkaları ile birlikte çalışıyorum
                    </p>
                  </div>
                </div>
              </div>
            </li>
            {/* ----------right component -----2-------- */}

            <li className="bg-gray-100 shadow-sm rounded-2xl shadow-gray-500 p-5">
              <h1 className="py-3 font-bold tracking-wide">
                Tobeto Seviye Testlerim
              </h1>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-5 sm:text-base text-xs">
                <div className="shadow-gray-500 shadow-md p-3 flex items-start justify-between rounded-2xl">
                  <div>
                    <p>Front End</p> <br />
                    <p>76.00</p>
                  </div>
                  <div>
                    <p>14-09-2023</p>
                  </div>
                </div>
                <div className="shadow-gray-500 shadow-md p-3 flex items-start justify-between rounded-2xl">
                  <div>
                    <p>Full Stack</p> <br />
                    <p>80.00</p>
                  </div>
                  <div>
                    <p>15-09-2023</p>
                  </div>
                </div>
                <div className="shadow-gray-500 shadow-md p-3 flex items-start justify-between rounded-2xl">
                  <div >
                    <p>Herkes için Kodlama 1D Değerlendirme Sınav</p> <br />
                    <p>96.00</p>
                  </div>
                  <div>
                    <p>11-10-2023</p>
                  </div>
                </div>
              </div>
            </li>
            {/* ----------right component -----3-------- */}

            <li className="bg-gray-100 shadow-sm rounded-2xl shadow-gray-500 p-5">
              <h1 className="font-bold tracking-wide">Yetkinlik Rozetlerim</h1>
              <div className="flex items-center justify-around">
                <span className="w-24">
                  {" "}
                  <Lottie animationData={rozetData} />
                </span>
                <span className="w-24">
                  {" "}
                  <Lottie animationData={rozetData2} />
                </span>
                <span className="w-24">
                  {" "}
                  <Lottie animationData={rozetData3} />
                </span>
              </div>
            </li>
            {/* ----------right component -----4-------- */}

            <li className="bg-gray-100 shadow-sm rounded-2xl shadow-gray-500 p-5">
              <h1 className="font-bold tracking-wide pb-5">Aktivite Haritam</h1>
             <div className="flex flex-wrap gap-1">
             {Array.from({ length: total }, (_, index) => (
                <div
                  key={index}
                  className="w-3 h-3 rounded-full bg-gray-300 cursor-pointer hover:bg-purple-400 transition-all duration-200"
                ></div>
              ))}
             </div>
            </li>
            {/* ----------right component -----5-------- */}

            <li className="bg-gray-100 shadow-sm rounded-2xl shadow-gray-500 p-5">
            <h1 className="font-bold border-b border-gray-700 pb-2 tracking-wide ">Eğitim Hayatım ve Deneyimlerim</h1>
            <p>Henüz bir eğitim ve deneyim bilgisi eklemedin.</p>

            </li>
          </ul>
          <div className="absolute -top-10 right-20 flex text-2xl items-center gap-x-5 p-2">
            <span className="cursor-pointer hover:text-purple-500 transition-all duration-300"><FaEdit /></span>
            <span className="cursor-pointer hover:text-purple-500 transition-all duration-300"><FaShareAlt /></span>
          </div>
        </div>
      </div>
      <div className="bg-[#9833FF] w-full    h-16 flex items-center justify-around">
          <img className="w-28 object-cover " src="img/tobetologo.png" alt="" />
          <a className="bg-white text-gray-600 rounded-xl py-2 px-6" href="">Bize Ulaşın</a>
        </div>
    </div>
  );
};

export default TobetoProfilim;
