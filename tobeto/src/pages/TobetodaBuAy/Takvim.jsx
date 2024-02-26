import React from 'react'
import { Calendar } from 'antd';
import Footer from '../../components/Footer/Footer';
const Takvim = () => {

  const onPanelChange = (value, mode) => {
    console.log(value.format('YYYY-MM-DD'), mode);
  };



  return (
    <div className=' container mx-auto flex flex-col gap-y-3 sm:px-20 px-1 py-10'>
      <div>
        <h1 className='sm:text-4xl text-xl font-bold tracking-wider text-center'>Eğitim ve Etkinlik Takvimi</h1>
      </div>
      <div className='sm:w-[1140px] w-full min-h-[240px] bg-[#2F2F2F] rounded-2xl p-4 flex flex-col gap-y-3 text-white'>
        <div className='flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center sm:gap-x-5 gap-x-1'>
          <div className='sm:w-1/2 w-full flex flex-col gap-y-3'>
            <h2 className='text-2xl font-bold tracking-wide text-center'>Eğitim Arama</h2>
            <input type="text" placeholder='Eğitim arayın...' className='bg-gray-600 border-none outline-none p-2 w-[90%] rounded-lg' />
          </div>
          <div className='sm:w-1/2 w-full flex flex-col gap-y-3'>
          <h2 className='text-2xl font-bold tracking-wide text-center'>Eğitmen</h2>
          <select className='bg-gray-600 border-none outline-none p-2 w-[90%] rounded-lg' name="" id="">
            <option value="">Eğitmen Seçiniz</option>
            <option value="">Eğitmen Abdullah</option>
            <option value="">Eğitmen Feyzullah</option>
            <option value="">Eğitmen Nutella</option>
            <option value="">Eğitmen Firuze</option>
            <option value="">Eğitmen Nanemolla</option>
          </select>
          </div>
        </div>
        <div className='mt-3 h-full flex flex-col justify-around'>
        <h2 className='text-2xl font-bold tracking-wide text-gray-500 pb-4'>Eğitim Durumu</h2>
        <div className='flex sm:flex-row flex-col  sm:items-center items-start sm:gap-y-0 gap-y-3 sm:gap-x-5 gap-x-1'>
          <div className='flex items-center gap-x-2'>
          <input type="checkbox" />
            <label htmlFor="">Bitmiş Dersler</label>
          </div>
          <div className='flex items-center gap-x-2'>
          <input type="checkbox" />
            <label htmlFor="">Devam Eden Dersler</label>
          </div>
          <div className='flex items-center gap-x-2'>
          <input type="checkbox" />
            <label htmlFor="">Satın Alınmış Dersler</label>
          </div>
          <div className='flex items-center gap-x-2'>
          <input type="checkbox" />
            <label htmlFor="">Başlamamış Dersler</label>
          </div>
        </div>
        </div>
      </div>
      <div className='bg-[#2F2F2F] h-screen sm:p-0 p-2'>
      <Calendar
            fullBg={true}
            fullscreen={true}
            fullPanelBg={"#2F2F2F"}
            onPanelChange={onPanelChange}
            className="custom-calendar" // Add a custom class to the Calendar component
            style={{ width: '100%', height: '100%' }}
          />
      </div>
      <Footer />
    </div>
  )
}

export default Takvim