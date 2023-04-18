import React from 'react'
import { AiOutlinePhone } from 'react-icons/ai';

function Contact() {
  return (
    <div className='container mx-auto my-4 w-100 shadow-lg px-4 md:px-0 py-2 md:py-0'>
      <div className="text-center flex flex-col justify-center align-center">
        <AiOutlinePhone className='text-white text-9xl mx-auto mb-10' />
        <h1 className='text-white text-5xl'>İletişim</h1>
        </div>
    </div>
  )
}

export default Contact