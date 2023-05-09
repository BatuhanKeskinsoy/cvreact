import React from 'react';
import { JobsButton } from '../../components/Buttons';
import JobsData from '../../data/JobsData';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

function Jobs() {
  return (
    <div className='container mx-auto w-100 px-4 md:px-0 md:py-0 min-h-[calc(100vh-134px)]'>
        <Tabs className={`flex`}>
          <TabList className={'flex overflow-x-auto flex-col max-w-full py-2 sticky top-0'} >
            {
              JobsData.map((JobsData, key) => {
                return (

                  <Tab selectedClassName='tabActiveBtn' key={key}>
                    <JobsButton text={JobsData.name} />
                  </Tab>
                )
              })
            }


            {/* <Tab selectedClassName='tabActiveBtn'>
                  <JobsButton text='Utatur' />
                </Tab>
                <Tab selectedClassName='tabActiveBtn'>
                  <JobsButton text='Togahh' />
                </Tab>
                <Tab selectedClassName='tabActiveBtn'>
                  <JobsButton text='Goodcarsrental' />
                </Tab>
                <Tab selectedClassName='tabActiveBtn'>
                  <JobsButton text='Avaken' />
                </Tab>
                <Tab selectedClassName='tabActiveBtn'>
                  <JobsButton text='Qrken' />
                </Tab>
                <Tab selectedClassName='tabActiveBtn'>
                  <JobsButton text='Marin44teknik' />
                </Tab>
                <Tab selectedClassName='tabActiveBtn'>
                  <JobsButton text='Qrken' />
                </Tab> */}
          </TabList>

          <div className="flex-1 px-8">

          <h1 className='text-3xl dark:text-white text-black font-semibold my-3 md:text-left text-center'>ÇALIŞMALARIM</h1>

            <TabPanel>
                <h1 className='text-white'>selam</h1>
            </TabPanel>

          </div>
        </Tabs>

    </div>
  )
}

export default Jobs