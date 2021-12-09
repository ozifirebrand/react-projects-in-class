import React, {useState} from "react";
import "./App.css"
import Auth from "./ewa/views/auth/Auth";
import Dashboard from "./ewa/views/dashboard/Dashboard";
function App(){
    let value = false
    let email = ""
    try{
        email = localStorage.getItem("userEmail")
        if (email !== "" && email !== null){
            console.log(email)
            value = true
        }
    }
    catch (error){
        email = ""
        value = false
    }

    const [authenticated, setAuthenticated] = useState(value)
  return(
      <div className={"container"}>
          {authenticated ? <Dashboard/>: <Auth setAuthenticated = {setAuthenticated}/> }
               {/*<Dashboard/>*/}
          }
      </div>
  );
}

export default App