import { Layout, Menu } from "antd";
import {
  DashboardOutlined,
  AppstoreOutlined,
  LaptopOutlined,
  BarcodeOutlined,
  UserOutlined,
  ShoppingCartOutlined,
  RollbackOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
const { Sider,Header,Content } = Layout;

const getUserRole = () => {
    const user = JSON.parse(localStorage.getItem("user"));
    return user ? user.role : null;
}

const AdminLayout = ({children}) => {

  const navigate = useNavigate();
   const userRole = getUserRole();
  const menuItems = [
    {
      key: "1",
      icon: <DashboardOutlined />,
      label: "Dashboard",
      onClick: () => {
        navigate(`/admin`);
      },
    },
    {
      key: "2",
      icon: <AppstoreOutlined />,
      label: "Education",
      path: "/",
      children: [
        {
          key: "3",
          label: "Education Listesi",
          path: "/admin/educations",
          onClick: () => {
            navigate(`/admin/educations`);
          },
        },
        {
          key: "4",
          label: "New Education Create",
          path: "/admin/educations/create",
          onClick: () => {
            navigate("/admin/educations/create");
          },
        },
      ],
    },
    {
      key: "5",
      icon: <LaptopOutlined />,
      label: "Announcement",
      path: "/",
      children: [
        {
          key: "6",
          label: "Announcement List",
          path: "/admin/announcement",
          onClick: () => {
            navigate(`/admin/announcement`);
          },
        },
        {
          key: "7",
          label: "New Announcement Create",
          path: "/admin/announcement/create",
          onClick: () => {
            navigate("/admin/announcement/create");
          },
        },
      ],
    },
    {
      key: "8",
      icon: <BarcodeOutlined />,
      label: "Catalog",
      path: "/admin/catalog",
      children: [
        {
          key: "9",
          label: "Catalog List",
          path: "/admin/catalog",
          onClick: () => {
            navigate(`/admin/catalog`);
          },
        },
        {
          key: "10",
          label: "New Catalog Create",
          path: "/admin/catalog/create",
          onClick: () => {
            navigate("/admin/catalog/create");
          },
        },
      ],
    },
    {
      key: "11",
      icon: <UserOutlined />,
      label: "Users List",
      path: "/admin/users",
      onClick: () => {
        navigate(`/admin/users`);
      },
    },
    {
      key: "13",
      icon: <RollbackOutlined />,
      label: "Ana Sayfaya Git",
      onClick: () => {
        window.location.href = "/";
      },
    },
  ];

 
    if (userRole === 'admin') {
      return (
        <div className="admmin-layout">
          <Layout style={{
            minHeight: "100vh",
          }}>
            <Sider width={200} theme="dark">
              <Menu  mode="vertical" style={{height:"100%"}} items={menuItems} />
            </Sider>
            <Layout>
              <Header>
                <div style={{
                  display: "flex",
                  justifyContent: "space-between",
                  color: "white",
                }}>
                <h2>
                  Admin Paneli
                </h2>
                </div>
                </Header>
              <Content>
                <div className="site-layout-background" style={{padding:"24px 50px" ,minHeight:360}}>
                {children}
                </div>
              </Content>
              </Layout>
          </Layout>
        </div>
      );
    } else {
      return  window.location.href = "/";
    }
  }



export default AdminLayout;

