import React from "react";
import { useFormik } from "formik";
import {userSchema} from "./DeneyimlerimYup";


const Deneyimlerim = () => {

  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.setSubmitting(false);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    formik.resetForm();
  };

const formik = useFormik({
  initialValues: {
    kurumAdi: "",
    pozisyon: "",
    sektor: "",
    sehir: "",
    isBaslangic: "",
    isBitis: "",
    isAciklama: "",
  },
  validationSchema: userSchema,
  onSubmit,
});

  return (
    <div className="flex flex-col items-center justify-center gap-y-5 py-5">
   <form className="w-full" onSubmit={formik.handleSubmit}>
       {/** Deneyimlerim section -----1------------ */}
       <div className="flex items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
        <div className="flex flex-col w-[50%] gap-y-1">
          <label htmlFor="">
            Kurum Adı<sup>*</sup>
          </label>
          <input
            className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
            type="text"
            placeholder="Kampüs 365..."
            name="kurumAdi"
            id=""
            value={formik.values.kurumAdi}
            onChange={formik.handleChange}
          />
            {formik.touched.kurumAdi && formik.errors.kurumAdi && (
                <p className="text-red-500">{formik.errors.kurumAdi}</p>
              )}
        </div>
        <div className="flex flex-col w-[50%] gap-y-1">
          <label htmlFor="">
            Pozisyon<sup>*</sup>
          </label>
          <input
            className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
            type="text"
            placeholder="Front-End Developer..."
            name="pozisyon"
            id=""
            value={formik.values.pozisyon}
            onChange={formik.handleChange}
          />
            {formik.touched.pozisyon && formik.errors.pozisyon && (
                <p className="text-red-500">{formik.errors.pozisyon}</p>
              )}
        </div>
      </div>
      {/* -------------  form section 2----------------- */}
      <div className="flex items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
        <div className="flex flex-col w-[50%] gap-y-1">
          <label htmlFor="">
          Sektör<sup>*</sup>
          </label>
          <input
            className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
            type="text"
            placeholder="Yazılım..."
            name="sektor"
            id=""
            value={formik.values.sektor}
            onChange={formik.handleChange}
          />
           {formik.touched.sektor && formik.errors.sektor && (
                <p className="text-red-500">{formik.errors.sektor}</p>
              )}
        </div>
        <div className="flex flex-col w-[50%] gap-y-1">
          <label htmlFor="">
          Şehir Seçiniz<sup>*</sup>
          </label>
          <input
            className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
            type="text"
            placeholder="Front-End Developer..."
            name="sehir"
            id=""
            value={formik.values.sehir}
            onChange={formik.handleChange}
          />
              {formik.touched.sehir && formik.errors.sehir && (
                <p className="text-red-500">{formik.errors.sehir}</p>
              )}
        </div>
      </div>
        {/* -------------  form section 3----------------- */}
        <div className="flex items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
        <div className="flex flex-col w-[50%] gap-y-1">
          <label htmlFor="">
          İş Başlangıcı<sup>*</sup>
          </label>
          <input
            className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
            type="date"
            name="isBaslangic"
            id=""
            value={formik.values.isBaslangic}
            onChange={formik.handleChange}
          />
            {formik.touched.isBaslangic && formik.errors.isBaslangic && (
                <p className="text-red-500">{formik.errors.isBaslangic}</p>
              )}
        </div>
        <div className="flex flex-col w-[50%] gap-y-1 sm:pt-0 pt-14">
          <label htmlFor="">
          İş Bitiş<sup>*</sup>
          </label>
          <input
            className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
            type="date"
            name="isBitis"
            id=""
            value={formik.values.isBitis}
            onChange={formik.handleChange}
          />
            {formik.touched.isBitis && formik.errors.isBitis && (
                <p className="text-red-500">{formik.errors.isBitis}</p>
              )}
          <div className="flex items-center gap-x-2">
            <input type="checkbox" />
          <span>Çalışmaya devam ediyorum...</span>
          </div>
        </div>
      </div>
        {/* -------------  form section 4----------------- */}
        <div className="flex items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
            <div className="flex flex-col  w-full gap-y-1">
              <label htmlFor="">
              İş Açıklaması<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent h-32 focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                name="isAciklama"
                id=""
                type="text"
                value={formik.values.isAciklama}
                onChange={formik.handleChange}
              />
                 {formik.touched.isAciklama && formik.errors.isAciklama && (
                <p className="text-red-500">{formik.errors.isAciklama}</p>
              )}
            </div>
          </div>
          {/* -------------  form section 5----------------- */}
          <div className="pl-20 w-full mt-3">
          <button type="submit" className="text-white bg-purple-600 p-2 rounded-2xl sm:w-[15%] w-[50%]">Kaydet</button>
          </div>
   </form>
    </div>
  );
};

export default Deneyimlerim;
