import React from 'react';
import Input from "../../components/Input";
import Button from "../../components/Button";
import DialogBox from "../../components/DialogBox";

const Register = (props) => {
    let {setState} = props
    let inputFields = [
        {label: "Phone number", placeholder:"Enter your phone number"},
        {label: "Firstname", placeholder:"Enter your firstname"},
        {label: "Lastname", placeholder:"Enter your lastname"},
        {label: "Password", placeholder:"Enter your password"},
    ]
    return (
        <div>
            <Button name = "LOGIN" onClick ={() => setState("login")}/>
            <DialogBox/>
            {inputFields.map((property, index)=>
            <Input key = {index} placeholder = {property}/>)}
            <Button name = "REGISTER" onClick ={() => setState("register")}/>
        </div>
    );
};

export default Register;