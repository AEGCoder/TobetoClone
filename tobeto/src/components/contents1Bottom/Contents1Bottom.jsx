import React from "react";

const Contents1Bottom = () => {
  return (
    <div className="text-white flex flex-col gap-y-10 items-center justify-center">
      {/* section 1 bottom */}
      <div className="flex flex-col items-center border-2 border-[#9833FF] sm:w-[1134px] w-full min-h-[362px]  gap-y-10 py-5 sm:px-28 px-2">
        <div className="w-full h-[50%] flex sm:flex-row flex-col items-center justify-center gap-x-10">
          <img
            className="sm:w-40 w-24 object-cover rounded-lg sm:h-40 h-24"
            src="img/bottom1.png"
            alt=""
          />
          <p className="sm:text-2xl text-lg text-center leading-relaxed font-semibold tracking-wider">
            Dünyanın en büyük kodlama eğitimi platformu içerikleri şimdi Tobeto
            deneyimi ile!
          </p>
        </div>
        <div className="w-full h-[50%]">
          <p className="sm:text-xl text-base text-center leading-relaxed font-semibold tracking-wider">
            Codecademy’nin tüm kaynaklarına Tobeto aboneliğinin sağlayacağı
            avantajlar, alanında uzman eğitmenlerle canlı dersler ve mentörlerin
            desteği ile erişebilir, yeni kariyerine başlayabilirsin!
          </p>
        </div>
      </div>
      {/* section 2 bottom */}
      <div className="bg-[#9531FB] w-full min-h-[287px] flex sm:flex-row flex-col items-center justify-between sm:p-10 p-2">
        <div className="pb-24">
          <img
            className="w-36 object-cover"
            src="img/bottom1leftImg.svg"
            alt=""
          />
        </div>
        <div className="w-2/3 flex flex-col gap-y-5 font-bold tracking-wide leading-relaxed text-lg text-center">
          <p>
            Tobeto Platform'da ücretsiz olarak; sahip olduğun yetkinlikleri
            değerlendirir, ilgi ve bilgi seviyene göre yüzlerce eğitim içeriğine
            ulaşırsın. Bunları nasıl tamamlayacağını hızına, bütçene ve zamanına
            göre kendin belirlersin.
          </p>
          <span className="text-2xl border-b shadow-md shadow-yellow-400 border-yellow-400 pb-5">
            Hemen ücretsiz üye ol, platforma katıl!
          </span>
        </div>
        <div className="pt-24">
          <img
            className="w-36 object-cover"
            src="img/bottom1RightImg.svg"
            alt=""
          />
        </div>
      </div>
      {/* section 3 bottom */}
      <div className="container mx-auto sm:p-14 p-2 ">
        <div className="flex flex-col items-center justify-around w-full sm:gap-y-7 gap-y-2">
        <div className="border-b border-[#FF4D06] border-dashed w-full animate-pulse"></div>
        <p className="sm:text-xl text-base font-bold tracking-wide leading-loose">
          Tobeto , 20. yy''ın “headhunting” yaklaşımını “headfarming” olarak
          değiştirmeyi hedefler! Headfarming: Genç yetenekleri, sürekli öğrenme
          hevesi içinde olan profesyonelleri, 360 derece eğitmek,
          değerlendirmek, yönlendirmek ve desteklemektir.
        </p>
        <div className="border-b border-[#9833FF] border-dashed w-full animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default Contents1Bottom;
