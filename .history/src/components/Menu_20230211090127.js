import React from 'react';

const Menu = () => {
    return (
        <nav>
            <ul className='flex gap-[45px] text-white text-sm font-medium'>
                <li><a href="#feature">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#pr">Pricing</a></li>
                <li><a href="#?">Reviews</a></li>
                <li><a href="#?">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Menu;