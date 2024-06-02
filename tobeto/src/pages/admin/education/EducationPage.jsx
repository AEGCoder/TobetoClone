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
        const response = await axios.get(`${apiUrl}/api/education`);
        const {educations} = response.data;
        setDataSource(educations);
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
      title: "İmage",
      dataIndex: "img",
      key: "img",
      render: (img) => (
        <img
          src={img}
          alt="img"
          style={{ width: "50px", height:"50px", borderRadius: "5px" }}
        />
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
          onConfirm={()=>deleteEducation(record._id)}
        >
          <Button danger>Delete</Button>
        </Popconfirm>
        <button  onClick={()=>navigate(`/admin/educations/update/${record._id}`)}
         className="bg-blue-600 text-white py-1 px-6 hover:bg-blue-500 transition duration-300 rounded-md">Edit</button>
         </Space>
      ),
    },
  ];

  const deleteEducation = async (id) => {
    try {
      await axios.delete(`${apiUrl}/api/education/${id}`);
      setDataSource(dataSource.filter((education) => education._id !== id));
      toast.success("User deleted successfully");
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