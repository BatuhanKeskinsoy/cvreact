import React from 'react';
import { BsWhatsapp, BsTelephone } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

function Contact() {
  return (
    <div className="flex sm:flex-row flex-col">

      <div id='whatsApp' className='dark:bg-customSecondary-900 bg-gray-100 p-8 rounded-xl flex justify-between items-center relative  overflow-hidden flex-1 mx-3 mb-4 sm:mb-0'>
        <div className='flex flex-col justify-between min-h-[15vh] w-full'>
          <span className='text-xl dark:text-gray-200 py-3'>Bana Ulaşmak İstiyorsan</span>
          <Tilt perspective={1000} className='parallax-effect-custom bg-green-500 py-4 px-6 rounded-md text-center text-white hover:bg-green-400 transition-all text-lg h-14 sm:w-64 w-full'>
            <Link to={'https://api.whatsapp.com/send?phone=+905415283633&text=' + `Merhaba, size web sitenizden ulaşıyorum.`}
              className='inner-element-button absolute top-0 bottom-0 right-0 left-0'
              target='_blank'>
              <h5 className='whitespace-nowrap h-14 flex items-center justify-center'>TIKLA MESAJ GÖNDER</h5>
            </Link>
          </Tilt>
        </div>
        <BsWhatsapp className='text-green-500 text-9xl absolute dark:opacity-20 opacity-30 sm:right-10 sm:top-auto -right-5 -top-5' />
      </div>

      <div id='phone' className='dark:bg-customSecondary-900 bg-gray-100 p-8 rounded-xl flex justify-between items-center relative  overflow-hidden flex-1 mx-3'>
        <div className='flex flex-col justify-between min-h-[15vh] w-full'>
          <span className='text-xl dark:text-gray-200 py-3'>Bana Ulaşmak İstiyorsan</span>
          <Tilt perspective={1000} className='parallax-effect-custom dark:bg-yellow-400 bg-violet-700 py-4 px-6 rounded-md text-center dark:text-customPrimary-900 text-gray-200  dark:hover:bg-yellow-300 hover:bg-violet-600 transition-all text-lg h-14 sm:w-64 w-full'>
            <Link to={'tel:+905415283633'}
              className='inner-element-button absolute top-0 bottom-0 right-0 left-0'>
              <h5 className='whitespace-nowrap h-14 flex items-center justify-center'>TIKLA HEMEN ARA</h5>
            </Link>
          </Tilt>
        </div>
        <BsTelephone className='dark:text-yellow-400 text-violet-700 text-9xl absolute dark:opacity-20 opacity-30 sm:right-10 sm:top-auto -right-5 -top-5' />
      </div>

    </div>
  )
}

export default Contact