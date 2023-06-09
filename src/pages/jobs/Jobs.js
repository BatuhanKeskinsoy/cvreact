import React, { useState } from 'react';

import JobsData from '../../data/JobsData';
import ExperiencesData from '../../data/ExperiencesData';
import { JobExperiences } from '../../components/items/ExperienceItem';
import { Link, useParams } from 'react-router-dom';
import { GoLinkExternal } from 'react-icons/go';
import Lightbox from "react-awesome-lightbox";
import "react-awesome-lightbox/build/style.css";

function Jobs() {

    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    const openLightbox = (index) => {

        setCurrentIndex(index);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
    };

    const jobURL = useParams();

    let jobName = jobURL['jobname'];
    
    console.log('deneme');
    return (
        <div className="flex-1 px-4 mb-8">
        
            {
                JobsData.filter(JobsData => JobsData.name.toLowerCase() === jobName).map((JobsData, key) => {

                    const images = [
                        {
                            url: JobsData.mobileImg,
                            title: JobsData.name,
                        },
                        {
                            url: JobsData.webImg,
                            title: JobsData.name,
                        },
                        {
                            url: JobsData.webImg2,
                            title: JobsData.name,
                        },
                        {
                            url: JobsData.mobileImg2,
                            title: JobsData.name,
                        },
                        {
                            url: JobsData.webImg3,
                            title: JobsData.name,
                        },
                        {
                            url: JobsData.webImg4,
                            title: JobsData.name,
                        }
                    ];

                    return (

                        <div key={key}>
                            <div className="flex md:flex-row flex-col justify-between items-center w-full">
                                <h1 className='text-3xl dark:text-white text-black font-semibold md:text-left text-center md:my-6 my-3 md:pl-4 md:border-l-4 dark:md:border-customSecondary-900 md:border-gray-200'>{JobsData.name}</h1>
                                <div className="flex md:flex-row flex-col items-center justify-end w-full md:mt-0 mt-3 md:mb-0 mb-6">
                                    <div className='flex md:justify-end overflow-x-auto overflow-y-hidden w-full py-2 md:py-0 md:order-1 order-2'>

                                        {
                                            ExperiencesData.filter(experienceItem => JobsData.experiences.includes(experienceItem.name)).map((experience, key) => (
                                                <JobExperiences image={experience.image} name={experience.name} key={key} />
                                            ))
                                        }

                                    </div>
                                    <div className="flex items-center md:justify-start justify-between md:mb-0 mb-3 w-full md:w-fit md:order-2 order-1">
                                        <h2 className='dark:text-white text-customPrimary-900 md:ml-3'>DENEYİMLER</h2>
                                        <Link to={JobsData.link} title='Web Sitesine Git' target='_blank'
                                            className={`md:px-2 md:mx-2 md:border-l-2 transition-all flex items-center ` +
                                                `dark:md:border-customSecondary-900 md:border-gray-200 dark:text-white dark:hover:text-yellow-400 hover:text-violet-600 `}>
                                            <GoLinkExternal className='text-2xl' />
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            <div className="flex md:flex-row flex-col max-w-full">
                                <div className="md:mx-2 relative md:h-[750px] md:w-1/3 w-full h-auto">
                                    <img src={JobsData.mobileImg} alt={JobsData.name} title={JobsData.name}
                                        className="w-full h-full rounded-xl shadow-customSm object-cover object-top cursor-pointer hover:scale-[1.02] transition-all"
                                        onClick={() => openLightbox(0)} // Birinci resim için indeks 1
                                    />
                                </div>
                                <div className="flex flex-col w-full md:w-2/3">
                                    <div className="md:mx-2 relative md:h-[367px] w-full h-auto md:mt-0 mt-4 mb-[8px]">
                                        <img src={JobsData.webImg} alt={JobsData.name} title={JobsData.name}
                                            className="w-full h-full rounded-xl shadow-customSm object-cover object-top cursor-pointer hover:scale-[1.02] transition-all"
                                            onClick={() => openLightbox(1)} // İkinci resim için indeks 1
                                        />
                                    </div>
                                    <div className="md:mx-2 relative md:h-[367px] w-full h-auto mt-2 md:mt-[8px]">
                                        <img src={JobsData.webImg2} alt={JobsData.name} title={JobsData.name}
                                            className="w-full h-full rounded-xl shadow-customSm object-cover object-top cursor-pointer hover:scale-[1.02] transition-all"
                                            onClick={() => openLightbox(2)} // Üçüncü resim için indeks 2
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="flex md:flex-row flex-col max-w-full mt-4">
                                <div className="md:mx-2 relative md:h-[750px] md:w-1/3 w-full h-auto">
                                    <img src={JobsData.mobileImg2} alt={JobsData.name} title={JobsData.name}
                                        className="w-full h-full rounded-xl shadow-customSm object-cover object-top cursor-pointer hover:scale-[1.02] transition-all"
                                        onClick={() => openLightbox(3)} // Dördüncü resim için indeks 3
                                    />
                                </div>
                                <div className="flex flex-col w-full md:w-2/3">
                                    <div className="md:mx-2 relative md:h-[367px] w-full h-auto md:mt-0 mt-4 mb-[8px]">
                                        <img src={JobsData.webImg3} alt={JobsData.name} title={JobsData.name}
                                            className="w-full h-full rounded-xl shadow-customSm object-cover object-top cursor-pointer hover:scale-[1.02] transition-all"
                                            onClick={() => openLightbox(4)} // Beşinci resim için indeks 4
                                        />
                                    </div>
                                    <div className="md:mx-2 relative md:h-[367px] w-full h-auto mt-2 md:mt-[8px]">
                                        <img src={JobsData.webImg4} alt={JobsData.name} title={JobsData.name}
                                            className="w-full h-full rounded-xl shadow-customSm object-cover object-top cursor-pointer hover:scale-[1.02] transition-all"
                                            onClick={() => openLightbox(5)} // Altıncı resim için indeks 5
                                        />
                                    </div>
                                </div>
                            </div>

                            {isOpen && (
                                <Lightbox
                                    images={images.map((image) => ({ url: image.url, title: image.title }))}
                                    startIndex={currentIndex}
                                    onClose={closeLightbox}
                                    zoomStep={1}
                                />
                            )}

                        </div>
                    )
                })
            }

        </div>
    )
}
export default Jobs


