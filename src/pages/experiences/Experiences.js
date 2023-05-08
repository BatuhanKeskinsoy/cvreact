import React from 'react';
import Contact from '../../components/Contact'
import { SecondaryButton } from '../../components/Buttons';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import ExperienceItem from '../../components/items/ExperienceItem';
import ExperiencesData from '../../data/ExperiencesData';

var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth() + 1;

function Experiences() {
  return (
    <>
      <div className='container mx-auto w-100 px-4 md:px-0 pb-8 min-h-[calc(100vh-134px)] relative'>

        <Tabs>
          <div className="flex justify-between sm:flex-row flex-col items-center">
            <h1 className='text-3xl dark:text-white text-black font-semibold mb-8 md:text-left text-center mt-6'>DENEYİMLERİM</h1>
            <TabList className={'flex overflow-x-auto max-w-full whitespace-nowrap py-2 sm:ml-8'} >
              <Tab selectedClassName='tabActiveBtn'>
                <SecondaryButton text='Tümü' />
              </Tab>
              <Tab selectedClassName='tabActiveBtn'>
                <SecondaryButton text='Yazılım' />
              </Tab>
              <Tab selectedClassName='tabActiveBtn'>
                <SecondaryButton text='Grafik Tasarım' />
              </Tab>
              <Tab selectedClassName='tabActiveBtn'>
                <SecondaryButton text='Dijital Pazarlama' />
              </Tab>
            </TabList>
          </div>

          <div className="experienceContent mt-8">

            <TabPanel>
              <div className='flex flex-wrap'>
                {
                  ExperiencesData.map((ExperiencesData, key) => {
                    return (
                      <ExperienceItem
                        name={ExperiencesData.name}
                        image={ExperiencesData.image}
                        startTime={ExperiencesData.startTime}
                        currentYear={currentYear}
                        currentMonth={currentMonth}
                        key={key} />
                    )
                  })
                }
              </div>
            </TabPanel>

            <TabPanel>
              <div className='flex flex-wrap justify-start items-start'>
                {
                  ExperiencesData.filter(experiencesType => experiencesType.type === 'Yazılım').map((ExperiencesData, key) => {
                    return (
                      <ExperienceItem
                        name={ExperiencesData.name}
                        image={ExperiencesData.image}
                        startTime={ExperiencesData.startTime}
                        currentYear={currentYear}
                        currentMonth={currentMonth}
                        key={key} />
                    )
                  })
                }
              </div>
            </TabPanel>

            <TabPanel>
              <div className='flex flex-wrap justify-start items-start'>
                {
                  ExperiencesData.filter(experiencesType => experiencesType.type === 'Grafik Tasarım').map((ExperiencesData, key) => {
                    return (
                      <ExperienceItem
                        name={ExperiencesData.name}
                        image={ExperiencesData.image}
                        startTime={ExperiencesData.startTime}
                        currentYear={currentYear}
                        currentMonth={currentMonth}
                        key={key} />
                    )
                  })
                }
              </div>
            </TabPanel>

            <TabPanel>
              <div className='flex flex-wrap'>
                {
                  ExperiencesData.filter(experiencesType => experiencesType.type === 'Dijital Pazarlama').map((ExperiencesData, key) => {
                    return (
                      <ExperienceItem
                        name={ExperiencesData.name}
                        image={ExperiencesData.image}
                        startTime={ExperiencesData.startTime}
                        currentYear={currentYear}
                        currentMonth={currentMonth}
                        key={key} />
                    )
                  })
                }
              </div>
            </TabPanel>

          </div>
        </Tabs>

        
        <h2 className='text-3xl dark:text-white text-black font-semibold mb-8 md:text-left text-center mt-8'>İLETİŞİM</h2>
        <Contact />

      </div>

    </>
  )
}

export default Experiences