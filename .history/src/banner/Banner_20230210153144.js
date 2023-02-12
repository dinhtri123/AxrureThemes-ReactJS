import React from 'react';

const Banner = () => {
    return (
        <div className='relative w-full max-h-[640px] h-full bg-black opacity-40'>
            <div className='absolute inset-0'>
                <img src="../banner.jpeg" alt="" />
            </div>
        </div>
    );
};

export default Banner;