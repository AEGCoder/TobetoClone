import React from "react";
import Footer from "../../components/Footer/Footer";
const BizKimiz = () => {
  return (
    <div className="text-white container mx-auto flex flex-col sm:gap-y-16 gap-y-12">
      {/* section 1 component */}
      <div className="flex sm:flex-row flex-col items-center justify-between sm:px-20 px-2">
        <div className="sm:w-1/4 w-full">
          <img className="sm:w-[60%] w-[40%] h-full" src="img/bizkimizust.svg" alt="" />
        </div>
        <div className="sm:w-2/4 w-full">
          <p className="font-bold tracking-wider leading-relaxed sm:text-2xl text-lg">
            {" "}
            <span className="text-center w-full font-bold sm:text-4xl text-2xl">
              Tobeto,
            </span>{" "}
            <br />
            "headhunting" yaklaşımını "headfarming" olarak <br /> değiştirmeyi
            hedefleyen, eğitim ve gelişim <br /> odaklı dijital bir platformdur
          </p>
        </div>
        <div className="sm:w-1/4 w-full">
          <video className="rounded-lg" src="img/bizkimizvideo.mp4"></video>
        </div>
      </div>
      {/* section 2 component */}
      <div className="flex flex-col gap-y-4 sm:p-0 p-1 sm:text-base text-sm">
        <p>
          Geleceğin mesleklerindeki yetenek açığını, geleneksel "headhunting"
          yaklaşımının "headfarming" olarak değişmesiyle çözülebileceğine
          inanarak yola çıktık.
        </p>
        <p>
          Tobeto, "headfarming" yaklaşımıyla yeteneği potansiyel olarak
          değerlendirir, en kıymetli olacağı alanda yetiştirir, değer yaratacağı
          projeler ve kurumlarla eşleştirir. Bu fırsata Y.E.S.
          (Yetiş-Eşleş-Sürdür) diyen herkesi Tobeto’lu olmaya çağırıyoruz.
        </p>
        <p>
          Günümüzde iş bulmak, bir projeye dahil olmak veya kariyerinde
          yükselmek gibi değer yaratma yolları için en önemli unsurların başında
          dijital beceri sahibi olmak geliyor. Tam da bu ihtiyaçları kapsamak
          üzere, Tobeto'da eğitim içeriklerimizi hem{" "}
          <span className="font-bold text-lg"> dijital beceri</span> sahibi
          olmak isteyen yeteneklerin teknik beceri kazanması hem de genç
          profesyonellerin, ihtiyaçlarına uygun olarak yenilenmeleri ve
          yetkinliklerini geliştirmelerini kapsayacak şekilde tek platformda
          birleştirdik.
        </p>
        <p>
          Tobeto’da hem bireylere hem de kurumlara hizmet eden yapımızla, doğru
          yetenekle doğru pozisyonun sürdürülebilir bir şekilde eşleşmesine ve
          birlikte gelişmelerine alan açıyoruz. Kurum içi çözümlere destek
          veriyor, eğitim ve istihdam arasında köprü görevini üstleniyoruz.
        </p>
      </div>
      {/* section 3 component */}
      <div className=" sm:text-2xl text-sm flex flex-col items-start sm:px-56 px-2  gap-y-4">
        <h2 className="tracking-wider font-bold text-3xl text-center w-full">Tobeto farkı;</h2>
        <div className="flex items-center gap-x-3">
          <img className="sm:w-16 w-14" src="img/tagpurple.svg" alt="" />
          <p>Codecademy ile uluslararası geçerliliğe sahip sertifika fırsatı</p>
        </div>
        <div className="flex items-center gap-x-3">
          <img className="sm:w-16 w-14" src="img/tagpurple.svg" alt="" />
          <p>Abonelik modeliyle eğitime erişim</p>
        </div>
        <div className="flex items-center gap-x-3">
          <img className="sm:w-16 w-14" src="img/tagpurple.svg" alt="" />
          <p>
            Çeşitlendirilmiş değerlendirme araçlarıyla gelişim alanlarını tanıma
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <img className="sm:w-16 w-14" src="img/tagpurple.svg" alt="" />
          <p>Fark yaratan bir gelişim süreci</p>
        </div>
        <div className="flex items-center gap-x-3">
          <img className="sm:w-16 w-14" src="img/tagpurple.svg" alt="" />
          <p>
            Mesleki eğitimlerin yanı sıra kişisel ve profesyonel gelişim imkanı
          </p>
        </div>
        <div className="flex items-center gap-x-3">
          <img className="sm:w-16 w-14" src="img/tagpurple.svg" alt="" />
          <p>Alanında uzman eğitmenlerle canlı dersler</p>
        </div>
        <div className="flex items-center gap-x-3">
          <img className="sm:w-16 w-14" src="img/tagpurple.svg" alt="" />
          <p>Mentör desteği</p>
        </div>
        <div className="flex items-center gap-x-3">
          <img className="sm:w-16 w-14" src="img/tagpurple.svg" alt="" />
          <p>Online ve canlı derslerle hibrit yaklaşım</p>
        </div>
        <div className="flex items-center gap-x-3">
          <img className="sm:w-16 w-14" src="img/tagpurple.svg" alt="" />
          <p>Zengin eğitim kütüphanesi</p>
        </div>
      </div>
      {/* section 4 component */}
      <div className="flex flex-col gap-y-10 items-center justify-center">
        <p className=" sm:text-2xl text-lg text-center font-bold tracking-wider text-purple-500">Tobeto ile işe hazırlan, işe yerleş, işinde geliş, yüksel!</p>
        <p className="bg-gradient-to-r from-purple-300 via-purple-500 to-purple-800 w-5 sm:h-48 h-36 rounded-md"></p>
      </div>
      {/* section 5 component */}
      <div className="flex flex-col gap-y-10">
        <div>
          <h2 className="text-center text-2xl font-bold tracking-wider">Ekibimiz</h2>
          <ul className="mt-10 grid sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-3">
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse2.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2  sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse2.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse2.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse2.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse2.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse2.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse2.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
      
          </ul>
        </div>
        <div className="">
          <h2 className="text-center text-2xl font-bold tracking-wider">Danışma Kurulu</h2>
          <ul className="mt-10 grid sm:grid-cols-4 grid-cols-2 sm:gap-10 gap-5">
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse3.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse3.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse3.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse3.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse3.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse3.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
            <li className="flex flex-col items-center gap-y-1">
              <div className="border-4 border-purple-600 p-2   sm:h-[160px] h-[120px] sm:w-[160px] w-[120px]">
                <img className="w-full h-full object-cover" src="img/collapse3.png" alt="" />
              </div>
              <div className="flex flex-col gap-y-1 text-md items-center font-bold">
                <p>Tofu İsimsiz</p>
                <p>Kurucu Direktörü</p>
              </div>
            </li>
      
          </ul>
        </div>
      </div>
      {/* section 6 component */}
      <div className="bg-[#36194F] w-full h-[195px] rounded-full flex items-center justify-center flex-col gap-y-5 ">
        <span className="font-bold sm:text-xl text-lg tracking-wider">Ofisimiz</span>
        <p className="sm:text-base text-xs text-center p-1">Uranüs, sokaklı Mah. Termos Sok. No:4 Tersi PlazaBeyti C Blok Kat:12 3425, Beykoz,Londra</p>
      </div>
      <Footer />
    </div>
  );
};

export default BizKimiz;
