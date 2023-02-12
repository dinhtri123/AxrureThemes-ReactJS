import React from 'react';

const Input = ({type = 'text', placeholder, name}) => {
    return (
        <div>
            <input type={type} name={name} id={name} placeholder={placeholder} className='w-full h-[40px] px-5 outline-none border-b border-[#d6d6d6] placeholder:text-[#cfcfcf]'/>
        </div>
    );
};

export default Input;