import React from 'react';
import { PrimaryButton } from '../../components/Buttons';

function Experiences() {
  return (
    <div className='container mx-auto w-100 px-4 md:px-0 md:py-0 min-h-[calc(100vh-134px)] relative'>
      <div className="flex justify-between sm:flex-row flex-col items-center">
        <h1 className='text-3xl dark:text-white text-black font-semibold mb-8 md:text-left text-center mt-6'>DENEYİMLERİM</h1>
        <div className="experienceCategories flex">
          <PrimaryButton
            text='Selam'
            bgColor='bg-green-500 hover:bg-green-400'
            textColor='text-white'
          />
        </div>
      </div>
    </div>
  )
}

export default Experiences