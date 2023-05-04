import React from 'react';
import Contact from '../../components/Contact';

function HomeContact() {
    return (
        <div className="container mx-auto px-4 mb-8 z-50">
            <h2 className='text-3xl dark:text-white text-black font-semibold mb-8 md:text-left text-center'>İLETİŞİM</h2>
            <Contact/>
        </div>
    )
}

export default HomeContact