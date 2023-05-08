import React from 'react';
import { BsWhatsapp, BsTelephone } from 'react-icons/bs';
import { TiltLink } from './Buttons';

function Contact() {
  return (
    <div className="flex sm:flex-row flex-col">

      <div id='whatsApp' className='dark:bg-customSecondary-900 bg-gray-100 p-8 rounded-xl flex justify-between items-center relative  overflow-hidden flex-1 mx-3 mb-4 sm:mb-0'>
        <div className='flex flex-col justify-between min-h-[15vh] w-full'>
          <span className='text-xl dark:text-gray-200 py-3'>Bana Ulaşmak İstiyorsan</span>
          <TiltLink
            text='TIKLA MESAJ GÖNDER'
            link={`https://api.whatsapp.com/send?phone=+905415283633&text=` + `Merhaba, size web sitenizden ulaşıyorum.`}
            bgColor='bg-green-500 hover:bg-green-400'
            textColor='text-white' />
        </div>
        <BsWhatsapp className='text-green-500 text-9xl absolute dark:opacity-20 opacity-30 sm:right-10 sm:top-auto -right-5 -top-5' />
      </div>

      <div id='phone' className='dark:bg-customSecondary-900 bg-gray-100 p-8 rounded-xl flex justify-between items-center relative  overflow-hidden flex-1 mx-3'>
        <div className='flex flex-col justify-between min-h-[15vh] w-full'>
          <span className='text-xl dark:text-gray-200 py-3'>Bana Ulaşmak İstiyorsan</span>
          <TiltLink
            text='TIKLA HEMEN ARA'
            link='tel:+905415283633'
            bgColor='dark:bg-yellow-400 bg-violet-700 dark:hover:bg-yellow-300 hover:bg-violet-600'
            textColor='dark:text-customPrimary-900 text-gray-200' />
        </div>
        <BsTelephone className='dark:text-yellow-400 text-violet-700 text-9xl absolute dark:opacity-20 opacity-30 sm:right-10 sm:top-auto -right-5 -top-5' />
      </div>

    </div>
  )
}

export default Contact