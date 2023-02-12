import React from 'react';

const Button = ({className}) => {
    return (
        <div className={`w-[135px] h-[40px] border-2 bg-transparent text-white flex justify font-medium ${className}`}>
            Download
        </div>
    );
};

export default Button;