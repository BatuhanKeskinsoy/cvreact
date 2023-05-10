import React from 'react';
import { JobsButton } from '../../components/Buttons';
import JobsData from '../../data/JobsData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import ExperiencesData from '../../data/ExperiencesData';
import { JobExperiences } from '../../components/items/ExperienceItem';


function Jobs() {
  return (
    <div className='container mx-auto w-100 px-4 md:px-0 md:py-0 min-h-[calc(100vh-134px)]'>


      <Tabs className="flex md:flex-row flex-col">
        <div className="flex flex-col">
          <h1 className='text-3xl dark:text-white text-black font-semibold my-6 md:text-left text-center'>ÇALIŞMALARIM</h1>
          <TabList className="flex md:flex-col flex-row max-h-[calc(100vh-210px)] mb-2 md:overflow-y-auto md:overflow-x-hidden overflow-y-hidden overflow-x-auto pr-2 md:pb-0 pb-1" >
            {
              JobsData.map((JobsData, key) => {
                return (

                  <Tab selectedClassName='tabActiveBtn' className='mx-1 first:ml-0 md:mx-0' key={key}>
                    <JobsButton text={JobsData.name} />
                  </Tab>
                )
              })
            }

          </TabList>
        </div>

        <div className="flex-1 px-4 mb-8">
          {
            JobsData.map((JobsData, key) => {
              return (


                <TabPanel key={key}>
                  <div className="flex md:flex-row flex-col justify-between items-center w-full">
                    <h1 className='text-3xl dark:text-white text-black font-semibold md:text-left text-center md:my-6 my-3 md:pl-4 md:border-l-4 md:border-customSecondary-900'>{JobsData.name}</h1>
                    <div className="flex md:flex-row flex-col items-center justify-end w-full md:mt-0 mt-3 md:mb-0 mb-6">
                      <div className='flex md:justify-end overflow-x-auto overflow-y-hidden w-full py-2 md:py-0 md:order-1 order-2'>

                        {
                          ExperiencesData.filter(experienceItem => JobsData.experiences.includes(experienceItem.name)).map((experience, key) => (
                            <JobExperiences image={experience.image} name={experience.name} key={key} />
                          ))
                        }

                      </div>
                      <h2 className='dark:text-white text-customPrimary-900 md:ml-3 md:order-2 order-1 md:mb-0 mb-3'>DENEYİMLER</h2>
                    </div>
                  </div>
                  <img src={JobsData.mobileImg} alt={JobsData.name} className='md:h-[calc(100vh-250px)] h-auto w-full sm:w-auto rounded-xl' />

                </TabPanel>
              )
            })
          }

        </div>
      </Tabs>

    </div>
  )
}

export default Jobs