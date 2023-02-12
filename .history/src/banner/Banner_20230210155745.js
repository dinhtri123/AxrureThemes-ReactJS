import React from 'react';
import Button from '../components/Button';
import Logo from '../components/Logo';
import Text from '../components/Text';

const Banner = () => {
    return (
        <div className='relative w-full max-h-[640px] h-[640px] bg-black'>
            <div className='absolute inset-0 z-0 bg-black opacity-50'>
                <img src="../banner.jpeg" alt="" className='object-cover w-full h-full'/>
            </div>
            <div className='container z-10 grid justify-center w-full h-full grid-cols-2 gap-10 isolate'>
                <div className='flex flex-col gap-[35px] justify-center text-white'>
                    <Logo className='text-[60px]'></Logo>
                    <p className='text-semibold text-[30px]'>MODERN AXURE TEMPLATE FOR BEAUTIFUL PROTOTYPES</p>
                    <span className='w-[70px] h-2 bg-white'></span>
                    <Text></Text>
                    <Button></Button>
                </div>
                <div></div>
            </div>
        </div>
    );
};

export default Banner;