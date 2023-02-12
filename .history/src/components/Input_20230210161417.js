import React from 'react';

const Input = ({type = 'text', placeholder}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} className='w-full h-[40px] border-none outline-none border-bottom'/>
        </div>
    );
};

export default Input;