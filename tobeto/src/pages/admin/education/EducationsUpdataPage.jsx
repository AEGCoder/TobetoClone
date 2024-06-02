import React from 'react'
import {Form, Input, Spin } from 'antd';
import { useEffect,useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate,useParams } from "react-router-dom";
const EducationsUpdataPage = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    const education = {
      title: values.title,
      img: values.img,
    };
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    try {
      const response = await axios.put(`${apiUrl}/api/education/${id}`, education);
      if (response.status !== 200) {
        toast.error("Bir hata oluştu");
        return;
      }
      toast.success("Eğitim başarıyla güncellendi");
      navigate('/admin/educations');
    } catch (error) {
      toast.error("Bir hata oluştu");
    } finally {
      setLoading(false);
    }
  };
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const navigate = useNavigate();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${apiUrl}/api/education/${id}`);
        if (response.status !== 200) {
          toast.error("Bir hata oluştu");
          return;
        }
        const {education} = response.data;
        form.setFieldsValue({
          title: education.title,
          img: education.img,
        });
      } catch (error) {
        toast.error("Bir hata oluştu");
      } 
    };
    fetchData();
  }, [
    apiUrl,
    navigate,
    id,
    form,
  ]);


  return (
   <Spin spinning={loading}>
        <Form
    form={form}
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
        Update
      </button>
  </Form>
   </Spin>
  )
}

export default EducationsUpdataPage