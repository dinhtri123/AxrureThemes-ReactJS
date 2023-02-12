import React from 'react';

const Input = ({type = 'text', placeholder, name}) => {
    return (
        <div>
            <input type={type} name={name} id={name} placeholder={placeholder} className='w-full h-[30px] px-5 outline-none border-b-2 border-[#cfcfcf] placeholder:text-[#cfcfcf] placeholder:text-sm text-sm'/>
        </div>
    );
};

export default Input;