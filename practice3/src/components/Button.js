import React from 'react';

const Button = (props) => {
    let {name} = props
    return (
            <button className={"button-button"}>
                {name}
            </button>
    );
};

export default Button;