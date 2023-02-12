import React from 'react';

const Input = ({type = 'text'}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder}/>
        </div>
    );
};

export default Input;