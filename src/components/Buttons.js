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

function PrimaryButton(props) {
    return (
        <button
            onClick={props.onClick}
            onChange={props.onChange}
            className='flex justify-center items-center text-white h-fit px-6 py-2 bg-customPrimary-900'>
            {props.text}
        </button>
    )
}

export { TiltLink, TiltButton, PrimaryButton }