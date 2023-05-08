import React from 'react';
import ExperienceItem from '../../components/items/ExperienceItem';
import ExperiencesData from '../../data/ExperiencesData';

var currentYear = new Date().getFullYear();
var currentMonth = new Date().getMonth() + 1;

function HomeExperiences() {
    return (
        <div className="container mx-auto px-4 mb-8">
            <h2 className='text-3xl dark:text-white text-black font-semibold mb-8 md:text-left text-center'>DENEYİMLERİM</h2>
            <div className='flex flex-wrap'>
                {
                    ExperiencesData.filter(ExperiencesData => ExperiencesData.featured === true).map((ExperiencesData, key) => {
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
        </div>
    )
}

export default HomeExperiences