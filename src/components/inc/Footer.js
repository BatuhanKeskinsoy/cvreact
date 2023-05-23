import React from 'react';
import logo from '../../images/logo/logo.svg';
import JobsData from '../../data/JobsData';
import JobsItem from '../items/JobsItem';
import LinksData from '../../data/LinksData';
import SocialsData from '../../data/SocialsData';
import SocialItem from '../items/SocialItem';
import ScrollTop from '../ScrollTop';
import MenuItem from '../items/MenuItem';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='dark:bg-customSecondary-900 bg-gray-100 md:pb-0 pb-[54px]'>
      <div className="container px-4 mx-auto lg:flex-row flex-col py-6 md:flex hidden">
        <div className='flex-1 px-2 md:mb-0 mb-4'>
          <Link to="/" className='mb-4 block'>
            <img src={logo} alt="Logo" className='max-h-24 h-24 py-3 dark:invert-custom-dark invert-custom-white' />
          </Link>
          <span className='dark:text-gray-400 text-gray-600 text-xl block mb-2'>Merhaba, web sitemin sonuna ulaştın!</span>
          <small className='dark:text-gray-400 text-gray-600 text-md'>Daha fazlası için beni sosyal medyadan takip etmeyi unutma..</small>
          <ul className='flex justify-between md:justify-start w-full overflow-auto max-w-full py-6'>
            {
              SocialsData.map((Social, key) => {
                return <SocialItem link={Social.link} icon={Social.icon} key={key} />
              })
            }
          </ul>
        </div>
        <div className='flex-1 px-2 md:mb-0 mb-4'>
          <span className='dark:text-white text-gray-600 uppercase font-gemunu tracking-widest text-xl'>HIZLI LİNKLER</span>
          <hr className='dark:border-customSecondary-600 border-gray-300 my-4' />
          <ul className="flex flex-col h-full w-full dark:text-gray-400 text-gray-600">
            {
              LinksData.slice(0, 5).map((HeaderLink, key) => {
                return (
                  <MenuItem isFooter={true} name={HeaderLink.name} link={HeaderLink.link} icon={HeaderLink.icon} key={key} showMobile={HeaderLink.showMobile} order={HeaderLink.orderMobile} />
                )
              })
            }
          </ul>
        </div>
        <div className='flex-1 px-2 md:mb-0 mb-4'>
          <span className='dark:text-white text-gray-600 uppercase font-gemunu tracking-widest text-xl'>SON ÇALIŞMALARIM</span>
          <hr className='dark:border-customSecondary-600 border-gray-300 my-4' />
          <ul className="flex flex-col h-full w-full dark:text-gray-400 text-gray-600">
            {
              JobsData.slice(0, 5).map((JobsLink, key) => {
                return (
                  <JobsItem isFooter={true} name={JobsLink.name} link={JobsLink.link} icon={JobsLink.icon} key={key} showMobile={JobsLink.showMobile} order={JobsLink.orderMobile} />
                )
              })
            }
          </ul>
        </div>
        <div className='flex-1 px-2 md:mb-0 mb-4'>
          <span className='dark:text-white text-gray-600 uppercase font-gemunu tracking-widest text-xl'>SON BLOGLARIM</span>
          <hr className='dark:border-customSecondary-600 border-gray-300 my-4' />
          <div className="flex flex-col  w-full justify-center  dark:text-gray-400 text-gray-600">
            <h1>BLOG HAZIRLANIYOR...</h1>
          </div>
        </div>
      </div>
        <hr className='dark:border-customSecondary-600 border-gray-300 w-full md:block hidden' />
      <div className="container px-4 mx-auto">
        <div className="w-full flex justify-between py-4 dark:text-gray-400 text-gray-600 text-sm md:flex-row flex-col text-center">
          <div className='md:my-0 my-1'>
            Copyright © <span className='dark:text-yellow-400 text-violet-600 cursor-pointer'> {new Date().getFullYear() === 2023 ? new Date().getFullYear() : '2023 - ' + new Date().getFullYear()} </span>
          </div>
          <div className='md:my-0 my-1'>
            Kodlama ve Tasarım şahsıma aittir. Tüm haklar saklıdır.
          </div>
        </div>
      </div>
      <div className="flex md:hidden items-center fixed bottom-0 left-0 w-full z-10 dark:bg-customSecondary-900 bg-white shadow-customLg">
        {
          LinksData.sort((a, b) => a.orderMobile - b.orderMobile).map((HeaderLink, key) => {
            return (
              <MenuItem isFooterMobile={true} name={HeaderLink.name} link={HeaderLink.link} icon={HeaderLink.icon} key={key} showMobile={HeaderLink.showMobile} order={HeaderLink.orderMobile} />
            )
          })
        }
      </div>
      <ScrollTop />
    </footer>
  )
}

export default Footer