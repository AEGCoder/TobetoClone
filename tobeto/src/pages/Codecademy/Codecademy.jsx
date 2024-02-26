import React from "react";
import Footer from "../../components/Footer/Footer";
const Codecademy = () => {
  return (
    <div className="flex flex-col gap-y-10 container mx-auto items-center sm:px-20 px-2">
      <div className="flex flex-col gap-y-7 items-center justify-center">
        <div>
          <h1 className="font-bold sm:text-2xl text-lg">
            Kodlama, pek çok olasılığı içinde barındıran bir dünya. Başlamak
            için tek gereken ise merak ve öğrenme dürtüsü.
          </h1>
        </div>
        <div className="flex sm:flex-row flex-col sm:gap-y-0 gap-y-5 items-center gap-x-3">
          <div>
            <img
              src="https://tobeto.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fca-1.cf0e22ca.png&w=640&q=75"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-y-5 text-center">
            <p>
              Dünya çapında milyonlarca insanın günümüz dijital dünyasında
              başarılı olmak için ihtiyaç duyduğu becerileri eğlenceli bir
              şekilde edinmelerine olanak sağlayan{" "}
              <span className="text-purple-600 sm:text-xl text-base font-bold">
                Codecademy*
              </span>{" "}
              içerikleri şimdi Tobeto deneyimi ile sana daha yakın!
            </p>
            <p>
              *Codecademy; 2011'den beri, 50 milyondan fazla üyenin kendi için
              yeni bir yaşam ve kariyer geliştirmesine, projelerini hayata
              geçirmesine yardımcı olan bir kodlama eğitimi platformudur.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-5 text-lg">
          <h3 className="sm:text-2xl text-lg">Codecademy & Tobeto</h3>
          <p className="sm:text-base text-sm">
            Codecademy'nin tüm kaynaklarına Tobeto aboneliği ile erişebilirsin.
          </p>
          <p className="sm:text-base text-sm">
            Aboneliğin sağlayacağı Türkçe canlı dersler, alanında uzman
            eğitmenler ve öğrenmeni kolaylaştıracak mentör desteğiyle ile
            öğrenmeni destekleyici kaynaklarımız bu süreci kolaylaştırmak ve
            hızlandırmak için senin yanında!
          </p>
          <button className="bg-purple-600 py-2 sm:px-10 px-24 rounded-md">
            Hemen Abone Ol!
          </button>
        </div>
      </div>
      <div className="">
        <img className="w-full h-full object-cover" src="img/codeacademygif.gif" alt="" />
      </div>
      <div className="flex flex-col gap-y-5 sm:text-xl text-base font-bold">
        <div>
          <span className="text-purple-600 sm:text-2xl text-lg tracking-widest">Şimdi </span><br />
          Codecademy'nin <br />
          zengin kataloğu ile :
        </div>
        <p className="sm:text-base text-sm">
          Gerçek zamanlı, kendi hızında kod yaz, anında geri bildirim al,
          etkileşimle yaparak öğren. Öğrenme deneyimine destek için makaleler,
          videolar ve projelerden faydalan.
        </p>
        <button className="bg-purple-600 py-2 px-10 rounded-md">
          Hemen Abone Ol!
        </button>
      </div>
      <Footer />
    </div>
  );
};

export default Codecademy;
