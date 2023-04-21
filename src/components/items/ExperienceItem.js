import React from 'react';
import Tilt from 'react-parallax-tilt';

function ExperienceItem(props) {

    var experienceYear = props.currentYear - props.startTime[1];
    var experienceMonth = props.currentMonth - props.startTime[0];
        
    return (
        <div className='flex flex-col mx-4 flex-auto justify-center items-center mb-5'>
            <Tilt perspective={1000} className='parallax-effect-img cursor-pointer flex flex-col justify-center items-center'>
                <div className="xl:h-32 xl:w-32 lg:h-24 lg:w-24 h-24 w-24 absolute top-0 left-auto right-auto dark:bg-customSecondary-900 bg-gray-200 rounded-full -z-10 flex items-center justify-center"></div>
                <img src={props.image} alt="" className='xl:h-32 xl:w-32 lg:h-24 lg:w-24 h-24 w-24 block inner-element-experience' />
                <div className="flex flex-col mt-4">
                    <span className='dark:text-gray-200 text-gray-700 text-center w-full text-xl'>{props.name}</span>
                    <small className='dark:text-gray-400 text-gray-500 text-center w-full text-lg'>
                        {experienceYear > 0 ? experienceYear + ' YIL' : experienceMonth + ' AY'}  
                    </small>
                </div>
            </Tilt>
        </div>
        
    )
}

export default ExperienceItem