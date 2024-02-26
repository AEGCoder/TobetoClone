import React from 'react'
import Lottie from 'lottie-react'
import loadingData from '../../assets/loadingAnim.json'
const Loading = () => {
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
        <div className='w-[28rem]'>
        <Lottie animationData={loadingData} />
        </div>
    </div>
  )
}

export default Loading