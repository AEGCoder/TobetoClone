import React from "react";
import { FaUserEdit } from "react-icons/fa";
import { useFormik } from "formik";
import { userSchema } from "./KisiselBilgilerimYup";
const KisiselBilgilerim = () => {
  const onSubmit = async (values, actions) => {
    console.log(values);
    console.log(actions);
    actions.setSubmitting(false);
    await new Promise((resolve) => setTimeout(resolve, 3000));
    formik.resetForm();
  };

  const formik = useFormik({
    initialValues: {
      userName: "",
      userSurname: "",
      userPhone: "",
      userBirthDate: "",
      userTC: "",
      userEmail: "",
      userCountry: "",
      userCity: "",
      userDistrict: "",
      userStreet: "",
      userAbout: "",
    },
    validationSchema: userSchema,
    onSubmit,
  });

  return (
    <div className="w-full h-full flex flex-col gap-y-10 items-center justify-center py-10">
      <span className="text-6xl  text-black cursor-pointer">
        <FaUserEdit />
      </span>
      <div className="w-full">
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col gap-y-8 w-full"
        >
          {/* -------------  form section 1----------------- */}
          <div className="flex items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
            <div className="flex flex-col w-[50%]  gap-y-1">
              <label htmlFor="">
                Adınız<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="text"
                placeholder="Adınızı Giriniz..."
                name="userName"
                id=""
                value={formik.values.userName}
                onChange={formik.handleChange}
              />
              {formik.touched.userName && formik.errors.userName && (
                <p className="text-red-500">{formik.errors.userName}</p>
              )}
            </div>
            <div className="flex flex-col w-[50%] gap-y-1">
              <label htmlFor="">
                Soyadınız<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="text"
                placeholder="Soydınızı Giriniz..."
                name="userSurname"
                id=""
                value={formik.values.userSurname}
                onChange={formik.handleChange}
              />
              {formik.touched.userSurname && formik.errors.userSurname && (
                <p className="text-red-500">{formik.errors.userSurname}</p>
              )}
            </div>
          </div>
          {/* -------------  form section 2----------------- */}
          <div className="flex items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
            <div className="flex flex-col w-[50%] gap-y-1">
              <label htmlFor="">
                Telefon Numaranız<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="phone"
                placeholder="Telefon Numaranızı Giriniz..."
                name="userPhone"
                id=""
                value={formik.values.userPhone}
                onChange={formik.handleChange}
              />
              {formik.touched.userPhone && formik.errors.userPhone && (
                <p className="text-red-500">{formik.errors.userPhone}</p>
              )}
            </div>
            <div className="flex flex-col w-[50%] gap-y-1">
              <label htmlFor="">
                Doğum Tarihiniz<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="date"
                placeholder="Doğum Tarihinizi Giriniz..."
                name="userBirthDate"
                id=""
                value={formik.values.userBirthDate}
                onChange={formik.handleChange}
              />
              {formik.touched.userBirthDate && formik.errors.userBirthDate && (
                <p className="text-red-500">{formik.errors.userBirthDate}</p>
              )}
            </div>
          </div>
          {/* -------------  form section 3----------------- */}
          <div className="flex  items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
            <div className="flex flex-col w-[50%] gap-y-1 pt-12 sm:pt-0">
              <label htmlFor="">
                TC Kimlik No<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="text"
                placeholder="TC No Giriniz..."
                name="userTC"
                id=""
                value={formik.values.userTC}
                onChange={formik.handleChange}
              />
              {formik.touched.userTC && formik.errors.userTC && (
                <p className="text-red-500">{formik.errors.userTC}</p>
              )}
              <span className="text-red-500">
                *Aboneliklerde fatura için doldurulması zorunlu alan
              </span>
            </div>
            <div className="flex flex-col w-[50%] gap-y-1">
              <label htmlFor="">
                E-posta<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="email"
                placeholder="Email Giriniz..."
                name="userEmail"
                id=""
                value={formik.values.userEmail}
                onChange={formik.handleChange}
              />
              {formik.touched.userEmail && formik.errors.userEmail && (
                <p className="text-red-500">{formik.errors.userEmail}</p>
              )}
            </div>
          </div>
          {/* -------------  form section 4----------------- */}
          <div className="flex items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
            <div className="flex flex-col w-full gap-y-1">
              <label htmlFor="">
                Ülke<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="text"
                placeholder="Ülkenizi Giriniz..."
                name="userCountry"
                id=""
                value={formik.values.userCountry}
                onChange={formik.handleChange}
              />
              {formik.touched.userCountry && formik.errors.userCountry && (
                <p className="text-red-500">{formik.errors.userCountry}</p>
              )}
            </div>
          </div>
          {/* -------------  form section 5----------------- */}
          <div className="flex  items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
            <div className="flex flex-col w-[50%] gap-y-1">
              <label htmlFor="">
                İl<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="text"
                placeholder="TC No Giriniz..."
                name="userCity"
                id=""
                value={formik.values.userCity}
                onChange={formik.handleChange}
              />
              {formik.touched.userCity && formik.errors.userCity && (
                <p className="text-red-500">{formik.errors.userCity}</p>
              )}
            </div>
            <div className="flex flex-col w-[50%] gap-y-1">
              <label htmlFor="">
                İlçe<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                type="email"
                placeholder="Email Giriniz..."
                name="userDistrict"
                id=""
                value={formik.values.userDistrict}
                onChange={formik.handleChange}
              />
              {formik.touched.userDistrict && formik.errors.userDistrict && (
                <p className="text-red-500">{formik.errors.userDistrict}</p>
              )}
            </div>
          </div>
          {/* -------------  form section 6----------------- */}
          <div className="flex items-center w-full sm:gap-x-10 gap-x-5 sm:px-20 px-2">
            <div className="flex flex-col  w-full gap-y-1">
              <label htmlFor="">
                Mahalle/Sokak<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent h-32 focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                name="userStreet"
                id=""
                type="text"
                value={formik.values.userStreet}
                onChange={formik.handleChange}
              />
              {formik.touched.userStreet && formik.errors.userStreet && (
                <p className="text-red-500">{formik.errors.userStreet}</p>
              )}
            </div>
          </div>
          {/* -------------  form section 7----------------- */}
          <div className="flex items-center w-full gap-x-10 sm:px-20 px-2">
            <div className="flex flex-col  w-full gap-y-1">
              <label htmlFor="">
                Hakkımda<sup>*</sup>
              </label>
              <input
                className=" outline-none border border-gray-500 bg-transparent h-32 focus:ring-2 focus:ring-purple-500 p-2 transition-all duration-300 rounded-lg
                    "
                name="userAbout"
                id=""
                type="text"
                value={formik.values.userAbout}
                onChange={formik.handleChange}
              />
              {formik.touched.userAbout && formik.errors.userAbout && (
                <p className="text-red-500">{formik.errors.userAbout}</p>
              )}
            </div>
          </div>
          {/* -------------  form section 8----------------- */}
          <div className="pl-20">
            <button
              type="submit"
              className="text-white bg-purple-600 p-2 rounded-2xl sm:w-[15%] w-[50%]"
            >
              Kaydet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default KisiselBilgilerim;
