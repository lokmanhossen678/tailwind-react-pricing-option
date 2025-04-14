import { CircleCheck } from 'lucide-react';
import React from 'react';


const PricingFeature = ({feature}) => {

    return (
        <p className='flex mt-4'>
            <CircleCheck className='mr-2'></CircleCheck> {feature}
        </p>
    );
};

export default PricingFeature;