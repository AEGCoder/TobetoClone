import React,{useEffect} from "react";
import Footer from "../../components/Footer/Footer";
import { Form, Input } from "antd";
import { Link,useNavigate} from "react-router-dom";
import {useDispatch,useSelector} from "react-redux";
import axios from "axios";
import {toast} from "react-toastify"
const GirisPage = () => {
  const navigate = useNavigate();
  const apiUrl= import.meta.env.VITE_API_BASE_URL;

  const onFinish = async (values) => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/auth/login`,
        {
          email: values.email,
          password: values.password,
        }
      );
      if (response.status === 200) {
        const { user } = response.data;
        const { password, ...rest } = user; // password'u çıkart
        localStorage.setItem("user", JSON.stringify(rest));
        toast.success("Başarıyla giriş yaptınız");
        if (rest.role === "admin") {
          window.location.href = "/admin";
        } else {
          navigate("/");
        }
      } else {
        toast.error("Bir hata oluştu");
      }
    } catch (error) {
      console.log(error);
      toast.error("Bir hata oluştu");
    }
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <div className="">
      <div className="w-full h-[530px] bg-white flex items-center justify-center sm:p-0 p-2">
        <div className="flex flex-col items-center p-5 w-[800px] h-[400px] border-2 rounded-xl border-purple-400">
          <h3 className="text-3xl font-bold tracking-wide text-gray-600 pb-5">
            TOBETO
          </h3>
          <Form
            className="w-full flex flex-col gap-y-3"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input className="py-2" placeholder="Giriş Yap" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password className="py-2" placeholder="Şifre" />
            </Form.Item>

            <button
              className="bg-[#9833FF] text-white py-2 rounded-lg"
              type="submit"
            >
              Giriş Yap
            </button>
          </Form>
          <Link
            className="text-gray-600 py-3 text-base font-thin tracking-wider"
            to="/sifremiunuttum"
          >
            Şifremi Unuttum
          </Link>
          <Link
            className="text-gray-600 py-3 text-base font-thin tracking-wider"
            to="/kayitol"
          >
            Henüz üye değil misin?{" "}
            <span className="font-bold text-gray-700">Kayıt Ol</span>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default GirisPage;
