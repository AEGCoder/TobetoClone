import React from 'react'
import {Form, Input, Spin } from 'antd';
import { useEffect,useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate,useParams } from "react-router-dom";
const CatalogUpdataPage = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    const catalog = {
      title: values.title,
      description: values.description,
      time: values.time,
      video: values.video,
    };
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    try {
      const response = await axios.put(`${apiUrl}/api/catalog/${id}`, catalog);
      console.log(response);
      if (response.status !== 200) {
        toast.error("Bir hata oluştu");
        return;
      }
      toast.success("Katalog başarıyla güncellendi");
      navigate('/admin/catalog');
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
        const response = await axios.get(`${apiUrl}/api/catalog/${id}`);
        if (response.status !== 200) {
          toast.error("Bir hata oluştu");
          return;
        }
        const {catalog} = response.data;
        form.setFieldsValue({
          title: catalog.title,
          description: catalog.description,
          time: catalog.time,
          video: catalog.video,
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
      label="Description"
      name="description"
      rules={[
        {
          required: true,
          message: 'Please input your description!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Time"
      name="time"
      rules={[
        {
          required: true,
          message: 'Please input your time!',
        },
      ]}
    >
      <Input />
    </Form.Item>
    <Form.Item
      label="Video"
      name="video"
      rules={[
        {
          required: true,
          message: 'Please input your video!',
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

export default CatalogUpdataPage