import React,{useState,useEffect} from "react";
import PlatformHeader from "../../components/PlatformHeader/PlatformHeader";
import { Tabs } from "antd";
import PlatformBasvurularCom from "../../components/PlatfomBasvurular/PlatformBasvurularCom";
import PlatformEgitimlerimCom from "../../components/PlatformEgitimlerim/PlatformEgitimlerimCom";
import PlatformDuyuruHaber from "../../components/PlatformDuyuruVeHaberler/PlatformDuyuruHaber";

const PlatformPage = () => {


  const [tabPosition, setTabPosition] = useState('top');

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setTabPosition('top');
      } else {
        setTabPosition('top');
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
      key: "1",
      label: "Başvurularım",
      children: <PlatformBasvurularCom />,
    },
    {
      key: "2",
      label: "Eğitimlerim",
      children: <PlatformEgitimlerimCom />,
    },
    {
      key: "3",
      label: "Duyuru ve Haberlerim",
      children: <PlatformDuyuruHaber />,
    },
    {
      key: "4",
      label: "Anketlerim",
      children: (
        <div className="font-bold text-xl text-center mt-5 tracking-wider">
          Atanmış herhangi bir anketiniz bulunmamaktadır...
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gray-100 w-full min-h-screen pb-14">
      <PlatformHeader />
      <div className="flex flex-col gap-y-20 container mx-auto sm:px-20 px-2 text-black mt-10  items-center">
        {/* component 1 */}
        <div className="flex flex-col items-center sm:text-3xl text-xl tracking-wider">
          <p>
            <span className="text-[#9833FF]">TOBETO'ya</span> hoş geldin
          </p>
          <span>Ali eren</span>
          <p className="pt-10 sm:text-xl text-lg">
            Yeni nesil öğrenme deneyimi ile Tobeto kariyer yolculuğunda senin
            yanında!
          </p>
        </div>
        {/* component 2 */}
        <div>
          {/* component üst */}
          <div className="sm:w-[1140px] w-full min-h-[550px] sm:p-5 p-2 bg-white shadow-2xl shadow-gray-400 rounded-2xl flex flex-col items-center gap-y-5 pt-20 sm:px-5 px-2">
            <img className="sm:w-80 w-48" src="img/istanbulkodluyor.svg" alt="" />
            <p className="text-gray-600 tracking-wider font-medium sm:text-base text-sm sm:px-0 px-14 text-center">
              Ücretsiz eğitimlerle, geleceğin mesleklerinde sen de yerini al.
            </p>
            <p className="text-2xl tracking-wider font-bold">
              Aradığın <span className="text-green-500">“</span>İş
              <span className="text-green-500">“</span> Burada!
            </p>
            {/* component tabs */}
            <div className="w-full">
            <Tabs   tabPosition={tabPosition}
              defaultActiveKey="1" items={items} onChange={onChange} />
            </div>
          </div>
        </div>
        {/* component 3 */}
        <div className="bg-[#9833FF] w-full bottom-0  fixed h-16 flex items-center justify-around">
          <img className="w-28 object-cover " src="img/tobetologo.png" alt="" />
          <a className="bg-white text-gray-600 rounded-xl py-2 px-6" href="">
            Bize Ulaşın
          </a>
        </div>
      </div>
    </div>
  );
};

export default PlatformPage;
