import React from "react";
import { useFormik } from "formik";
import { userSchema } from "./EgitimHayatimYup";

const EgitimHayatım = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.setSubmitting(false);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      eğitimDurumu: {
        lisans: "",
        önLisans: "",
        yüksekLisans: "",
        doktora: "",
      },
      universite: "",
      bolum: "",
      baslangicYil: "",
      mezuniyetYil: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div className="flex flex-col items-center justify-center gap-y-5">
      <form className="w-full" onSubmit={formik.handleSubmit}>
        {/** Deneyimlerim section -----1------------ */}
        <div className="flex items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
          <div className="flex flex-col w-[50%] gap-y-1">
            <label htmlFor="">
              Eğitim Durumu<sup>*</sup>
            </label>
            <select
              className="outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg"
              name="eğitimDurumu"
              id=""
              value={formik.values.eğitimDurumu}
              onChange={formik.handleChange}
            >
              <option disabled value="">
                Seviye Seçiniz
              </option>
              <option value="lisans">Lisans</option>
              <option value="önLisans">Ön Lisans</option>
              <option value="yüksekLisans">Yüksek Lisans</option>
              <option value="doktora">Doktora</option>
            </select>

            {formik.touched.eğitimDurumu && formik.errors.eğitimDurumu && (
              <p className="text-red-500">{formik.errors.eğitimDurumu}</p>
            )}
          </div>
          <div className="flex flex-col w-[50%] gap-y-1">
            <label htmlFor="">
              Üniversite<sup>*</sup>
            </label>
            <input
              className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
              type="text"
              placeholder="Üniversite Giriniz..."
              name="universite"
              id=""
              value={formik.values.universite}
              onChange={formik.handleChange}
            />
            {formik.touched.universite && formik.errors.universite && (
              <p className="text-red-500">{formik.errors.universite}</p>
            )}
          </div>
        </div>
        {/* -------------  form section 2----------------- */}
        <div className="flex items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
          <div className="flex flex-col w-[50%] gap-y-1">
            <label htmlFor="">
              Bölüm<sup>*</sup>
            </label>
            <input
              className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
              type="text"
              placeholder="Yazılım..."
              name="bolum"
              id=""
              value={formik.values.bolum}
              onChange={formik.handleChange}
            />
            {formik.touched.bolum && formik.errors.bolum && (
              <p className="text-red-500">{formik.errors.bolum}</p>
            )}
          </div>
          <div className="flex flex-col w-[50%] gap-y-1">
            <label htmlFor="">
              Başlangıç Yıl<sup>*</sup>
            </label>
            <input
              className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
              type="date"
              name="baslangicYil"
              id=""
              value={formik.values.baslangicYil}
              onChange={formik.handleChange}
            />
            {formik.touched.baslangicYil && formik.errors.baslangicYil && (
              <p className="text-red-500">{formik.errors.baslangicYil}</p>
            )}
          </div>
        </div>
        {/* -------------  form section 3----------------- */}
        <div className="flex items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
          <div className="flex flex-col w-[50%] gap-y-1">
            <label htmlFor="">
              Mezuniyet Yıl<sup>*</sup>
            </label>
            <input
              className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
              type="text"
              placeholder="Mezuniyet Yılınızı Giriniz..."
              name="mezuniyetYil"
              id=""
              value={formik.values.mezuniyetYil}
              onChange={formik.handleChange}
            />
            {formik.touched.mezuniyetYil && formik.errors.mezuniyetYil && (
              <p className="text-red-500">{formik.errors.mezuniyetYil}</p>
            )}
          </div>
        </div>

        {/* -------------  form section 4----------------- */}
        <div className="pl-20 w-full mt-5">
          <button
            type="submit"
            className="text-white bg-purple-600 p-2 rounded-2xl sm:w-[15%] w-[50%]"
          >
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
};

export default EgitimHayatım;
