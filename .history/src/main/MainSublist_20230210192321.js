import React from 'react';
import Title from '../components/Title';

const MainSublist = () => {
    return (
        <div className='py-[100px]'>
            <div className='container flex gap-10'>
                <div>
                    <img src="../img2.png" alt="" />
                </div>
                <div>
                    <Title text={"Sub list section"}></Title>
                    <span></span>
                    
                </div>
            </div>
        </div>
    );
};

export default MainSublist;