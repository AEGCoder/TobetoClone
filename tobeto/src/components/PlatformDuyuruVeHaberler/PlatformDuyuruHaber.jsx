import React,{useState,useEffect} from 'react'
import { BsCalendarDate } from "react-icons/bs";
import { Link } from 'react-router-dom';
import axios from 'axios'
const PlatformDuyuruHaber = () => {

  const [announcement,setAnnouncement] = useState([])
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

   useEffect(() => {
     const fetchData = async () => {
       const res = await axios.get(`${apiUrl}/api/announcement`);
       const {announcement} = await res.data;
       setAnnouncement(announcement);
     }
     fetchData()
   }, [
     apiUrl
   ])
  return (
    <div>
        <ul className='grid sm:grid-cols-3 grid-cols-1 sm:px-0 px-14 gap-5'>
            {
                announcement.map((duyuru) => (
                  <li key={duyuru._id} className='border h-[140px] flex flex-col items-start justify-between p-3 shadow-lg shadow-gray-600 rounded-2xl'>
                  <div className='flex items-center justify-between w-full text-xs text-green-600'>
                  <span>Duyuru</span>
                  <span>İstanbul Kodluyor</span>
                  </div>
                  <p className='font-medium text-base text-gray-600 tracking-wide'>
                    {duyuru.title}
                  </p>
                  <p className='font-normal text-sm text-gray-600 tracking-wide'>
                    {duyuru.description}
                  </p>
                  <div className='flex items-center justify-between w-full text-xs text-green-600'>
                  <div className='flex items-center gap-x-1'>
                      <span><BsCalendarDate /></span>
                    <span>
                      {duyuru.createdAt && new Date(duyuru.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <span>Devamını Oku</span>
                  </div>
               
              </li>
                ))
            }
        </ul>
        <div className="w-full mt-8 flex items-center justify-center">
  <Link to="/duyurular" className="bg-gray-300  text-black  block text-center w-[50%] rounded-lg py-2 px-3  hover:bg-purple-600 hover:text-white transition-all duration-300">
     Daha Fazla Göster
   </Link>
</div>
    </div>
  )
}

export default PlatformDuyuruHaber