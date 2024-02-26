import React from 'react'

const Contents2Bottom = () => {
  return (
    <div className='text-white container mx-auto sm:p-10 p-2 min-h-[640px] flex sm:flex-row flex-col items-center bg-[#2F2F2F]'>
      <div className='sm:w-1/2 w-full h-full flex items-center justify-center'>
        <img src="img/spider.gif" alt="" />
      </div>
      <div className='sm:w-1/2 w-full  h-full flex flex-col items-start gap-y-10 justify-center p-5'>
        <h3 className='font-bold text-lg tracking-wider'>
Tobeto 'İşte Başarı Modeli'mizi Keşfet!</h3>
<p>Üyelerimize ücretsiz sunduğumuz, iş bulma ve işte başarılı olma sürecinde gerekli 80 tane davranış ifadesinden oluşan Tobeto 'İşte Başarı Modeli' ile, profesyonellik yetkinliklerini ölç,
raporunu gör.</p>
<button className='bg-[#9833FF] py-2 px-6 rounded-2xl'>Hemen Başla</button>
      </div>
    </div>
  )
}

export default Contents2Bottom