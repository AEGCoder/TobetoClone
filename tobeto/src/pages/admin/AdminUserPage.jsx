import { Table, Popconfirm } from "antd";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { Button } from "antd";
const AdminUserPage = () => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  const [dataSource, setDataSource] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios.get(`${apiUrl}/api/users`);
        setDataSource(data);
      } catch (error) {
        toast.error(error.response.data.message);
        navigate("/giris");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [apiUrl, navigate]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Last Name",
      dataIndex: "lastname",
      key: "lastname",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Avatar",
      dataIndex: "avatar",
      key: "avatar",
      render: (avatar) => (
        <img
          src={avatar}
          alt="avatar"
          style={{ width: "50px", borderRadius: "10px" }}
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Popconfirm
          title="Delete the user"
          description="Are you sure to delete this user?"
          okText="Yes"
          cancelText="No"
          onConfirm={()=>deleteUser(record.email)}
        >
          <Button danger>Delete</Button>
        </Popconfirm>
      ),
    },
  ];

  const deleteUser = async (email) => {
    try {
      await axios.delete(`${apiUrl}/api/users/${email}`);
      setDataSource(dataSource.filter((user) => user.email !== email));
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

export default AdminUserPage;
