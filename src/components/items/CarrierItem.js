import React, { useState } from 'react';
import { SlArrowLeft, SlArrowDown } from 'react-icons/sl'

function CarrierItem(props) {
  const [isOpen, setIsOpen] = useState(props.isFirstItem);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='dark:text-gray-200 text-customPrimary-900 w-full my-3 dark:shadow-customXl shadow-customSm dark:shadow-customSecondary-900 rounded-lg dark:bg-customPrimary-900/50 bg-transparent group'>
      <button onClick={toggleAccordion} className='flex md:flex-row flex-col md:justify-between justify-center items-center w-full py-3 px-6'>
        <div className="flex flex-col md:items-start items-center relative">
          <div className="flex w-max dark:text-gray-700 text-gray-400 text-md">
            <h4 className='mr-1'>{props.startTime}</h4>
            -
            <h4 className='ml-1'>{props.endTime}</h4>
          </div>
          <h3 className={`text-2xl md:my-0 my-3 transition-all group-hover:dark:text-yellow-400 group-hover:text-violet-600` +
            `${isOpen ? ' dark:text-yellow-400 text-violet-600' : ''}`}>{props.name}</h3>

        </div>
        <div className="flex md:flex-row flex-col items-center transition-all group-hover:dark:text-yellow-400 group-hover:text-violet-600">
          <h4 className={`text-md` + `${isOpen ? ' dark:text-yellow-400 text-violet-600' : ''}`}>{props.position}</h4>
          {isOpen ? 
          <SlArrowDown className={`text-2xl md:mx-4` + `${isOpen ? ' dark:text-yellow-400 text-violet-600' : ''}`}/> : 
          <SlArrowLeft className={`text-2xl md:mx-4` + `${isOpen ? ' dark:text-yellow-400 text-violet-600' : ''}`}/> }
        </div>
        {/* <div className='relative h-full rounded-xl bg-gray-200 p-2 flex items-center justify-center'>
        <img src={props.logo} alt="" className='h-full w-fit' />
      </div> */}
      </button>

      {isOpen && (
        <div className='border-t dark:border-customSecondary-900 border-gray-200 py-3 px-6'>
          <h4 className='pl-2 border-l dark:border-customSecondary-900 border-gray-200'>{props.position}</h4>
        </div>
      )}
    </div>
  )
}

export default CarrierItem