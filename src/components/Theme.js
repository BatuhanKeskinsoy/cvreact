import React, { useEffect, useState } from 'react';

function Theme() {
    const [theme, setTheme] = useState(
        localStorage.getItem('theme') === 'light' ? 'dark' : 'light'
    );

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, []);



    const changeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }

    const [switchStatus, setswitchStatus] = useState(
        theme === 'dark' ? true : false
    );

    return (


        <label className="flex relative items-center cursor-pointer order-2 md:ml-8 md:mr-0 mr-4">
                <input type="checkbox" className="sr-only peer" checked={switchStatus} readOnly />
                <div
                    onClick={() => {
                        changeTheme();
                        setswitchStatus(!switchStatus);
                    }}
                    className={`w-20 h-10 dark:bg-customPrimary-900 bg-violet-200  rounded-full 
                    peer-checked:after:translate-x-10 peer-checked:after:border-white 
                    after:content-[''] after:absolute after:top-1.5 after:left-[6px] dark:after:bg-white after:bg-violet-700 
                    after:shadow after:shadow-gray-500 after:rounded-full after:h-7 after:w-7 after:transition-all after:z-10

                    peer-checked:before:-translate-x-10 peer-checked:before:border-white
                    before:shadow-none before:shadow-gray-500 before:rounded-full before:w-7 before:h-7 before:transition-all before:z-0
                    before:text-white before:absolute before:top-1.5 before:right-[6px] before:bg-transparent before:flex before:items-center
                    
                    before:content-[''] before:bg-moon dark:before:bg-sun before:bg-cover dark:before:invert-custom-dark
                    
                    `}>

                </div>
            </label>

        /* <button
            className='text-white bg-black-900 dark:text-black dark:bg-white p-2 rounded-3xl ml-8 order-2 capitalize'
            onClick={changeTheme}
        >{theme} Theme</button> */
    )
}

export default Theme