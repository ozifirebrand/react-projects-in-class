import React from 'react';
import Input from "../components/Input";

const Register = (props) => {
    let inputFields = [
        {label: "Phone number", placeholder:"Enter your phone number"},
        {label: "Firstname", placeholder:"Enter your firstname"},
        {label: "Lastname", placeholder:"Enter your lastname"},
        {label: "Password", placeholder:"Enter your password"},

    ]
    return (
        <div>
            {inputFields.map((property, index)=>
            <Input key = {index} placeholder = {property}/>)}
        </div>
    );
};

export default Register;