import React from 'react';

const Input = (props) => {
    let {placeholder} = props
    return (
        <div>
            <p> {placeholder.label} </p>
            <input placeholder={placeholder.placeholder} />
        </div>
    );
};

export default Input;