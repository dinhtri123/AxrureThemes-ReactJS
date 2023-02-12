import React from 'react';

const Title = ({text, className}) => {
    return (
        <h3 className={`font-bold ${className}`}>
            {text}
        </h3>
    );
};

export default Title;