import React, { useState } from 'react';
import CareerData from '../data/CareerData';
import CareerItem from './items/CarrierItem';

function Career() {
    const [activeItem, setActiveItem] = useState(CareerData.length - 1);

    const toggleActiveItem = (key) => {
        setActiveItem(key);
    };


    return (
        <div className='flex flex-wrap flex-col-reverse'>
            {CareerData.map((Career, key) => {

                const isFirstItem = key === CareerData.length - 1;
                const isActive = key === activeItem;

                return (
                    <CareerItem
                        name={Career.name}
                        startTime={Career.startTime}
                        endTime={Career.endTime}
                        position={Career.position}
                        logo={Career.logo}
                        description={Career.description}
                        experiences={Career.experiences}

                        isFirstItem={isFirstItem}
                        isActive={isActive}
                        toggleActiveItem={toggleActiveItem}
                        key={key}
                        itemKey={key}
                    />
                );
            })}
        </div>
    );
}

export default Career;