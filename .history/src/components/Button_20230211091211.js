import React from 'react';

const Button = ({className}) => {
    return (
        <div className={`btn w-[135px] h-[40px] border-2 bg-transparent text-white flex justify-center items-center font-medium cursor-pointer ${className}`}>
            Download
        </div>
    );
};

export default Button;