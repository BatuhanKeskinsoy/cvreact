import React from 'react';
import CareerData from '../data/CareerData';
import CareerItem from './items/CarrierItem';

function Career() {
    return (
        <div className='flex flex-wrap flex-col-reverse'>
            {
                CareerData.map((Carrier, key) => {
                    return <CareerItem name={Carrier.name} startTime={Carrier.startTime} endTime={Carrier.endTime} position={Carrier.position} logo={Carrier.logo} key={key} />
                })
            }
        </div>
    )
}

export default Career