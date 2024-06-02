import React from 'react'
import {Form, Input, Spin } from 'antd';
import { useEffect,useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const EducationsCreatePage = () => {
  const [loading, setLoading] = useState(false);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();

  const onFinish = async (values) => {
    setLoading(true);
   try {
    const response = await axios.post(`${apiUrl}/api/education`, values);
    if (response.status !== 201) {
      toast.error("Bir hata oluştu");
      return;
    }
    toast.success("Eğitim başarıyla oluşturuldu");
    navigate('/admin/educations');
   } catch (error) {
    toast.error("Bir hata oluştu");
   } finally {
    setLoading(false);
   }
  };
  



  return (
   <Spin spinning={loading}>
        <Form
       layout='vertical'
    name="basic"
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      label="Title"
      name="title"
      rules={[
        {
          required: true,
          message: 'Please input your title!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="İmage (Link)"
      name="img"
      rules={[
        {
          required: true,
          message: 'Please input your img!',
        },
      ]}
    >
      <Input />
    </Form.Item>

      <button  type='submit' className='bg-blue-500  text-white py-2 px-10 rounded-md'>
        Create
      </button>
  </Form>
   </Spin>
  )
}

export default EducationsCreatePage