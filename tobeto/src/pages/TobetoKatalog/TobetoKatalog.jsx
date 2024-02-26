import React from 'react'
import PlatformHeader from '../../components/PlatformHeader/PlatformHeader'
import Katalog from '../../pages/Katalog/Katalog'

const TobetoKatalog = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen text-black">
      <PlatformHeader />
      <Katalog />
    </div>
  )
}

export default TobetoKatalog