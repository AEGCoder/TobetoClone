import React from 'react'
import { useFormik } from "formik";
import { userSchema } from "./AyarlarYup";
const Ayarlar = () => {

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.setSubmitting(false);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
       ayarlar:{
        eskiSifre: "",
        yeniSifre: "",
        yeniSifreTekrar: "",
      },
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div className="w-full h-full flex flex-col gap-y-10 items-center justify-center py-10">
           <div className="w-full">
        <form onSubmit={formik.handleSubmit}
         className="flex flex-col gap-y-8 w-full">
          {/* -------------  form section 1----------------- */}
          <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center w-full gap-x-10 sm:px-20 px-2">
            <div className="flex flex-col  gap-y-1 w-full">
              <label htmlFor="">
                Eski Şifre<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="text"
                placeholder="Adınızı Giriniz..."
                name="ayarlar.eskiSifre"
                id=""
                value={formik.values.ayarlar.eskiSifre}
                onChange={formik.handleChange}
              />
            {formik.touched.ayarlar?.eskiSifre && formik.errors.ayarlar?.eskiSifre && (
                <p className="text-red-500">{formik.errors.ayarlar?.eskiSifre}</p>
              )}
            </div>
            <div className="flex flex-col  gap-y-1 w-full">
              <label htmlFor="">
                Yeni Şifre<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="text"
                placeholder="Adınızı Giriniz..."
                name="ayarlar.yeniSifre"
                id=""
                value={formik.values.ayarlar.yeniSifre}
                onChange={formik.handleChange}
              />
                {formik.touched.ayarlar?.yeniSifre && formik.errors.ayarlar?.yeniSifre && (
                <p className="text-red-500">{formik.errors.ayarlar?.yeniSifre}</p>
              )}
            </div>
            <div className="flex flex-col  gap-y-1 w-full">
              <label htmlFor="">
                Yeni Şifre Tekrar<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="text"
                placeholder="Adınızı Giriniz..."
                name="ayarlar.yeniSifreTekrar"
                id=""
                value={formik.values.ayarlar.yeniSifreTekrar}
                onChange={formik.handleChange}
              />
                {formik.touched.ayarlar?.yeniSifreTekrar && formik.errors.ayarlar?.yeniSifreTekrar && (
                <p className="text-red-500">{formik.errors.ayarlar?.yeniSifreTekrar}</p>
              )}
            </div>     
          </div>
          <div className='flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center justify-around'>
            <button className='bg-purple-500 text-white py-1 h-10 px-20 rounded-md' type='submit'>Şifre Değiştir</button>
            <button className='bg-orange-500 text-white py-1 h-10 px-20 rounded-md' type='submit'>Üyeliği Sonlandır</button>
          </div>
          </form>
          </div>
    </div>
  )
}

export default Ayarlar