import React from 'react'
import PlatformHeader from '../../components/PlatformHeader/PlatformHeader'
import Takvim from '../../pages/TobetodaBuAy/Takvim'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
const TobetoTakvim = () => {
  const navigate = useNavigate();
  // JSON string'ini JavaScript nesnesine dönüştür
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);
  return (
    <div className="bg-gray-100 w-full min-h-screen text-black">
            <PlatformHeader />
            <Takvim />
    </div>
  )
}

export default TobetoTakvim