import React from 'react';
import Title from '../components/Title';

const MainStandard = () => {
    return (
        <div className='bg-[#f5f5f5]'>
            <div className="container flex gap-10">
                <div className='w-[50%] flex flex-col gap-[30px]'>
                <Title text={"Standard Picture Section"} className="text-lg"></Title>
                <span className="w-[60px] h-[2px] bg-orangeLight rounded-lg"></span>
                </div>
            </div>
        </div>
    );
};

export default MainStandard;