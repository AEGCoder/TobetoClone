import React,{useState,useEffect} from "react";
import Footer from "../../components/Footer/Footer";
import axios  from "axios";
const BasindaBiz = () => {

  const [basindaBizData, setBasindaBizData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("jsonFormat/BasindaBizData.json");
        const data = await res.data;
        setBasindaBizData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className=" container mx-auto">
      <h1 className="text-center text-4xl font-bold tracking-widest">Basında Biz
</h1>
      <ul className="mt-20 grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-5 p-2 z-10">
       {
        basindaBizData.map((basindaBiz) => (
          <li key={basindaBiz.id} className="relative sm:w-[360px] w-full h-[470px]  cursor-pointer overflow-hidden group rounded-2xl">
          <div className="bg-purple-700 absolute top-0 left-0 w-0 h-0 opacity-0 group-hover:opacity-60 group-hover:w-full group-hover:h-full transition-all ease-in-out duration-300"></div>
          <img
            className="w-full h-full object-cover"
            src={basindaBiz.img}
            alt=""
          />
          <span className="absolute top-2 right-2 text-white font-semibold">
            {basindaBiz.date}
          </span>
          <div className="absolute bottom-10 font-bold flex flex-col gap-y-5 left-[5%] text-white text-xl text-center p-2">
            <h3>{basindaBiz.title}</h3>
            <p>{basindaBiz.description}</p>
            <p>{basindaBiz.description1}</p>
          </div>
        </li>
        ) )
       }

   

       
      </ul>
      <Footer />
    </div>
  );
};

export default BasindaBiz;
