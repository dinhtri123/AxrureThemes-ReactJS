import React from 'react';
import Logo from '../components/Logo';
import Text from '../components/Text';

const Banner = () => {
    return (
        <div className='relative w-full max-h-[640px] h-[640px] bg-black'>
            <div className='absolute inset-0 z-0 bg-black opacity-50'>
                <img src="../banner.jpeg" alt="" className='object-cover w-full h-full'/>
            </div>
            <div className='container z-10 grid justify-center w-full h-full grid-cols-2 gap-10 isolate'>
                <div className='flex flex-col gap-[35px] justify-center'>
                    <Logo className='text-[45px]'></Logo>
                    <p>MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</p>
                    <span></span>
                    <Text></Text>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Banner;