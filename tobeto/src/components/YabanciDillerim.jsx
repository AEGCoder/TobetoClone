import React from 'react';
import { useFormik } from 'formik';
import { userSchema } from './YabanciDillerimYup';

const YabanciDillerim = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.setSubmitting(false);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      yabanciDillerim: {
        dil: '',
        seviye: '',
      },
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div className="w-full h-full flex flex-col gap-y-10 items-center justify-center py-10">
      <form onSubmit={formik.handleSubmit} className="w-full flex flex-col items-start gap-y-10">
        <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center w-full">
          <div className="flex items-center sm:w-[50%] w-full gap-x-10 px-20">
            <div className="flex flex-col w-full pl-3 gap-y-1">
              <label htmlFor="">
                Yabancı Dil<sup>*</sup>
              </label>
              <select
                className="outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg"
                name="dil"
                id=""
                value={formik.values.yabanciDillerim.dil}
                onChange={formik.handleChange}
              >
                <option value="" disabled>
                  Seçiniz
                </option>
                <option value="Ingilizce">İngilizce</option>
                <option value="Fransızca">Fransızca</option>
                <option value="Ispanyolca">İspanyolca</option>
                <option value="Arapca">Arapça</option>
                <option value="Cince">Çince</option>
                <option value="Hollandaca">Hollandaca</option>
              </select>
              {formik.touched.dil && formik.errors.dil && (
  <div className="text-red-500">{formik.errors.dil}</div>
)}
            </div>
          </div>
          <div className="flex items-center sm:w-[50%] w-full gap-x-10 px-20">
            <div className="flex flex-col w-full pl-3 gap-y-1">
              <label htmlFor="">
                Seviye<sup>*</sup>
              </label>
              <select
                className="outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg"
                name="seviye"
                id=""
                value={formik.values.yabanciDillerim.seviye}
                onChange={formik.handleChange}
              >
                <option value="" disabled>
                  Seçiniz
                </option>
                <option value="Temel Seviye (A1,A2)">Temel Seviye (A1,A2)</option>
                <option value="Orta Seviye (B1,B2)">Orta Seviye (B1,B2)</option>
                <option value="İleri Seviye (C1,C2)">İleri Seviye (C1,C2)</option>
                <option value="Anadil">Anadil</option>
              </select>
              {formik.touched.seviye && formik.errors.seviye && (
                <p className="text-red-500">{formik.errors.seviye}</p>
              )}
            </div>
          </div>
        </div>
        {/* -------------  form section 3----------------- */}
        <div className="pl-20 w-full">
          <button type="submit" className="text-white cursor-pointer bg-purple-600 p-2 rounded-2xl sm:w-[15%] w-[50%]">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default YabanciDillerim;
