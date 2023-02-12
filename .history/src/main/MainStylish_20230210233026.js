import React from 'react';
import Text from '../components/Text';
import Title from '../components/Title';

const MainStylish = () => {
    return (
        <div className='w-full h-[320px] relative bg-black'>
        <div className='absolute inset-0 z-0 opacity-50'>
            <img src="../banner12.jpeg" alt="" className='object-cover w-full h-full'/>
        </div>
            <div className='container flex flex-col gap-[30px]'>
            <Title text="STYLISH AXURE DESIGN" className={"text-white text-[30px] font-medium"}></Title>
            <span className="w-[60px] h-[2px] bg-white rounded-lg"></span>
            <Text content={"Use the sections you need, remove the ones you don't.  Create gorgeous prototypes faster than ever!"} className='text-white'></Text>
            </div>
        </div>
    );
};

export default MainStylish;