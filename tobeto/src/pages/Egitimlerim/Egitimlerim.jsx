import React, { useState,useEffect } from "react";
import PlatformHeader from "../../components/PlatformHeader/PlatformHeader";
import { IoIosSearch } from "react-icons/io";
import { Tabs } from 'antd';
import axios from "axios";
import TumEgitimlerim from "../../components/PlatformEgitimlerim/TumEgitimlerim";
import DevamEttiklerim from "../../components/PlatformEgitimlerim/DevamEttiklerim";
import Tamamladiklarim from "../../components/PlatformEgitimlerim/Tamamladiklarim";



const Egitimlerim = () => {
  const [searchValue, setSearchValue] = useState("");
  const [selectedKurum, setSelectedKurum] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const [egitimlerData,setEgitimlerData] = useState([])
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get(`${apiUrl}/api/education`);
      const {educations} = await res.data;
      setEgitimlerData(educations);
    }
    fetchData()
  }, [
    apiUrl
  ])


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


  const onChange = (key) => {
    console.log(key);
  };

  const items = [
    {
      key: '1',
      label: 'Tüm Eğitimlerim',
      children: <TumEgitimlerim  egitimlerData={egitimlerData} />,
    },
    {
      key: '2',
      label: 'Devam Ettiklerim',
      children: <DevamEttiklerim egitimlerData={egitimlerData} />,
    },
    {
      key: '3',
      label: 'Tamamladıklarım',
      children: <Tamamladiklarim egitimlerData={egitimlerData} />,
    },
  ];

  return (
    <div className="bg-gray-100 w-full min-h-screen flex flex-col gap-y-2">
      {/* egitimlerim sayfası section 1 */}
      <PlatformHeader />
      {/* egitimlerim sayfası section 2 */}
      <div className="w-full h-[210px] relative">
        <img
          className="w-full h-full object-cover"
          src="/img/egitimlerimPage.svg"
          alt=""
        />
        <h2 className="absolute top-20 left-16 text-5xl font-bold tracking-wider">
          EĞİTİMLERİM
        </h2>
      </div>
      {/* egitimlerim sayfası section 3 */}
      <div className="text-black container mx-auto px-10 flex flex-col gap-y-5 mt-5">
              {/* egitimlerim sayfası section bölüm 1 */}

        <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center gap-x-10">
          <div className="relative sm:w-1/3 w-full">
            <input
              value={searchValue}
              onChange={handleInputChange}
              type="search"
              name=""
              id=""
              placeholder="Arama"
              className="pl-2 border-2 rounded-lg h-10 w-full"
            />
            <span className="absolute right-6 top-2 text-2xl font-medium">
              <IoIosSearch />
            </span>
          </div>
          <div className="sm:w-1/3 w-full">
            <select
              value={selectedKurum}
              onChange={handleKurumSelectChange}
              name=""
              id=""
              className="pl-2 border-2 rounded-lg h-10 w-full"
            >
              <option disabled selected value="">
                Kurum Seçiniz
              </option>
              <option value="istanbulKodluyor">İstanbul Kodluyor</option>
            </select>
          </div>
          <div className="sm:w-1/3 w-full">
            <select
              value={selectedSort}
              onChange={handleSortSelectChange}
              name=""
              id=""
              className="pl-2 border-2 rounded-lg h-10 w-full"
            >
              <option value="AdinagoreAZ">Adına Göre (A-Z)</option>
              <option value="AdinagoreZA">Adına Göre (Z-A)</option>
              <option value="TarihegoreYE">Tarihe Göre (Y-E)</option>
              <option value="TarihegoreEY">Tarihe Göre (E-Y)</option>
            </select>
          </div>
        </div>
        {/* egitimlerim sayfası section bölüm 2 */}
        <div className="flex items-center justify-center  font-medium mb-28">
        <Tabs  size="Large" 
         defaultActiveKey="1" items={items} onChange={onChange} />
        </div>
      </div>
         {/* egitimlerim sayfası section bölüm 3 */}
         <div className="bg-[#9833FF] w-full bottom-0  fixed h-16 flex items-center justify-around">
          <img className="w-28 object-cover " src="img/tobetologo.png" alt="" />
          <a className="bg-white text-gray-600 rounded-xl py-2 px-6" href="">Bize Ulaşın</a>
        </div>
    </div>
  );
};

export default Egitimlerim;
