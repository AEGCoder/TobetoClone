import React,{useState,useEffect} from "react";
import Footer from "../../components/Footer/Footer";
import axios from "axios";
const Blog = () => {

  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("jsonFormat/BlogData.json");
        const data = await res.data;
        setBlogData(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData();
  }, []);


  return (
    <div className=" container mx-auto">
      <h1 className="text-center text-4xl font-bold tracking-widest">BLOG</h1>
      <ul className="mt-20 grid sm:grid-cols-3 grid-cols-1 gap-10">
    
        {blogData.map((blog) => (
            <li key={blog.id} className="relative w-[360px] h-[470px]  cursor-pointer overflow-hidden group rounded-2xl">
            <div className="bg-purple-700 absolute top-0 left-0 w-0 h-0 opacity-0 group-hover:opacity-60 group-hover:w-full group-hover:h-full transition-all ease-in-out duration-300"></div>
            <img
              className="w-full h-full object-cover"
              src={blog.img}
              alt=""
            />
            <span className="absolute top-2 right-2 text-white font-semibold">
              {blog.date}
            </span>
            <div className="absolute bottom-10 font-bold flex flex-col gap-y-5 left-[5%] text-white sm:text-xl text-base text-center p-2">
              <h3>{blog.title}</h3>
              <p>{blog.description}</p>
              <p>{blog.description2}</p>
            </div>
          </li>
        ) )}
       
       
      </ul>
      <Footer />
    </div>
  );
};

export default Blog;
