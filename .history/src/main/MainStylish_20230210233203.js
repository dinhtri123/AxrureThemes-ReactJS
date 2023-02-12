import React from 'react';
import Button from '../components/Button';
import Text from '../components/Text';
import Title from '../components/Title';

const MainStylish = () => {
    return (
        <div className='w-full h-[320px] relative bg-black'>
        <div className='absolute inset-0 z-0 opacity-50'>
            <img src="../banner12.jpeg" alt="" className='object-cover w-full h-full'/>
        </div>
            <div className='container flex flex-col items-center justify-center gap-[30px] z-10 isolate'>
            <Title text="STYLISH AXURE DESIGN" className={"text-white text-[30px] font-light"}></Title>
            <span className="w-[60px] h-[2px] bg-white rounded-lg"></span>
            <Text content={"Use the sections you need, remove the ones you don't.  Create gorgeous prototypes faster than ever!"} className='text-white'></Text>
            <Button className={"border-white text-white"}></Button>
            </div>
        </div>
    );
};

export default MainStylish;