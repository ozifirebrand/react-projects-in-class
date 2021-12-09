import React, {useState} from 'react';
import Login from "../../components/auth/login/Login";
import Register from "../../components/auth/register/Register";

const Auth = ({setAuthenticated}) => {
    const [state, setState] = useState("login")
    return (
        <div>
            {state === "login" ? <Login setState = {setState}
                setAuthenticated = {setAuthenticated} />:<Register setState = {setState}/>}
        </div>
    );
};

export default Auth;