import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper";
import JobsItem from '../../components/items/JobsItem';
import JobsData from '../../data/JobsData';

function HomeJobs() {
    return (
        <div className="container mx-auto mb-8">
            <h2 className='text-3xl dark:text-white text-black font-semibold mb-8 md:text-left text-center'>ÇALIŞMALARIM</h2>

            <Swiper spaceBetween={30} loop={true} pagination={{ clickable: true }} autoplay={{ delay: 3000 }} modules={[Autoplay, Pagination]} className='!pt-4 !pb-16 !px-2'
                breakpoints={{
                    0: {
                        slidesPerView: 2,
                        spaceBetween: 10,
                    },
                    639: {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                    865: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                    1200: {
                        slidesPerView: 5,
                        spaceBetween: 30,
                    }
                }}>

                {
                    JobsData.map((JobsData, key) => {
                        return (

                            <SwiperSlide className='group cursor-pointer' key={key}>
                                <JobsItem name={JobsData.name} mobileImg={JobsData.mobileImg} />
                            </SwiperSlide>
                        )
                    })
                }


            </Swiper>
        </div>
    )
}

export default HomeJobs