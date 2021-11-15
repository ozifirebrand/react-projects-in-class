import React from "react";
import Register from "../components/buttons/Register";
import PhoneNumber from "../components/forms/PhoneNumber";
import FirstName from "../components/forms/FirstName";
import LastName from "../components/forms/LastName";
import Password from "../components/forms/Password";

function Login(){
    return(
        <div className={"login"}>
            <Register className ={"topButton"}/>
            <div className={"welcomeText"}>
                <h3>Welcome to Ewa
                </h3>
                Where your cravings for<br/>
                Beans are satisfied
            </div>
            <PhoneNumber/>
            <FirstName/>
            <LastName/>
            <Password/>
            <Register className ={"lowerButton"}/>
        </div>
    )
}

export default Login