import React from 'react';

const Title = ({text, className}) => {
    return (
        <h3 className={`font-bold title ${className}`}>
            {text}
        </h3>
    );
};

export default Title;