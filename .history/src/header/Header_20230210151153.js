import React from 'react';
import Logo from '../components/Logo';

const Header = () => {
    return (
        <div className='w-full bg-black'>
            <div>
                <Logo></Logo>
            </div>
        </div>
    );
};

export default Header;