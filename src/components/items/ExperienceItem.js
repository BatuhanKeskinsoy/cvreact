import React from 'react';
import Tilt from 'react-parallax-tilt';

function ExperienceItem(props) {

    var experienceYear = props.currentYear - props.startTime[1];
    var experienceMonth = props.currentMonth - props.startTime[0];
        
    return (
        <div className='flex flex-col mx-4 flex-auto justify-center items-center mb-5 relative'>
            <Tilt perspective={1000} className='parallax-effect-custom cursor-pointer flex flex-col justify-center items-center relative'>
                <div className="xl:h-32 xl:w-32 lg:h-24 lg:w-24 h-24 w-24 absolute top-0 left-auto right-auto dark:bg-customSecondary-900 bg-gray-100 rounded-full -z-10 flex items-center justify-center"></div>
                <img src={props.image} alt="" className='xl:h-32 xl:w-32 lg:h-24 lg:w-24 h-24 w-24 block inner-element-experience -z-10 relative' />
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

function JobExperiences(props) {

    return (
        <div title={props.name} className='flex flex-col mx-1 justify-center items-center' >
            <Tilt  perspective={1000} className='parallax-effect-custom cursor-pointer flex flex-col justify-center items-center'>
                <div className="h-16 w-16 sm:w-10 sm:h-10 absolute top-0 left-auto right-auto dark:bg-customSecondary-900 bg-gray-100 rounded-full -z-10 flex items-center justify-center"></div>
                <img src={props.image} alt="{props.name}" className='h-16 w-16 sm:w-10 sm:h-10 sm:min-h-[40px] sm:min-w-[40px] min-w-[64px] min-h-[64px] block inner-element-experience' />
            </Tilt>
        </div>
        
    )
}

export { ExperienceItem, JobExperiences }