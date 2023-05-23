import React from 'react';
import { FaRegEye } from 'react-icons/fa';
import { SlArrowRight } from 'react-icons/sl';
import 'swiper/css/bundle';
import { Link, NavLink } from 'react-router-dom';


function JobsSwiper(props) {

  const jobName = props.name.toLowerCase();
  const Icon = SlArrowRight;

  if (props.isFooter) {
    return (
      <li>
        <NavLink
          to={'calismalarim/'+jobName}
          className='py-2 flex justify-between items-center active:pl-4 md:active:pl-2 transition-all group'
          onClick={props.mobileNavClose}>
          <span className='uppercase font-gemunu tracking-widest dark:text-gray-400 text-gray-600'>{props.name}</span>
          <Icon className={`md:mr-2 md:p-1 p-2 md:text-2xl text-4xl shadow shadow-gray-400 dark:shadow-gray-600 rounded-full transition-all dark:text-white text-customSecondary-900 ` +
            `group-active:shadowXl dark:group-active:text-black group-active:text-white dark:group-active:bg-yellow-400 group-active:bg-violet-700 ` +
            `group-hover:shadowXl dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-yellow-400 group-hover:bg-violet-700`} />
        </NavLink>
      </li>

    )
  }
  else {
    return (
      <Link to={`calismalarim/` + props.name.toLowerCase()} className="dark:bg-customSecondary-900 bg-gray-100 rounded-2xl p-2 hover:scale-105 transition-all block">
        <div className="text-center dark:text-white text-black w-full mb-2 py-2 text-xl font-semibold">{props.name}</div>
        <img src={props.mobileImg1} alt={props.name} className='rounded-xl w-full h-full' />
        <div className="w-full h-full fixed top-0 left-0 z-10 md:rounded-xl rounded-none dark:group-hover:bg-customSecondary-900/75 group-hover:bg-white/50 opacity-0 group-hover:opacity-100 flex items-center justify-center hover:transition-all">
          <FaRegEye className='text-9xl dark:text-yellow-400 text-violet-700 scale-0 group-hover:scale-100 transition-all' />
        </div>
      </Link>

    )
  }
}

export default JobsSwiper