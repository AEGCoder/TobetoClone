import React from 'react'
import Lottie from 'lottie-react'
import notFound from '../../assets/notfound.json'


const NotFoundPage = () => {
  return (
    <div className='w-full h-screen bg-black flex items-center justify-center'>
        <div className='w-[28rem]'>
        <Lottie animationData={notFound} />
        </div>
    </div>
  )
}

export default NotFoundPage