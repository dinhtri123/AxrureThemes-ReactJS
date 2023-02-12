import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black h-[80px]'>
            <div className="container flex flex-col items-center justify-center w-full gap-2">
                <div className='flex items-center justify-center gap-10 text-[#cfcfcf]'>
                <ion-icon name="logo-facebook"></ion-icon>
                <ion-icon name="logo-twitter"></ion-icon>
                <ion-icon name="logo-google"></ion-icon>
                <ion-icon name="logo-pinterest"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                <ion-icon name="logo-instagram"></ion-icon>
                </div>
                <p>@2021 Axure Themes</p>
            </div>
        </div>
    );
};

export default Footer;