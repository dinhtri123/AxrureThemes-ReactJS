import React from 'react';

const Input = ({type = 'text', placeholder}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder}/>
        </div>
    );
};

export default Input;