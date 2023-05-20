import React from 'react';

function CarrierItem(props) {
  return (
    <div className='flex text-gray-200 max-h-12 h-12 md:w-1/3 w-full items-center'>
        <div className='relative h-full rounded-xl bg-gray-200 p-2 flex items-center justify-center'>
            <img src={props.logo} alt="" className='h-full w-fit' />
        </div>
        <h1 className='mx-3 text-xl'>{props.name}</h1>
    </div>
  )
}

export default CarrierItem