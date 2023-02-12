import React from 'react';
import Title from '../components/Title';

const MainStylish = () => {
    return (
        <div className='w-full h-[320px] relative bg-black'>
        <div className='absolute inset-0 z-0 opacity-50'>
            <img src="../banner12.jpeg" alt="" className='object-cover w-full h-full'/>
        </div>
            <div className='container flex flex-col gap-[30px]'>
            <Title text="STYLISH AXURE DESIGN" className={"text-"}></Title>
            </div>
        </div>
    );
};

export default MainStylish;