import React from "react";
import Screen from "./Screen";
const Casing = (props)=>{
    return(
        <div className={"casing"} style={{border: `30px solid ${props.color}`}}>
            <Screen/>
        </div>
    )
}

export default Casing