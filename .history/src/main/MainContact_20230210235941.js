import React from 'react';
import Text from '../components/Text';
import Title from '../components/Title';

const MainContact = () => {
    return (
        <div className='w-full py-[100px] bg-white'>
            <div className="container flex flex-col gap-[30px] items-center justify-center">
                <Title text={"CONTACT US"} className='text-[30px] font-light'></Title>
                <span className="w-[60px] h-[2px] bg-orangeLight rounded-lg"></span>
                <Text content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}></Text>
                <form>
                    <Inpu
                </form>
            </div>
        </div>
    );
};

export default MainContact;