import React from 'react';

const Title = ({text, className}) => {
    return (
        <h3 className={`text-lg font-bold ${className}`}>
            {text}
        </h3>
    );
};

export default Title;