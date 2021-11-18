import React from 'react';
import Input from "../../reusables/Input";
import "./login.css"
import img from "../../../../assets/background.svg"

const Login = () => {

    const inputFields = [
        {label: "Email", placeholder: "Enter your email"},
        {label: "Password", placeholder: "Enter your password"},
    ]
    return (
        <div className={"login-container"}>
            <div className={"login-header"}>
                <div className={"ewa-logo"}>
                </div>
                <button>
                    REGISTER
                </button>
            </div>
            <img className={"top-circle"} src = {img} alt={"circlebackground"}/>

            <div className={"text-container"}>
                <h3>Welcome to Ewa</h3>
                <p> Where your cravings
                    for Beans are satisfied
                </p>
            </div>
            <div className={"form-container"}>
                {inputFields.map((field, index)=> <Input key = {index} field={ field}/>)}
            </div>
        </div>
    );
};

export default Login;