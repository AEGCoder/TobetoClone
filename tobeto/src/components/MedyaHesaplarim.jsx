import React from "react";
import { useFormik } from "formik";
import { userSchema } from "./MedyaHesaplarimYup";

const MedyaHesaplarim = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.setSubmitting(false);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      medyaHesaplarim: {
        instagram: "",
        twitter: "",
        linkedin: "",
        behance: "",
        dribble: "",
        github: "",
      },
      site: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div className="w-full h-full flex flex-col gap-y-10 items-start justify-start py-10">
      <form
        onSubmit={formik.handleSubmit}
        className="w-full flex flex-col  items-start justify-start gap-y-10"
      >
        {/** Deneyimlerim section -----1------------ */}
        <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-start w-full">
          <div className="flex items-center sm:w-[50%] w-full gap-x-10 px-20">
            <div className="flex flex-col w-full pl-3 gap-y-1">
              <label htmlFor="">
                Eğitim Durumu<sup>*</sup>
              </label>
              <select
  className="outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg"
  name="medyaHesaplarim"
  id=""
  value={formik.values.medyaHesaplarim.instagram}
  onChange={formik.handleChange}
>
  <option value="" disabled>
    Seçiniz
  </option>
  <option value="instagram">Instagram</option>
  <option value="twitter">Twitter</option>
  <option value="linkedin">Linkedin</option>
  <option value="behance">Behance</option>
  <option value="dribble">Dribble</option>
  <option value="github">Github</option>
</select>

              {formik.touched.medyaHesaplarim &&
                formik.errors.medyaHesaplarim && (
                  <p className="text-red-500">
                    {formik.errors.medyaHesaplarim}
                  </p>
                )}
            </div>
          </div>
          <div className="flex items-center sm:w-[50%] w-full gap-x-10 px-20">
            <div className="flex flex-col w-full pl-3 gap-y-1">
              <label htmlFor="">
                Site: <sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="text"
                placeholder="https://"
                name="site"
                id=""
                value={formik.values.site}
                onChange={formik.handleChange}
              />
                {formik.touched.site &&
                formik.errors.site && (
                  <p className="text-red-500">
                    {formik.errors.site}
                  </p>
                )}
            </div>
          </div>
        </div>
        {/* -------------  form section 8----------------- */}
        <div className="pl-20 w-full">
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

export default MedyaHesaplarim;
