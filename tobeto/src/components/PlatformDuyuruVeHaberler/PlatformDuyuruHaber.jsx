import React from 'react'
import { BsCalendarDate } from "react-icons/bs";
import { Link } from 'react-router-dom';
const PlatformDuyuruHaber = () => {
  return (
    <div>
        <ul className='grid sm:grid-cols-3 grid-cols-1 sm:px-0 px-14 gap-5'>
            <li className='border h-[140px] flex flex-col items-start justify-between p-3 shadow-lg shadow-gray-600 rounded-2xl'>
                <div className='flex items-center justify-between w-full text-xs text-green-600'>
                <span>Duyuru</span>
                <span>İstanbul Kodluyor</span>
                </div>
                <p className='font-medium text-base text-gray-600 tracking-wide'>Mindset Anketi</p>
                <div className='flex items-center justify-between w-full text-xs text-green-600'>
                <div className='flex items-center gap-x-1'>
                    <span><BsCalendarDate /></span>
                  <span>31.01.2024</span>
                </div>
                <span>Devamını Oku</span>
                </div>
             
            </li>
            <li className='border h-[140px] flex flex-col items-start justify-between p-3 shadow-lg shadow-gray-600 rounded-2xl'>
                <div className='flex items-center justify-between w-full text-xs text-green-600'>
                <span>Duyuru</span>
                <span>İstanbul Kodluyor</span>
                </div>
                <p className='font-medium text-base text-gray-600 tracking-wide'>Ocak Ayı Tercih Formu Bilgilendirmesi</p>
                <div className='flex items-center justify-between w-full text-xs text-green-600'>
                <div className='flex items-center gap-x-1'>
                    <span><BsCalendarDate /></span>
                  <span>21.02.2023</span>
                </div>
                <span>Devamını Oku</span>
                </div>
             
            </li>
            <li className='border h-[140px] flex flex-col items-start justify-between p-3 shadow-lg shadow-gray-600 rounded-2xl'>
                <div className='flex items-center justify-between w-full text-xs text-green-600'>
                <span>Duyuru</span>
                <span>İstanbul Kodluyor</span>
                </div>
                <p className='font-medium text-base text-gray-600 tracking-wide'>11 Ocak Kampüs Buluşması</p>
                <div className='flex items-center justify-between w-full text-xs text-green-600'>
                <div className='flex items-center gap-x-1'>
                    <span><BsCalendarDate /></span>
                  <span>27.09.2023</span>
                </div>
                <span>Devamını Oku</span>
                </div>
             
            </li>
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