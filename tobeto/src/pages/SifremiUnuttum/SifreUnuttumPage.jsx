import React from "react";
import Footer from "../../components/Footer/Footer";
import { Form, Input } from "antd";
import { Link } from "react-router-dom";
const SifreUnuttumPage = () => {

    const onFinish = (values) => {
        console.log("Success:", values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log("Failed:", errorInfo);
      };

  return (
    <div className="mt-48">
      <div className="w-full h-[530px] bg-white flex items-center justify-center">
        <div className="flex flex-col items-center p-5 w-[600px] h-[250px]  border-2 rounded-xl border-purple-400">
          <h3 className="text-3xl font-bold tracking-wide text-gray-600 pb-5">
          Şifre Sıfırlama
          </h3>
          <Form
            className="w-[80%] flex flex-col justify-around h-full gap-y-3"
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
              <Input className="py-2" placeholder="Şifre sıfırlama linki için e-posta adresinizi giriniz" />
            </Form.Item>

       

            <button
              className="bg-[#9833FF] text-white py-2 rounded-lg"
              type="submit"
            >
              Gönder
            </button>
          </Form>
       
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SifreUnuttumPage;
