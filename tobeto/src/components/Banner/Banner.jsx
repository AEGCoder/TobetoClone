import React,{useState} from 'react'
import { CiPlay1 } from "react-icons/ci";
import Lottie from "lottie-react";
import animationData from "../../assets/calendarnew.json";
import animationData2 from "../../assets/register.json";
import { Modal } from 'antd';
import {Link} from 'react-router-dom'
const Banner = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className='w-full h-[70px] bannerTag'>
        <div className='w-full flex items-center justify-between h-full sm:px-28 px-2'>
          <div>
            <p className='font-bold text-base text-white'>Tobeto ile geleceğini keşfet</p>
          </div>
          <div>
            <button onClick={showModal} className='bg-[#FFFFFF] py-1 px-8 rounded-2xl flex items-center gap-x-3 text-black'>
              <span className='font-medium '>izle</span>
              <span><CiPlay1 /></span>
            </button>
          </div>
        </div>
        <div className='sm:w-48 w-28  fixed bottom-16 sm:left-0 -left-8'>
          <Link  to="/takvim"> <Lottie animationData={animationData} /></Link>
        </div>
        <div className='sm:w-24 w-14 fixed bottom-16 sm:right-2 right-0'>
          <Link to="/giris"> <Lottie animationData={animationData2} /></Link>
        </div>
        <Modal  open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={false}>
         <video controls src="img/videom.mp4"></video>
      </Modal>
    </div>
  )
}

export default Banner