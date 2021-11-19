import React from 'react';
import Input from "../../reusables/Input";
import "./login.css"
import img from "../../../../assets/background.svg"
import imgb from "../../../../assets/background2.svg"
import Button from "../../reusables/Button";

const Login = (props) => {
    let {setState} =props

    const inputFields = [
        {label: "Email", placeholder: "Enter your email"},
        {label: "Password", placeholder: "Enter your password"},
    ]
    return (
        <div className={"login-container"}>
            <div className={"login-header"}>
                <div className={"ewa-logo"}>
                </div>
                <button onClick={()=> setState("register")}>
                    REGISTER
                </button>
            </div>
            <img className={"top-circle"} src = {img} alt={"circlebackground"}/>

            <div className={"text-container"}>
                <h4>Welcome to Ewa</h4>
                <p> Get access to amazing ewa deals
                    from the comfort of you home
                </p>
            </div>
            <div className={"form-container"}>
                {inputFields.map((field, index)=> <Input key = {index} field={ field}/>)}
            </div>
            <Button name = "Login"/>
            <img className={"bottom-circle"} src={imgb} alt={"circlebackground"}/>
        </div>
    );
};

export default Login;