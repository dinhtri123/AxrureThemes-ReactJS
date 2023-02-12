import React from 'react';

const Menu = () => {
    return (
        <nav>
            <ul className='flex gap-[45px] text-white text-sm font-medium nav'>
                <li><a href="#feature">Features</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#reviews">Reviews</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Menu;