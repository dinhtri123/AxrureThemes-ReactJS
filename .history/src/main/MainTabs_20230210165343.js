import React from 'react';
const tabs = ['TAB 1', 'TAB 2', 'TAB 3']
const MainTabs = () => {
    return (
        <div className='pt-[145px] pb-[115px] bg-[#f5f5f5] w-full'>
            <div className='container flex flex-col'>
            {tabs.map((tab) => (
                <p className='w-[110px] h-[110px] flex justify-center items-center text-lg text-white bg-[#333333] border-b-'>{tab}</p>
            ))}
            </div>
        </div>
    );
};

export default MainTabs;