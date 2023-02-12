import React from 'react';
import Input from '../components/Input';
import Text from '../components/Text';
import Title from '../components/Title';

const MainContact = () => {
    return (
        <div className='w-full py-[100px] bg-white'>
            <div className="container flex flex-col gap-[30px] items-center justify-center">
                <Title text={"CONTACT US"} className='text-[30px] font-light'></Title>
                <span className="w-[60px] h-[2px] bg-orangeLight rounded-lg"></span>
                <Text content={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}></Text>
                <form className='flex flex-col w-full gap-10'>
                <div className='grid grid-cols-2 gap-10'>
                <div className='w-[50%] flex flex-col'>
                    <Input type='text' name='name' placeholder={"Name"}></Input>
                    <Input type='email' name='email' placeholder={"Email"}></Input>
                    <Input type='text' name='subject' placeholder={"Subject"}></Input>
                </div>
                <textarea placeholder='Message'></textarea>
                </div>
                <div className='m-auto'>
                    <button className='font-medium text-white bg-orangeLight rouded-md'>Send Message</button>
                </div>
                </form>
            </div>
        </div>
    );
};

export default MainContact;