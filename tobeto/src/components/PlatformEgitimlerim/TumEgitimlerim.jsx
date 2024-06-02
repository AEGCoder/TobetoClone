import React from "react";

const TumEgitimlerim = ({ egitimlerData }) => {
  return (
    <div>
        <h2 className="pt-10 pb-5 text-2xl font-medium tracking-wider">Tüm Eğitimleri Görüyorsunuz</h2>
      <ul className="grid sm:grid-cols-4 grid-cols-1 sm:px-0 px-3 gap-10">
        {egitimlerData.map((egitim) => (
          <li key={egitim._id} className="border h-[300px] flex flex-col items-center p-2 rounded-lg">
            <div className="w-full h-[50%]">
              <img
                className="w-full h-full object-cover rounded-lg"
                src={egitim.img}
                alt=""
              />
            </div>
            <div className="w-full h-full flex flex-col justify-between">
              <div className="flex flex-col gap-y-2 pt-2">
                {" "}
                <p className="font-bold">{egitim.title}</p>
                <p>{egitim.createdAt && new Date(egitim.createdAt).toLocaleDateString()}</p>
              </div>
              <div>
                <button className="bg-gray-300 text-black w-full rounded-lg py-2 hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Eğitime Git
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TumEgitimlerim;
