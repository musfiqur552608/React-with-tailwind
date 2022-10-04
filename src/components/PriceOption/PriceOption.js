import React from 'react';
import { CheckCircleIcon } from '@heroicons/react/24/solid';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {
    const {features} = option;
    return (
        <div className='bg-indigo-300 m-3 rounded-md p-3'>
            <div>
                <h3><span className='text-6xl font-bold text-white '>{option.price}</span><span className='text-2xl text-gray-200'>/mon</span></h3>
                <p className='text-3xl mt-3'>{option.name}</p>
            </div>
            {
                features.map((feature, idx) => <Feature  key={idx} feature={feature}></Feature>)
            }
            <button>Buy Now</button>
        </div>
    );
};

export default PriceOption;