import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';

function TiltLink(props) {
    return (
        <Tilt
            perspective={1000}
            className={`parallax-effect-custom py-4 px-6 rounded-md text-center 
             transition-all text-lg h-14 sm:w-64 w-full ${props.bgColor} ${props.textColor}`
            }>
            <Link to={props.link}
                className='inner-element-button absolute top-0 bottom-0 right-0 left-0'>
                <h5 className='whitespace-nowrap h-14 flex items-center justify-center'>{props.text}</h5>
            </Link>
        </Tilt>
    )
}

function TiltButton(props) {
    return (
        <Tilt
            perspective={1000}
            className={`parallax-effect-custom py-4 px-6 rounded-md text-center 
             transition-all text-lg h-14 sm:w-64 w-full ${props.bgColor} ${props.textColor}`
            }>
            <button
                className='inner-element-button absolute top-0 bottom-0 right-0 left-0'>
                <h5 className='whitespace-nowrap h-14 flex items-center justify-center'>{props.text}</h5>
            </button>
        </Tilt>
    )
}

function SecondaryButton(props) {
    return (
        <button
            btnClick={props.onClick}
            btnChange={props.onChange}
            className={`flex justify-center items-center h-fit px-6 py-2 rounded transition-all mx-1 ` +
                `dark:bg-customSecondary-900 bg-gray-200 dark:hover:bg-yellow-400 ` +
                `dark:text-gray-200 text-customPrimary-900 dark:hover:text-customPrimary-900 ${props.fullwidth}`}>
            {props.text}
        </button>
    )
}

function JobsButton(props) {
    return (
        <button
            btnClick={props.onClick}
            btnChange={props.onChange}
            className={`block sm:text-left text-center h-fit px-6 py-2 rounded transition-all sm:w-[200px] w-fit my-1 whitespace-nowrap overflow-hidden text-ellipsis ` +
                `dark:bg-customSecondary-900 bg-gray-200 dark:hover:bg-yellow-400 hover:bg-violet-600 ` +
                `dark:text-gray-200 text-customPrimary-900 dark:hover:text-customPrimary-900 hover:text-gray-200 `}>
            {props.text}
        </button>
    )
}

export { TiltLink, TiltButton, SecondaryButton, JobsButton }