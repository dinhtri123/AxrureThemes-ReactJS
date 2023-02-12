import React from 'react';
import Title from '../components/Title';

const MainContact = () => {
    return (
        <div className='w-full py-[100px] bg-white'>
            <div className="container flex flex-col gap-[30px] items-center justify-center">
                <Title text={"CONTACT US"} className='text-[30px] font-light'></Title>
            </div>
        </div>
    );
};

export default MainContact;