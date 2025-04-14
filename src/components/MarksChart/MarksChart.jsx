import React, { use } from 'react';

const MarksChart = ({marksPromise}) => {
    const marksData = use(marksPromise)
    console.log(marksData)
    return (
        <div>
            
        </div>
    );
};

export default MarksChart;