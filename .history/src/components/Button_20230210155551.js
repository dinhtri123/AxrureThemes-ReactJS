import React from 'react';

const Button = ({className}) => {
    return (
        <div className={`w-[135px] border-2 bg-transparent text-white font-medium ${className}`}>
            Download
        </div>
    );
};

export default Button;