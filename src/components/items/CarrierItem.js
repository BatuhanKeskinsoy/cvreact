import React from 'react';
import { SlArrowLeft, SlArrowDown } from 'react-icons/sl';

function CareerItem(props) {

  const isActive = props.isActive;
  const toggleActiveItem = props.toggleActiveItem;

  const toggleAccordion = () => {
    if (isActive) {
      toggleActiveItem(null);
    } else {
      toggleActiveItem(props.itemKey);
    }
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
          <h3 className={`text-2xl md:my-0 my-3 transition-all group-hover:dark:text-yellow-400 group-hover:text-violet-600 ${isActive ? 'dark:text-yellow-400 text-violet-600' : ''}`}>{props.name}</h3>

        </div>
        <div className="flex md:flex-row flex-col items-center transition-all group-hover:dark:text-yellow-400 group-hover:text-violet-600">
          <h4 className={`text-md ${isActive ? 'dark:text-yellow-400 text-violet-600' : ''}`}>{props.position}</h4>
          {isActive ? 
          <SlArrowDown className={`text-2xl md:mx-4 ${isActive ? 'dark:text-yellow-400 text-violet-600' : ''}`}/> : 
          <SlArrowLeft className={`text-2xl md:mx-4 ${isActive ? 'dark:text-yellow-400 text-violet-600' : ''}`}/> }
        </div>
      </button>

      {isActive && (
        <div className='border-t dark:border-customSecondary-900 border-gray-200 py-3 px-6'>
          {props.description}
          <ul className='flex flex-col'>
            {props.CarrierExperiences}
          </ul>
        </div>
      )}
    </div>
  );
}

export default CareerItem;