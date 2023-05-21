import React from 'react';

function CarrierItem(props) {
  return (
    <div className='flex md:flex-row flex-col md:justify-between justify-center text-gray-200 w-full items-center my-3 shadow-customXl dark:shadow-customSecondary-900 rounded-lg py-2 px-6'>
      <div className="flex flex-col md:items-start items-center relative">
        <div className="flex w-max text-gray-700 text-md">
          <h4 className='mr-1'>{props.startTime}</h4>
          -
          <h4 className='ml-1'>{props.endTime}</h4>
        </div>
        <h3 className='text-2xl md:my-0 my-3'>{props.name}</h3>
        {/* <h4 className='ml-2 pl-2 border-l-2 border-gray-700'>{props.position}</h4> */}
      </div>
        <h4 className='text-md'>{props.position}</h4>
      {/* <div className='relative h-full rounded-xl bg-gray-200 p-2 flex items-center justify-center'>
        <img src={props.logo} alt="" className='h-full w-fit' />
      </div> */}
    </div>
  )
}

export default CarrierItem