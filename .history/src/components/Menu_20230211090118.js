import React from 'react';

const Menu = () => {
    return (
        <nav>
            <ul className='flex gap-[45px] text-white text-sm font-medium'>
                <li><a href="#Feature">Features</a></li>
                <li><a href="#?">About</a></li>
                <li><a href="#?">Pricing</a></li>
                <li><a href="#?">Reviews</a></li>
                <li><a href="#?">Contact</a></li>
            </ul>
        </nav>
    );
};

export default Menu;