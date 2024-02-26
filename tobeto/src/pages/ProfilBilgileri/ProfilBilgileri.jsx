import React from 'react'
import PlatformHeader from '../../components/PlatformHeader/PlatformHeader'
import ProfilbilgileriLeft from '../../components/ProfilbilgileriLeft'
const ProfilBilgileri = () => {
  return (
    <div className="bg-gray-100 w-full min-h-screen text-black">
        <PlatformHeader/>
         <div className='flex items-start  w-full mt-10'>
            <ProfilbilgileriLeft/>
         </div>
    </div>
  )
}

export default ProfilBilgileri