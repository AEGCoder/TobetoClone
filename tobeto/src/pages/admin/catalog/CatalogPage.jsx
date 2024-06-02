import { Table, Popconfirm, Space } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const EducationPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/catalog`);
        const {catalog} = response.data;
        setDataSource(catalog);
        // toast.success("Data fetched successfully");
      } catch (error) {
        toast.error(error.response?.data?.message || "Bir hata oluştu");
        navigate("/login");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl, navigate]);

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
   {
     title: "Description",
      dataIndex: "description",
      key: "description",
   },
   {
     title:"Time",
      dataIndex:"time",
      key:"time",
   },
   {
      title:"Video",
      dataIndex:"video",
      key:"video",
      render: (video) => (
        <video className="rounded-md" width="200" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ),
   },
    {
        title:"Created At",
        dataIndex:"createdAt",
        key:"createdAt",
        render:(createdAt)=>new Date(createdAt).toLocaleDateString()
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
       <Space size="middle">
         <Popconfirm
          title="Delete the user"
          description="Are you sure to delete this education?"
          okText="Yes"
          cancelText="No"
          onConfirm={()=>deleteCatalog(record._id)}
        >
          <Button danger>Delete</Button>
        </Popconfirm>
        <button  onClick={()=>navigate(`/admin/catalog/update/${record._id}`)}
         className="bg-blue-600 text-white py-1 px-6 hover:bg-blue-500 transition duration-300 rounded-md">Edit</button>
         </Space>
      ),
    },
  ];

  const deleteCatalog = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/catalog/${id}`);
      setDataSource(dataSource.filter((catalog) => catalog._id !== id));
      toast.success("Catalog deleted successfully");
    } catch (error) {
      toast.error(error.response.data.message);
    }
  }
  return (
    <div className="text-black">
      <Table
        dataSource={dataSource}
        columns={columns}
        rowKey={(record) => record._id}
        loading={loading}
      />
    </div>
  );
};



export default EducationPage