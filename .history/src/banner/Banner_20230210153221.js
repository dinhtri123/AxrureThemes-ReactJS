import React from 'react';

const Banner = () => {
    return (
        <div className='relative w-full max-h-[640px] h-full bg-black'>
            <div className='absolute inset-0'>
                <img src="../banner.jpeg" alt="" className='w-full h-full on'/>
            </div>
        </div>
    );
};

export default Banner;