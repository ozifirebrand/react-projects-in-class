import React, {useEffect, useState} from 'react';
import Input from "../../reusables/Input";
import "./login.css"
import img from "../../../../assets/background.svg"
import imgb from "../../../../assets/background2.svg"
import Button from "../../reusables/Button";

const Login = (props) => {
    let {setState, setAuthenticated} =props

    const inputFields = [
        {label: "Email", placeholder: "Enter your email"},
        {label: "Password", placeholder: "Enter your password"},
    ]

    let initialData={
        email : "", password:""
    }

    const [inputData, setInputData] = useState(initialData)
    const handleInput = (e) =>{
        let data = {...inputData, [e.target.name]: e.target.value}
        setInputData(data)
    }

    useEffect(
        ()=> {
            console.log("I mounted in LOGIN")
            return () => {
                console.log("I unmounted from LOGIN")
            }
        }, [inputData]
    )


    const handleLogin= ()=> {
        if (inputData.email !== "" && inputData.password !== "") {
            let email = inputData.email
            localStorage.setItem("userEmail", email)
            setAuthenticated(true)
        } else alert("User info is incomplete")
    }

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
                {inputFields.map((field, index)=>
                    <Input value = {inputData[field.name]} onChange = {handleInput}
                           key = {index} field={ field}/>)}
            </div>
            <Button name = "Login" onClick = {handleLogin}/>
            <img className={"bottom-circle"} src={imgb} alt={"circlebackground"}/>
        </div>
    );
};

export default Login;