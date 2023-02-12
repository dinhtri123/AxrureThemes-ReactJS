import React from 'react';
import Logo from '../components/Logo';

const Header = () => {
    return (
        <div className='w-full bg-black h-[70px]'>
            <div className='container flex items-center justify-between'>
                <Logo></Logo>
                <Menu></Menu>
            </div>
        </div>
    );
};

export default Header;