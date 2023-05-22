import React from 'react';
import CareerData from '../../data/CareerData';
import { SlArrowLeft, SlArrowDown, SlArrowRight } from 'react-icons/sl';

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
  const experiencesArray = CareerData.map(item => item.experiences);
  console.log(experiencesArray);

  return (
    <div className='dark:text-gray-200 text-customPrimary-900 w-full my-3 dark:shadow-customXl shadow-customSm dark:shadow-customSecondary-900 rounded-lg dark:bg-customPrimary-900/50 bg-transparent group'>
      <button onClick={toggleAccordion} className='flex flex-row justify-between items-center w-full py-3 px-6'>
        <div className="flex flex-col md:items-start items-start relative">
          <div className="flex w-max dark:text-gray-700 text-gray-400 text-sm">
            <h4 className='mr-1'>{props.startTime}</h4>
            -
            <h4 className='ml-1'>{props.endTime}</h4>
          </div>
          <h3 className={`text-2xl md:my-0 mt-2 transition-all group-hover:dark:text-yellow-400 group-hover:text-violet-600 ${isActive ? 'dark:text-yellow-400 text-violet-600' : ''}`}>{props.name}</h3>
          <h4 className={`text-md group-hover:dark:text-yellow-400 transition-all group-hover:text-violet-600 opacity-50 ${isActive ? 'dark:text-yellow-400 text-violet-600' : ''}`}>{props.position}</h4>
        </div>
        <div className=" group-hover:dark:text-yellow-400 group-hover:text-violet-600">
          {isActive ?
            <SlArrowDown className={`text-2xl md:mx-4 ${isActive ? 'dark:text-yellow-400 text-violet-600' : ''}`} /> :
            <SlArrowLeft className={`text-2xl md:mx-4 ${isActive ? 'dark:text-yellow-400 text-violet-600' : ''}`} />}
        </div>
      </button>

      {isActive && (
        <div className='border-t dark:border-customSecondary-900 border-gray-200 py-3 px-6'>
          <h5 className='text-lg'>{props.description}</h5>
          <span className='my-4 block text-sm'>Kazandığım Deneyimler :</span>
          <ul className='flex flex-col'>
            {props.experiences.map((experience, key) => (
              <li key={key} className='flex items-center my-1 text-gray-400 text-sm'><SlArrowRight className='mr-2'/>{experience}</li>
            ))}
          </ul>

        </div>
      )}
    </div>
  );
}

export default CareerItem;