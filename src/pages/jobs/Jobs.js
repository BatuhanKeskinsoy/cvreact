import React from 'react';
import { JobsButton } from '../../components/Buttons';
import JobsData from '../../data/JobsData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Jobs() {
  return (
    <div className='container mx-auto w-100 px-4 md:px-0 md:py-0 min-h-[calc(100vh-134px)]'>
      <h1 className='text-3xl dark:text-white text-black font-semibold my-6 md:text-left text-center'>ÇALIŞMALARIM</h1>


      <Tabs className={`flex`}>
        <TabList className={'flex flex-col max-h-[calc(100vh-170px)] mb-2 overflow-y-auto overflow-x-hidden pr-2'} >
          {
            JobsData.map((JobsData, key) => {
              return (

                <Tab selectedClassName='tabActiveBtn' key={key}>
                  <JobsButton text={JobsData.name} />
                </Tab>
              )
            })
          }

        </TabList>

        <div className="flex-1 px-4">
          {
            JobsData.map((JobsData, key) => {
              return (


                <TabPanel key={key}>
                  <div className="flex justify-between items-center mb-6">
                    <h1 className='text-3xl dark:text-white text-black font-semibold md:text-left text-center'>{JobsData.name}</h1>
                    <div className="flex overflow-x-auto">
                      <h1 className='text-white'>Deneyimler</h1>
                    </div>
                  </div>
                  <h1 className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo provident aliquid reiciendis! Consectetur at, possimus itaque quo in pariatur nihil</h1>
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