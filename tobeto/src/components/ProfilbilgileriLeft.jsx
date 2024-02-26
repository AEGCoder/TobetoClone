import React,{useState,useEffect} from 'react'
import { Tabs } from 'antd';
import { FaUser,FaShoppingBag,FaChartPie } from "react-icons/fa";
import { IoNewspaperSharp,IoSettingsSharp } from "react-icons/io5";
import { LiaAwardSolid } from "react-icons/lia";
import { GrCertificate } from "react-icons/gr";
import { MdOutlineSportsBasketball } from "react-icons/md";
import KisiselBilgilerim from './KisiselBilgilerim';
import Deneyimlerim from './Deneyimlerim';
import EgitimHayatım from './EgitimHayatım';
import Yetkinliklerim from './Yetkinliklerim';
import Sertifikalarim from './Sertifikalarim';
import MedyaHesaplarim from './MedyaHesaplarim';
import YabanciDillerim from './YabanciDillerim';
import Ayarlar from './Ayarlar';

const ProfilbilgileriLeft = () => {

  const [tabPosition, setTabPosition] = useState('left');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTabPosition('top');
      } else {
        setTabPosition('left');
      }
    };

    // Initial setup
    handleResize();

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

    const onChange = (key) => {
        console.log(key);
      };
      const items = [
        {
          key: '1',
          label: <div className='flex items-center'>
              <FaUser size={16}/>
              <span className='ml-2 text-lg'>Kişisel Bilgilerim</span>
          </div>,
          children: <KisiselBilgilerim/>,
        },
        {
          key: '2',
          label:  <div className='flex items-center'>
          <FaShoppingBag size={16}/>
          <span className='ml-2 text-lg'>Deneyimlerim</span>
      </div>,
          children: <Deneyimlerim/>,
        },
        {
          key: '3',
          label: <div className='flex items-center'>
          <IoNewspaperSharp size={16}/>
          <span className='ml-2 text-lg'>Eğitim Hayatım</span>
          </div>,
          children: <EgitimHayatım/>,
        },
        {
          key: '4',
          label: <div className='flex items-center'>
          <LiaAwardSolid size={24}/>
          <span className='ml-2 text-lg'>Yetkinliklerim</span>
          </div>,
          children: <Yetkinliklerim/>,
        },
        {
          key: '5',
          label: <div className='flex items-center'>
          <GrCertificate size={16}/>
          <span className='ml-2 text-lg'>Sertifikalarım</span>
          </div>,
          children: <Sertifikalarim/>,
        },
        {
          key: '6',
          label: <div className='flex items-center'>
          <MdOutlineSportsBasketball size={16}/>
          <span className='ml-2 text-lg'>Medya Hesaplarım</span>
          </div>,
          children: <MedyaHesaplarim/>,
        },
        {
          key: '7',
          label: <div className='flex items-center'>
          <FaChartPie size={16}/>
          <span className='ml-2 text-lg'>Yabancı Dillerim</span>
          </div>,
          children: <YabanciDillerim/>,
        },
        {
          key: '8',
          label: <div className='flex items-center'>
          <IoSettingsSharp size={16}/>
          <span className='ml-2 text-lg'>Ayarlarım</span>
          </div>, 
          children: <Ayarlar/>,
        },
      ];
  return (
    <div className='w-full'>
        <Tabs className='w-full'  tabPosition={tabPosition}
         defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
  )
}

export default ProfilbilgileriLeft