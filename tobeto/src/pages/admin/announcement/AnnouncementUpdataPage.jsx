import React from 'react'
import {Form, Input, Spin } from 'antd';
import { useEffect,useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate,useParams } from "react-router-dom";
const AnnouncementUpdataPage = () => {
  const { id } = useParams();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const onFinish = async (values) => {
    setLoading(true);
    const announcement = {
      title: values.title,
      description: values.description,
    };
    const apiUrl = import.meta.env.VITE_API_BASE_URL;
    try {
      const response = await axios.put(`${apiUrl}/api/announcement/${id}`, announcement);
      if (response.status !== 200) {
        toast.error("Bir hata oluştu");
        return;
      }
      toast.success("Eğitim başarıyla güncellendi");
      navigate('/admin/announcement');
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
        const response = await axios.get(`${apiUrl}/api/announcement/${id}`);
        if (response.status !== 200) {
          toast.error("Bir hata oluştu");
          return;
        }
        const {announcement} = response.data;
        form.setFieldsValue({
          title: announcement.title,
          description: announcement.description,
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
          message: 'Please input your description',
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

export default AnnouncementUpdataPage