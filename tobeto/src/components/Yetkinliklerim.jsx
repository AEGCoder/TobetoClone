import React from "react";
import { useFormik } from "formik";
import { userSchema } from "./YetkinliklerimYup";
const Yetkinliklerim = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.setSubmitting(false);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      yetkinliklerim: {
        sql: "",
        muhasebe: "",
        aktifOgrenme: "",
        aktifDinleme: "",
        uyumSaglama: "",
        yonetimVeIdare: "",
        reklam: "",
        markaYonetimi: "",
      },
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div className="w-full h-full flex flex-col gap-y-10 items-center justify-center py-10">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col gap-y-5"
      >
        {/** Deneyimlerim section -----1------------ */}
        <div className="flex items-center w-full gap-x-10 px-20">
          <div className="flex flex-col w-full pl-3 gap-y-1">
            <label htmlFor="">
              Eğitim Durumu<sup>*</sup>
            </label>
            <select
              className="outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg"
              name="yetkinliklerim"
              id=""
              value={formik.values.yetkinliklerim.sql}
              onChange={formik.handleChange}
            >
              <option value="" disabled>
                Seçiniz
              </option>
              <option value="sql">Sql</option>
              <option value="muhasebe">Muhasebe</option>
              <option value="aktifOgrenme">Aktif Öğrenme</option>
              <option value="aktifDinleme">Aktif Dinleme</option>
              <option value="uyumSaglama">Uyum Sağlama</option>
              <option value="yonetimVeIdare">Yönetim ve İdare</option>
              <option value="reklam">Reklam</option>
              <option value="markaYonetimi">Marka Yönetimi</option>
            </select>

            {formik.touched.yetkinliklerim && formik.errors.yetkinliklerim && (
              <p className="text-red-500">{formik.errors.yetkinliklerim}</p>
            )}
          </div>
        </div>
        {/* -------------  form section 2----------------- */}
        <div className="pl-20">
          <button
            type="submit"
            className="text-white bg-purple-600 p-2 rounded-2xl sm:w-[15%] w-[50%]"
          >
            Kaydet
          </button>
        </div>
        {/* -------------  form section 3----------------- */}
      </form>
    </div>
  );
};

export default Yetkinliklerim;
