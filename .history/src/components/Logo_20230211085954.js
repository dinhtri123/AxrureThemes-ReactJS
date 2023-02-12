import React from 'react';

const Logo = ({className}) => {
    return (
        <a href='/' className={`flex text-3xl text-white ${className}`}>
            <p className='font-bold'>AX</p>
            <p className='text-orangeLight'>IT</p>
        </a>
    );
};

export default Logo;