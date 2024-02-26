import React from 'react'
import Lottie from "lottie-react";
import animationData from "../../assets/anim1.json";
import animationData2 from "../../assets/anim2.json";
const MainComp = () => {
  return (
    <main className='w-full flex flex-col items-center justify-center'>
       <div className='mainImg flex sm:flex-row flex-col sm:gap-y-0 gap-y-2 items-center justify-between p-10'>
         <div className='flex flex-col items-start gap-y-7 text-white'>
          <p className='tracking-widest font-bold text-lg'>Hayalindeki teknoloji kariyerini başlat!</p>
          <p className='tracking-widest font-bold text-base'>İstediğin <span className='bg-[#9833ff] p-2 rounded-lg animate-pulse'>hızda</span></p>
          <button className='bg-[#9833ff] py-2 px-6 rounded-lg'>Ücretsiz Üye Ol</button>
         </div>
         <div className='sm:flex hidden'>
          <img className='w-44 h-44 object-cover' src="img/contentinImage.png" alt="" />
         </div>
       </div>
       <div className='flex items-center justify-around mt-16 w-full  h-40'>
       <div className='sm:w-28 w-16 h-full'>
        <Lottie
         animationData={animationData} />
       </div>
        <div className='text-white animate-bounce  w-4 h-full rounded-lg bg-gradient-to-t from-fuchsia-300 via-fuchsia-500 to-fuchsia-800'></div>
        <div className='sm:w-20 w-16 h-full'>
        <Lottie
         animationData={animationData2} />
        </div>
       </div>
    </main>
  )
}

export default MainComp