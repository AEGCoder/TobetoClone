import React from 'react'
import PlatformHeader from '../../components/PlatformHeader/PlatformHeader'
import Katalog from '../../pages/Katalog/Katalog'
import { useEffect } from 'react'
import { useNavigate } from 'react-router'
const TobetoKatalog = () => {
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
      <Katalog />
    </div>
  )
}

export default TobetoKatalog