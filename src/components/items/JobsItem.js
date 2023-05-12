import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import 'swiper/css/bundle';


function JobsSwiper(props) {
  return (
        <div className="dark:bg-customSecondary-900 bg-gray-100 rounded-2xl p-2 hover:scale-105 transition-all">
          <div className="text-center dark:text-white text-black w-full mb-2 py-2 text-xl font-semibold">{props.name}</div>
          <img src={props.mobileImg1} alt={props.name} className='rounded-xl w-full h-full' />
          <div className="w-full h-full fixed top-0 left-0 z-10 md:rounded-xl rounded-none dark:group-hover:bg-customSecondary-900/75 group-hover:bg-white/50 opacity-0 group-hover:opacity-100 flex items-center justify-center hover:transition-all">
            <FaRegEye className='text-9xl dark:text-yellow-400 text-violet-700 scale-0 group-hover:scale-100 transition-all' />
          </div>
        </div>

  )
}

export default JobsSwiper