import React from 'react';

const Input = ({type = 'text', placeholder}) => {
    return (
        <div>
            <input type={type} name placeholder={placeholder} className='w-full h-[60px] border-none outline-none border-b placeholder:text-[#cfcfcf]'/>
        </div>
    );
};

export default Input;