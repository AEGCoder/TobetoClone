import React,{useEffect} from 'react'
import {Form, Input,Button } from 'antd';
import Lottie from "lottie-react"
import animationData from "../../assets/anim2.json"
import Footer from '../../components/Footer/Footer'
import {useNavigate } from 'react-router-dom';
import {useDispatch,useSelector} from "react-redux";
import {useRegisterMutation} from "../../redux/features/auth/userApiSlice";
import {setCredentials} from "../../redux/features/auth/authSlice";
import {toast} from "react-toastify";
const KayitOlPage = () => {

    const [registerApiCall,{isLoading}] = useRegisterMutation();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {userInfo} = useSelector((state) => state.auth);

    useEffect(() => {
      if(userInfo){
        navigate("/platform");
      }
    } ,[userInfo,navigate])

    const onFinish = async (values) => {
      console.log('Form submitted with values:', values);
      const res = await registerApiCall(values).unwrap();
      dispatch(setCredentials({ ...res }));
      navigate("/platform");
    };
    
    const onFinishFailed = (errorInfo) => {
      console.log('Form submission failed with error:', errorInfo);
      toast.error("Bir hata oluştu");
    };
    
    

  return (
    <div className=''>
        <div className='flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 bg-white w-full min-h-[600px]'>
          <div className=' sm:w-1/2 w-full flex flex-col items-center h-full  gap-y-2 sm:p-0 p-2'>
          <div className='border-4  p-10 mt-5 flex flex-col gap-y-3 sm:w-[70%] w-full h-[550px]'>
              <img className='w-44 object-cover' src="img/blacktobetoLogo.svg" alt="" />
              <h3 className='text-center text-xl font-bold text-gray-700 py-1'>Hemen Kayıt Ol</h3>
              <Form id="kayitFormu" initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
 
 <Form.Item
      name="ad"
      rules={[
        {
          required: true,
          message: 'Lütfen adınızı giriniz',
        },
      ]}
    >
      <Input placeholder='Ad'/>
    </Form.Item>

    <Form.Item
      name="soyad"
      rules={[
        {
          required: true,
          message: 'Lütfen soyadınızı giriniz',
        },
      ]}
    >
      <Input placeholder='Soyad'/>
    </Form.Item>

    <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                  message:"Lütfen bir email giriniz"
                },
              ]}
            >
              <Input className="py-2" placeholder="email" />
            </Form.Item>

            <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Lütfen şifrenizi giriniz!',
          },
        ]}
        hasFeedback
      >
        <Input.Password placeholder='Şifre'/>
      </Form.Item>

      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Lütfen şifrenizi tekrar giriniz!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The new password that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password placeholder='Şifre Tekrar'/>
      </Form.Item>

      <Button className="bg-[#9833ff] text-white w-full text-center py-1 rounded-xl" form="kayitFormu" key="submit" htmlType="submit">Kayıt Ol</Button>



  </Form>
  <a className='text-gray-500 py-2' href="">Zaten bir hesabın var mı?  <span className='font-bold text-black'>Giriş Yap</span> </a>
            </div>
          </div>
            <div className='sm:w-1/2 w-full flex flex-col items-center h-full'>
              <div className='border-4  p-10 mt-5 flex relative flex-col items-center justify-center gap-y-5 w-[70%] h-[550px]'>
              <img className='w-48' src="img/kayitol.svg" alt="" />
              <a className='bg-[#1E1040] text-[#0CCDFA] py-2 px-10 rounded-2xl mt-4' href="">Başvur</a>
              <div className='absolute top-2 w-24'>
                 <Lottie animationData={animationData} />
              </div>
              </div>
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default KayitOlPage