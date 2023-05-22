import React from 'react';
import JobsData from '../../data/JobsData';
import Contact from '../../components/Contact';
import { NavLink, Outlet } from 'react-router-dom';

function JobsMain() {


  return (
    <div className='container mx-auto w-100 px-4 md:px-0 pb-8 min-h-[calc(100vh-134px)]'>


      <div className="flex md:flex-row flex-col">
        <div className="flex flex-col">
          <h1 className='text-3xl dark:text-white text-black font-semibold my-6 md:text-left text-center'>ÇALIŞMALARIM</h1>
          <div className="flex md:flex-col flex-row max-h-[calc(100vh-165px)] mb-2 md:overflow-y-auto md:overflow-x-hidden overflow-y-hidden overflow-x-auto pr-2 md:pb-0 pb-1 sticky top-24" >
          
            {
              JobsData.map((JobsData, key) => {

                const jobSlug = JobsData.name.toLowerCase();

                return (

                  <NavLink tabIndex={key} to={jobSlug} key={key} className={
                    
                    `JobsLink block sm:text-left text-center h-fit px-6 py-2 rounded transition-all sm:w-[200px] w-fit my-1 ` +
                    ` whitespace-nowrap overflow-hidden text-ellipsis min-w-max md:mx-0 mx-1 first:ml-0 last:mr-0 ` +
                    `dark:bg-customSecondary-900 bg-gray-200 dark:hover:bg-yellow-400 hover:bg-violet-600 ` +
                    `dark:text-gray-200 text-customPrimary-900 dark:hover:text-customPrimary-900 hover:text-gray-200`}
                      >
                    {JobsData.name}
                  </NavLink>
                )
              })
            }

          </div>
        </div>

        <Outlet />

      </div>

      <h2 className='text-3xl dark:text-white text-black font-semibold mb-8 md:text-left text-center mt-8'>İLETİŞİM</h2>
      <Contact />
    </div>
  )
}

export default JobsMain