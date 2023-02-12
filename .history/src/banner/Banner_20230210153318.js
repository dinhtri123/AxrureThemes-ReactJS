import React from 'react';

const Banner = () => {
    return (
        <div className='relative w-full max-h-[640px] bg-'>
            <div className='absolute inset-0'>
                <img src="../banner.jpeg" alt="" className='object-cover w-full h-full'/>
            </div>
        </div>
    );
};

export default Banner;