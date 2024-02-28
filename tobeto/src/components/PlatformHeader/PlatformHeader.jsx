import React,{useState} from 'react'
import { SiHomebridge } from "react-icons/si";
import { FaArrowDown } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space,Drawer } from 'antd';
import {Link,useNavigate} from 'react-router-dom' 
import { FaBars } from "react-icons/fa";
import {useSelector,useDispatch} from "react-redux";
import {useLogoutMutation} from "../../redux/features/auth/userApiSlice";
import {logout} from "../../redux/features/auth/authSlice";


const PlatformHeader = () => {

  const [open, setOpen] = useState(false);

  const {userInfo} = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [logoutApiCall] = useLogoutMutation();

  const handleLogout = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/giris");
    } catch (error) {
      console.log(error);
    }
  }
  const items = [
    {
      key: '1',
      label: (
        <Link  to="/profilbilgileri">
          Profil Bilfileri
        </Link>
      ),
    },
    {
      key: '2',
      label: (
        <button onClick={handleLogout}
        >
          Oturum kapat
        </button>
      ),
    },
  
  ];
  


  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };


  return (
    <div className='text-black h-20 flex items-center justify-between sm:px-5 px-2'>
      <div>
        <Link to="/platform"><img className='w-36' src="img/blacktobetoLogo.svg" alt="" /></Link>
      </div>
      <div className='sm:flex hidden'>
        <ul className='flex items-center gap-x-6'>
          <li className='hover:text-purple-400 transition-all duration-300'>
            <NavLink to="/platform">Anasayfa</NavLink>
          </li>
          <li className='hover:text-purple-400 transition-all duration-300'>
            <NavLink to="/tobetoprofilim">Profilim</NavLink>
          </li>
          <li className='hover:text-purple-400 transition-all duration-300'>
            <NavLink to="/tobetodegerlendirmeler">Değerlendirmeler</NavLink>
          </li>
          <li className='hover:text-purple-400 transition-all duration-300'>
            <NavLink to="/tobetokatalog">Katalog</NavLink>
          </li>
          <li className='hover:text-purple-400 transition-all duration-300'>
            <NavLink to="/tobetotakvim">Takvim</NavLink>
          </li>
          <li className='hover:text-purple-400 transition-all duration-300'>
            <NavLink to="/tobetoistanbulkodluyor">İstanbul Kodluyor</NavLink>
          </li>
        </ul>
      </div>
      <div className='sm:flex items-center gap-x-4 hidden'>
        <Link to="/"><SiHomebridge className='text-3xl cursor-pointer' /></Link>
        <div >
        <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      {userInfo && userInfo.name ? userInfo.name : "Kullanıcı"}{" "}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
        </div>
      </div>

      {/* --------mobile menu------- */}
      <span className="sm:hidden flex" onClick={showDrawer}><FaBars size={28}/></span>
      <Drawer title="TOBETO" onClose={onClose} visible={open} placement="right" width={280}>
      <ul className='flex sm:flex-row flex-col sm:items-center items-start sm:gap-y-0 gap-y-3 gap-x-6 text-black'>
          <li className='hover:text-purple-400 transition-all duration-300 border-b border-gray-500 pb-1'>
            <NavLink to="/platform">Anasayfa</NavLink>
          </li>
          <li className='hover:text-purple-400 transition-all duration-300 border-b border-purple-500 pb-1'>
            <NavLink to="/tobetoprofilim">Profilim</NavLink>
          </li>
          <li className='hover:text-purple-400 transition-all duration-300 border-b border-purple-500 pb-1'>
            <NavLink to="/tobetodegerlendirmeler">Değerlendirmeler</NavLink>
          </li>
          <li className='hover:text-purple-400 transition-all duration-300 border-b border-purple-500 pb-1'>
            <NavLink to="/tobetokatalog">Katalog</NavLink>
          </li>
          <li className='hover:text-purple-400 transition-all duration-300 border-b border-purple-500 pb-1'>
            <NavLink to="/tobetotakvim">Takvim</NavLink>
          </li>
          <li className='hover:text-purple-400 transition-all duration-300 '>
            <NavLink to="/tobetoistanbulkodluyor">İstanbul Kodluyor</NavLink>
          </li>
        </ul>
        <div className='sm:hidden items-center gap-x-4 flex text-black sm:mt-0 mt-5'>
        <Link to="/"><SiHomebridge className='text-3xl cursor-pointer' /></Link>
        <div >
        <Dropdown
    menu={{
      items,
    }}
  >
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      {userInfo && userInfo.name ? userInfo.name : "Kullanıcı"}{" "}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
        </div>
      </div>
      </Drawer>
    </div>
  )
}

export default PlatformHeader