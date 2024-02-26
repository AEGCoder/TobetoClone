import React from 'react'
import PlatformHeader from '../../components/PlatformHeader/PlatformHeader'
import Takvim from '../../pages/TobetodaBuAy/Takvim'

const TobetoTakvim = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen text-black">
            <PlatformHeader />
            <Takvim />
    </div>
  )
}

export default TobetoTakvim