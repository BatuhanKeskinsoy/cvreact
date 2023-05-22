import React from 'react';
import Banner from '../home/Banner';
import Carrier from '../../components/Career'

function About() {
  return (
    <>
      <Banner showMoreButton={false} />
      <hr className='dark:border-customSecondary-900 border-gray-200 border-1 md:my-10 my-6' />
      <div className='container mx-auto w-100 px-4 md:px-0 pb-8 relative'>
        <h1 className='text-3xl dark:text-white text-black font-semibold mb-8 md:text-left text-center'>KARİYER</h1>
        <Carrier />
      </div>
    </>
  )
}

export default About