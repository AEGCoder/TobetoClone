import React, { useEffect, useState } from "react";
import { Pagination } from 'antd';
import KatalogLeft from "../../components/katalogLeft/KatalogLeft";
import Footer from "../../components/Footer/Footer";
import axios from "axios";

const Katalog = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [katalog, setKatalog] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Sayfa başına gösterilecek öğe sayısı
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${apiUrl}/api/catalog`);
        const {catalog} = res.data;
        setKatalog(catalog);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [
    apiUrl
  ]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    setCurrentPage(1); // Arama yapıldığında sayfayı sıfırla
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const filteredItems = katalog
    .filter((item) =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="flex flex-col gap-y-20">
      <div className="katalogBir flex items-center justify-center">
        <div className="bg-black sm:w-[600px] w-full h-[200px] flex flex-col gap-y-10 items-center justify-center bg-opacity-35 gap-x-10 rounded-2xl">
          <h1 className="font-bold text-2xl tracking-wider">
            Öğrenmeye başla !
          </h1>
          <input
            type="search"
            placeholder="Eğitim arayın..."
            className=" sm:w-[400px] w-[80%] h-[40px] pl-2 rounded-md text-black"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-10 items-start">
        {/* component left */}
        <div className="flex flex-col items-center gap-y-5 sm:w-[30%] w-full">
          <h3 className="font-bold tracking-widest text-2xl">Filtrele</h3>
          <button className="bg-blue-500 py-2 px-14  rounded-lg">
            <a href="">Bana Özel</a>
          </button>
          <div className="w-full">
            <KatalogLeft />
          </div>
        </div>
        {/* component right */}
        <div className=" sm:w-[70%] w-full p-1 mx-10">
        <ul className="grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-2 sm:pb-10 pb-5">
  {filteredItems.map((item) => (
    <li key={item.id} className="flex flex-col items-start gap-y-5">
      <video
        className="sm:w-full w-[80%] h-[200px] object-cover rounded-lg"
        controls
      >
        <source src={item.video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="flex items-center w-full sm:justify-between justify-start sm:gap-x-0 gap-x-20 px-2">
        <h3 className="sm:text-2xl text-sm font-bold">{item.title}</h3>
        <p>{item.time}</p>
      </div>
      <p>{item.description}</p>
    </li>
  ))}
</ul>


          <Pagination
            className="text-white bg-white p-1 rounded-lg"
            defaultCurrent={1}
            current={currentPage}
            total={katalog.length}
            pageSize={itemsPerPage}
            onChange={handlePageChange}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Katalog;
