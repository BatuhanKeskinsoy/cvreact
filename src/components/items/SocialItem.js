import React from 'react'
import { Link } from 'react-router-dom';

function SocialItem(props) {

  const Icon = props.icon;
  return (
    <li>
      <Link to={props.link} target={'_blank'} className='flex justify-center items-center group'>
        <Icon
          className='mx-2 p-2 dark:text-gray-300 text-customSecondary-900 shadow-customMd shadow-gray-500 rounded-full text-5xl transition-all 
         dark:group-active:shadow-yellow-400 group-active:shadow-violet-700 group-active:shadow-customMd dark:group-active:text-black group-active:text-white dark:group-active:bg-yellow-400 group-active:bg-violet-700 group-active:scale-125
         dark:group-focus:shadow-yellow-400 group-focus:shadow-violet-700 group-focus:shadow-customMd dark:group-focus:text-black group-focus:text-white dark:group-focus:bg-yellow-400 group-focus:bg-violet-700 group-focus:scale-125
         dark:group-hover:shadow-yellow-400 group-hover:shadow-violet-700 group-hover:shadow-customMd dark:group-hover:text-black group-hover:text-white dark:group-hover:bg-yellow-400 group-hover:bg-violet-700 group-hover:scale-125 ' />

      </Link>
    </li>
  )
}

export default SocialItem