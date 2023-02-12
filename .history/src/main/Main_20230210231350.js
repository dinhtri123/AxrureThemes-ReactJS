import React from 'react';
import MainStandard from './MainStandard';
import MainSublist from './MainSublist';
import MainTabs from './MainTabs';

const Main = () => {
    return (
        <div>
            <MainTabs></MainTabs>
            <MainSublist></MainSublist>
            <MainStandard></MainStandard>
            <MainAwesome></MainAwesome>
        </div>
    );
};

export default Main;