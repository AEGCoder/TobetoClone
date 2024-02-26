import React,{useState} from "react";
import { Dropdown, Space,Menu,Drawer } from "antd";
import { DownOutlined } from '@ant-design/icons';
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";



const Header = () => {

  const [open, setOpen] = useState(false);
  
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  const itemsNelerSunuyoruz = [
    {
      key: "1",
      label: (
        <NavLink
          rel="noopener noreferrer"
          to="/bireylericin"
        >
          Bireyler İçin
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          rel="noopener noreferrer"
          to="/kurumlaricin"
        >
          Kurumlar için
        </NavLink>
      ),
    },
  

  ];

  const menuNelerSunuyoruz = {
    backgroundColor: '#9833ff', // Dropdown arka plan rengi
  };

  const menuItemNelerSunuyoruz = {
    color: 'white', // İçindeki yazı rengi
  };

  const itemsTobeto = [
    {
      key: "1",
      label: (
        <NavLink
          rel="noopener noreferrer"
          to="/blog"
        >
          Blog
        </NavLink>
      ),
    },
    {
      key: "2",
      label: (
        <NavLink
          rel="noopener noreferrer"
          to="/basindabiz"
        >
          Basında Biz
        </NavLink>
      ),
    },
    {
      key: "3",
      label: (
        <NavLink
          rel="noopener noreferrer"
          to="/takvim"
        >
          Takvim
        </NavLink>
      ),
    },
    {
      key: "4",
      label: (
        <NavLink
          rel="noopener noreferrer"
          to="/istanbulkodluyor"
        >
          İstanbul Kodluyor
        </NavLink>
      ),
    },

  ];

  const menuStyle = {
    backgroundColor: '#9833ff', // Dropdown arka plan rengi
  };

  const menuItemStyle = {
    color: 'white', // İçindeki yazı rengi
  };


  return (
    <header className="text-white p-6 flex items-center justify-between w-full bg-[#181717] z-50 sticky top-0">
      {/* nav left components */}
      <div className="sm:w-40 w-28">
        <NavLink to="/">
        <img
          className="w-full h-full object-cover"
          src="img/tobetologo.png"
          alt=""
        />
        </NavLink>
      </div>
      {/* nav mid components */}
      <nav className="w-4/6 sm:flex hidden justify-center">
        <ul className="flex items-center justify-evenly text-white">
          <li className="hover:bg-[#9531FB] transition-all duration-300 py-1 px-5 rounded-xl">
            <NavLink to="/bizkimiz">Biz Kimiz?</NavLink>
          </li>
          <li>
          <Dropdown 
        overlay={
          <Menu style={menuNelerSunuyoruz}>
            {itemsNelerSunuyoruz.map(item => (
              <Menu.Item key={item.key} style={menuItemNelerSunuyoruz}>{item.label}</Menu.Item>
            ))}
          </Menu>
        }
      >
        <div className="cursor-pointer">
          <Space>
            Neler Sunuyoruz?
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
          </li>
          <li className="hover:bg-[#9531FB] transition-all duration-300 py-1 px-5 rounded-xl">
            <NavLink to="/katalog">Katalog</NavLink>
          </li>
          <li className="hover:bg-[#9531FB] transition-all duration-300 py-1 px-5 rounded-xl">
            <NavLink to="/codecademy">Codecademy</NavLink>
          </li>
          <li>
          <Dropdown 
        overlay={
          <Menu style={menuStyle}>
            {itemsTobeto.map(item => (
              <Menu.Item key={item.key} style={menuItemStyle}>{item.label}</Menu.Item>
            ))}
          </Menu>
        }
      >
        <div className="cursor-pointer">
          <Space>
            Tobeto'da Bu Ay
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
          </li>
        </ul>
      </nav>
      {/* nav right components */}
      <div className="items-center gap-x-5 sm:flex hidden">
        <div className="border py-2 px-5 rounded-xl">
          <NavLink to="/giris">Giriş Yap</NavLink>
        </div>
        <div className="border-2 py-2 px-5 rounded-xl border-purple-300 animate-pulse">
          <NavLink to="/kayitol">Ücretsiz üye ol</NavLink>
        </div>
      </div>
        <span className="sm:hidden flex" onClick={showDrawer}><FaBars/></span>
       {/* ----------- mobil menu------------- */}
        <Drawer title="TOBETO" onClose={onClose} visible={open} placement="right" width={280}>
         <ul className="text-black flex flex-col gap-y-3">
          <li className="border-b pb-1">
            <NavLink to="/bizkimiz">Biz Kimiz?</NavLink>
          </li>
          <li className="border-b pb-1">
          <Dropdown
        overlay={
          <Menu style={menuNelerSunuyoruz}>
            {itemsNelerSunuyoruz.map(item => (
              <Menu.Item key={item.key} style={menuItemNelerSunuyoruz}>{item.label}</Menu.Item>
            ))}
          </Menu>
        }
      >
        <div className="cursor-pointer">
          <Space>
            Neler Sunuyoruz?
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
          </li>
          <li className="border-b pb-1"> 
            <NavLink to="/katalog">Katalog</NavLink>
          </li>
          <li className="border-b pb-1">
            <NavLink to="/codecademy">Codecademy</NavLink>
          </li>
          <li >
          <Dropdown
        overlay={
          <Menu style={menuStyle}>
            {itemsTobeto.map(item => (
              <Menu.Item key={item.key} style={menuItemStyle}>{item.label}</Menu.Item>
            ))}
          </Menu>
        }
      >
        <div className="cursor-pointer">
          <Space>
            Tobeto'da Bu Ay
            <DownOutlined />
          </Space>
        </div>
      </Dropdown>
          </li>
         </ul>
       
      </Drawer>
    </header>
  );
};

export default Header;
