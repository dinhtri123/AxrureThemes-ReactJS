import React from 'react';

const Input = ({type = 'text', placeholder, name}) => {
    return (
        <div>
            <input type={type} name={name} id={name} placeholder={placeholder} className='w-full h-[30px] px-5 outline-none border-b-2 border-[#f5f5f5] placeholder:text-[#cfcfcf] placeholder:text-sm text-sm'/>
        </div>
    );
};

export default Input;