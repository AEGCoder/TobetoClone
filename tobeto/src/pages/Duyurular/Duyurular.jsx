import React, { useState,useEffect } from "react";
import PlatformHeader from "../../components/PlatformHeader/PlatformHeader";
import { IoIosSearch } from "react-icons/io";
import { BsCalendarDate } from "react-icons/bs";
import axios from 'axios'

const Duyurular = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedKurum, setSelectedKurum] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const [duyurular, setDuyurular] = useState([])

  useEffect(() => {
    const fetchDuyurular = async () => {
      const res =  await axios.get('jsonFormat/DuyurularPage.json')
      const data = await res.data
      setDuyurular(data)
    }
    fetchDuyurular()
  }, []);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
    console.log("Arama Değeri:", e.target.value);
  };

  const handleKurumSelectChange = (e) => {
    setSelectedKurum(e.target.value);
    console.log("Seçilen Kurum:", e.target.value);
  };

  const handleSortSelectChange = (e) => {
    setSelectedSort(e.target.value);
    console.log("Seçilen Sıralama:", e.target.value);
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen">
      <PlatformHeader />
      <div className="w-full h-[210px] relative">
        <img
          className="w-full h-full object-cover"
          src="/img/egitimlerimPage.svg"
          alt=""
        />
        <h2 className="absolute top-20 left-16 text-5xl font-bold tracking-wider">
          DUYURULAR
        </h2>
      </div>

      <div className="flex items-center gap-x-10 mt-10 container mx-auto">
        <div className="relative w-1/3">
          <input
            value={searchValue}
            onChange={handleInputChange}
            type="search"
            name=""
            id=""
            placeholder="Arama"
            className="pl-2 border-2 rounded-lg h-10 w-full"
          />
          <span className="absolute right-6 top-2 text-2xl font-medium text-black">
            <IoIosSearch />
          </span>
        </div>
        <div className="w-1/3 text-black">
          <select
            value={selectedKurum}
            onChange={handleKurumSelectChange}
            name=""
            id=""
            className="pl-2 border-2 rounded-lg h-10 w-full"
          >
            <option disabled selected value="">
              Tür
            </option>
            <option value="haber">Haber</option>
            <option value="duyuru">Duyuru</option>
          </select>
        </div>
        <div className="w-1/3 text-black">
          <select
            value={selectedSort}
            onChange={handleSortSelectChange}
            name=""
            id=""
            className="pl-2 border-2 rounded-lg h-10 w-full"
          >
            <option disabled selected value="">
              Sıralama
            </option>
            <option value="duyurularTariheGoreYE">Tarihe Göre(Y-E)</option>
            <option value="duyurularTariheGoreEY">Tarihe Göre(E-Y)</option>
          </select>
        </div>
      </div>

      <ul className='grid sm:grid-cols-3 grid-cols-1 gap-10 container mx-auto mt-10 pb-32'>
          {
            duyurular.map((duyuru) => (
              <li className='border h-[140px] flex flex-col items-start justify-between p-3 shadow-lg shadow-gray-600 rounded-2xl'>
              <div className='flex items-center justify-between w-full text-xs text-green-600'>
              <span>Duyuru</span>
              <span>İstanbul Kodluyor</span>
              </div>
              <p className='font-medium text-base text-gray-600 tracking-wide'>{duyuru.title} </p>
              <div className='flex items-center justify-between w-full text-xs text-green-600'>
              <div className='flex items-center gap-x-1'>
                  <span><BsCalendarDate /></span>
                <span>{duyuru.date} </span>
              </div>
              <span>Devamını Oku</span>
              </div>
           
          </li>
            ))
          }

        
      
        </ul>

        <div className="bg-[#9833FF] w-full bottom-0  fixed h-16 flex items-center justify-around">
          <img className="w-28 object-cover " src="img/tobetologo.png" alt="" />
          <a className="bg-white text-gray-600 rounded-xl py-2 px-6" href="">Bize Ulaşın</a>
        </div>

    </div>
  );
};

export default Duyurular;
