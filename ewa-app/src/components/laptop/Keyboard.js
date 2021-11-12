import React from "react";
const Keyboard = (props)=>{
    return (
        <div className={"keyboard"}>
            <div>
                {props.name} Keyboard
                made in
            </div>
            <div style={{color: "gold", textAlign : "center", fontWeight: "bold" }}>
                 {props.madeIn}
            </div>
        </div>
    )
}

export default Keyboard