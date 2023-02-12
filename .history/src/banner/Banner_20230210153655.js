import React from 'react';

const Banner = () => {
    return (
        <div className='relative w-full max-h-[640px] h-[640px] bg-black'>
            <div className='absolute inset-0 bg-black opacity-50'>
                <img src="../banner.jpeg" alt="" className='object-cover w-full h-full'/>
            </div>
            <div className='flex gap-10'>
                <div className='flex flex-col'>
                    
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Banner;