import React from 'react';
import Logo from '../components/Logo';

const Banner = () => {
    return (
        <div className='relative w-full max-h-[640px] h-[640px] bg-black'>
            <div className='absolute inset-0 z-0 bg-black opacity-50'>
                <img src="../banner.jpeg" alt="" className='object-cover w-full h-full'/>
            </div>
            <div className='container z-10 grid justify-center w-full h-full gap-10 grid-col isolate'>
                <div className='flex flex-col gap-[35px]'>
                    <Logo className='text-[45px]'></Logo>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Banner;