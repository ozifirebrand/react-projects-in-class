import React from 'react';
import "./register.css"
import img from "../../../../assets/background.svg";
import imgb from "../../../../assets/background2.svg"
import Button from "../../reusables/Button";
import Input from "../../reusables/Input";
const Register = (props) => {

    let {setState} = props

    const inputFields = [
        {label: "FirstName", placeholder: "Enter your firstname"},
        {label: "LastName", placeholder: "Enter your lastname"},
        {label: "Email", placeholder: "Enter your email"},
        {label: "Password", placeholder: "Enter your password"},
    ]
    return (
        <div className={"register-container"}>
            <div className={"register-header"}>
                <button onClick={()=> setState("login")}>o
                    LOGIN
                </button>
            </div>
            <img className={"top-circle"} src = {img} alt={"circlebackground"}/>

            <div className={"text-container"}>
                <h4>Welcome to Ewa</h4>
                <p> Get access to amazing ewa deals
                    from the comfort of your home
                </p>
            </div>
            <div className={"form-container"}>
                {inputFields.map((field, index)=>
                    <Input key = {index} field={ field}/>)}
            </div>
            <Button name = "Register"/>
            <img className={"bottom-circle"} src={imgb} alt={"circlebackground"}/>
        </div>
    );
};

export default Register;