import React from 'react';
import Input from "../../reusables/Input";
import "./login.css"

const Login = () => {
    return (
        <div className={"login-container"}>
            <div className={"login-header"}>
                <div className={"ewa-logo"}>
                </div>
                <button>
                    REGISTER
                </button>
            </div>
            <Input/>
        </div>
    );
};

export default Login;