import React,{useState} from 'react'

const Content = () => {

    const [IndexComponent, setIndexComponent] = useState(0)

  return (
    <div className='text-white flex sm:flex-row flex-col items-center  sm:gap-x-20 gap-x-2 justify-around py-10 sm:px-36 px-2 min-h-[690px]'>
        {/* left components */}
        <div className='sm:w-1/2 w-full h-full flex flex-col gap-y-5 items-center justify-between py-3'>
            <h1 className='sm:text-3xl text-xl leading-relaxed font-bold tracking-wide animate-pulse'>Hangi Konuda Kendini Geliştirmek İstersin?</h1>
            <div onClick={()=>setIndexComponent(0)} className='flex flex-col items-start sm:gap-y-5 gap-y-2 cursor-pointer hover:bg-gray-800  sm:rounded-full rounded-lg sm:p-10 p-2 transition-colors duration-300'>
                <h3 className='text-2xl leading-relaxed font-medium tracking-wide'>Teknik ve Profesyonel Eğitimler</h3>
                <p className='text-gray-400'>Kapsamlı beceri setlerinden, gelişmek istediğin konuyu seç, kariyerinde bir adım öne geç.</p>
            </div>
            <div onClick={()=>setIndexComponent(1)} className='flex flex-col items-start sm:gap-y-5 gap-y-2 cursor-pointer hover:bg-gray-800 sm:rounded-full rounded-lg sm:p-10 p-2 transition-colors duration-300'>
                <h3 className='text-2xl leading-relaxed font-medium tracking-wide'>Yeni bir Meslek</h3>
                <p className='text-gray-400'>İhtiyaç duyduğun kapsamlı beceri setlerinden oluşan eğitim yolculuğunu seç, yazılım veya profesyonel iş alanlarında tercih ettiğin yeni mesleğine doğru ilk adımı at.</p>
            </div>
        </div>
        {/* right components */}
        <div className='sm:w-1/2 w-full h-full bg-[#2F2F2F]'>
            {
                IndexComponent === 0 ? (
                    <div className='grid grid-cols-2 sm:p-5 p-2 sm:gap-10 gap-2 text-black place-items-center'>
                <div className='sm:w-[231px] w-full h-[160px]  bg-white rounded-2xl flex items-center text-center p-2 justify-center'>
                    <p className='font-bold sm:text-xl text-sm'>Object Oriented <br /> Programming <br /> (OOP)</p>
                </div>
                <div className='sm:w-[231px] w-full h-[160px] bg-white rounded-2xl flex items-center text-center p-2 justify-center'>
                    <p className='font-bold sm:text-xl text-sm'>Microsoft SQL <br /> Server <br /> Database</p>
                </div>
                <div className='sm:w-[231px] w-full h-[160px] bg-white rounded-2xl flex items-center text-center p-2 justify-center'>
                    <p className='font-bold sm:text-xl text-sm'>HTML-CSS-SASS</p>
                </div>
                <div className='sm:w-[231px] w-full h-[160px] bg-white rounded-2xl flex items-center text-center p-2 justify-center'>
                    <p className='font-bold sm:text-xl text-sm'>Javascript</p>
                </div>
                <div className='sm:w-[231px] w-full h-[160px] bg-white rounded-2xl flex items-center text-center p-2 justify-center'>
                    <p className='font-bold sm:text-xl text-sm'>ASPNET Core <br /> MVC</p>
                </div>
                <div className='sm:w-[231px] w-full h-[160px] bg-white rounded-2xl flex items-center text-center p-2 justify-center'>
                    <p className='font-bold sm:text-xl text-sm'>C# <br /> Programming</p>
                </div>
            </div>
                ) : (
                    <div className='grid grid-cols-2 sm:p-5 p-2 sm:gap-10 gap-2 text-black place-items-center'>
                    <div className='sm:w-[231px] w-full h-[160px] bg-white rounded-2xl flex items-center text-center p-2 justify-center'>
                        <p className='font-bold sm:text-xl text-sm'>Full Stack <br /> Developer</p>
                    </div>
                    <div className='sm:w-[231px] w-full h-[160px] bg-white rounded-2xl flex items-center text-center p-2 justify-center'>
                        <p className='font-bold sm:text-xl text-sm'>Front End <br /> Developer</p>
                    </div>
                    <div className='sm:w-[231px] w-full h-[160px] bg-white rounded-2xl flex items-center text-center p-2 justify-center'>
                        <p className='font-bold sm:text-xl text-sm'>Web & Mobile <br /> Developer</p>
                    </div>
                    <div className='sm:w-[231px] w-full h-[160px] bg-white rounded-2xl flex flex-col relative items-center text-center p-2 justify-center'>
                        <p className='font-bold sm:text-xl text-sm'>Siber Güvenlik <br /> Uzmanı</p>
                        <img className='absolute bottom-1 right-1 w-16 object-cover' src="img/cokyakinda.svg" alt="" />
                    </div>
                    <div className='sm:w-[231px] w-full h-[160px] bg-white rounded-2xl flex flex-col relative items-center text-center p-2 justify-center'>
                        <p className='font-bold sm:text-xl text-sm'>Veri Bilimi <br /> Uzmanı</p>
                        <img className='absolute bottom-1 right-1 w-16 object-cover' src="img/cokyakinda.svg" alt="" />
                    </div>
                    <div className='sm:w-[231px] w-full h-[160px] bg-white rounded-2xl flex flex-col relative items-center text-center p-2 justify-center'>
                        <p className='font-bold sm:text-xl text-sm'>UI/UX <br /> Developer</p>
                        <img className='absolute bottom-1 right-1 w-16 object-cover' src="img/cokyakinda.svg" alt="" />
                    </div>
                </div>
                )
            }
        </div>
    </div>
  )
}

export default Content