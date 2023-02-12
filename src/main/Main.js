import React from 'react';
import MainAwesome from './MainAwesome';
import MainContact from './MainContact';
import MainStandard from './MainStandard';
import MainStylish from './MainStylish';
import MainSublist from './MainSublist';
import MainTabs from './MainTabs';

const Main = () => {
    return (
        <div>
            <MainTabs></MainTabs>
            <MainSublist></MainSublist>
            <MainStandard></MainStandard>
            <MainAwesome></MainAwesome>
            <MainStylish></MainStylish>
            <MainContact></MainContact>
        </div>
    );
};

export default Main;