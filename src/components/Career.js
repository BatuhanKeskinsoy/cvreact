import React from 'react';
import CareerData from '../data/CareerData';
import CareerItem from './items/CarrierItem';

function Career() {
    return (
        <div className='flex flex-wrap md:flex-row flex-col'>
            {
                CareerData.map((Carrier, key) => {
                    return <CareerItem name={Carrier.name} logo={Carrier.logo} key={key} />
                })
            }
        </div>
    )
}

export default Career