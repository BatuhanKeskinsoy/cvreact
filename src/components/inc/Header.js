import React from 'react';
import logo from '../../images/logo/logo.svg';
import LinksData from '../../data/LinksData';
import Theme from '../Theme';
import SocialsData from '../../data/SocialsData';
import MenuItem from '../items/MenuItem';
import SocialItem from '../items/SocialItem';
import { useState } from 'react';
/* import { HiBars3BottomRight } from 'react-icons/hi2'; */
import { Link } from 'react-router-dom';

function Header() {
  const [isActive, setIsActive] = useState(false);

  /* const mobileNavToggle = () => {
    setIsActive(current => !current);
  }; */

  const mobileNavClose = () => {
    setIsActive(false);
  };

  return (
    <header className="h-[80px] md:h-[76px] z-50 relative">
      <div className="fixed w-full shadow-lg px-4 md:px-0 py-2 md:py-0 dark:bg-customSecondary-900 bg-white z-40">
        <div className="container mx-auto flex items-center justify-between flex-col md:flex-row">
          <div className="flex items-center justify-between w-full md:w-max relative">
            <div className='order-1'>
              <Link to="/" onClick={mobileNavClose}>
                <img src={logo} alt="Logo" className='max-h-16 h-16 py-2 dark:invert-custom-dark invert-custom-white' />
              </Link>
            </div>
            <div className="flex order-2 items-center">
              {/* <button onClick={mobileNavToggle} className={isActive ? 'dark:bg-yellow-400 bg-violet-700 rounded-full shadow-customMd dark:shadow-yellow-400 shadow-violet-700 order-3' : 'order-3'}>
                <HiBars3BottomRight className={isActive ?
                  'text-5xl block md:hidden transition-all p-2 shadow-customSm rounded-full dark:text-black text-white dark:active:bg-yellow-400 active:bg-violet-700 dark:active:text-black active:text-white dark:active:shadow-yellow-400 active:shadow-violet-700' :
                  'text-5xl block md:hidden transition-all p-2 dark:bg-customSecondary-900 bg-white shadow-customSm rounded-full dark:text-white text-black shadow-gray-500'}
                />
              </button> */}
              <Theme />
            </div>
          </div>
          <div className={isActive ?
            'linksDiv visible justify-between flex flex-col md:relative top-20 md:top-0 scale-y-100 transition-transform origin-top dark:text-gray-300 text-customSecondary-900 w-full md:w-max' :
            'invisible md:visible origin-top scale-y-0 md:scale-y-100 h-0 md:h-full dark:md:text-gray-300 md:text-customSecondary-900'}
          >
            <ul className='flex w-100 flex-col md:flex-row w-full md:w-max pt-2 md:pt-0 mt-2 md:mt-0 border-t-2 dark:border-gray-700 border-gray-300 md:border-none'>
              {
                LinksData.map((HeaderLink, key) => {
                  return <MenuItem name={HeaderLink.name} link={HeaderLink.link} icon={HeaderLink.icon} key={key} mobileNavClose={mobileNavClose} />
                })
              }
            </ul>
            <ul className='flex md:hidden justify-between pt-4 pb-3 md:pt-0 mt-2 md:border-none overflow-auto max-w-full py-4'>
              {
                SocialsData.map((Social, key) => {
                  return <SocialItem link={Social.link} icon={Social.icon} key={key} />
                }
                )}
            </ul>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header