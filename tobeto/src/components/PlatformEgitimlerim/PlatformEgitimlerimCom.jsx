import React,{useState,useEffect} from "react";
import axios from "axios";
import PlatformEgitimlerimItem from "./PlatformEgitimlerimItem";
import {Link} from 'react-router-dom'

const PlatformEgitimlerimCom = () => {

   const [egitimler,setEgitimler] = useState([])

    useEffect(() => {
      const fetchData = async () => {
        const res = await axios.get("jsonFormat/PlatformEgitimBase.json");
        const data = await res.data;
        setEgitimler(data);
      }
      fetchData()
    }, [])


  return (
    <div className="w-full  sm:p-5 p-2">
      <ul className="grid sm:grid-cols-4 grid-cols-1 sm:gap-10 gap-4 sm:px-0 px-12">
        {egitimler.map((egitim) => (
          <PlatformEgitimlerimItem key={egitim.id} egitim={egitim} />
        ))}
      </ul>
      <div className="w-full mt-5 flex items-center justify-center">
  <Link to="/egitimlerim" className="bg-gray-300  text-black  block text-center w-[50%] rounded-lg py-2 px-3  hover:bg-purple-600 hover:text-white transition-all duration-300">
     Eğitimlerim Sayfasına Git
   </Link>
</div>

    </div>
  );
};

export default PlatformEgitimlerimCom;
