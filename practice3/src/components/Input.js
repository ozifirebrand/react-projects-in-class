import React from 'react';

const Input = (props) => {
    let {title, placeholder} = props
    return (
        <div>
            <label>
                {title}
                <input placeholder={placeholder} />
            </label>
        </div>
    );
};

export default Input;