import React from "react";
import "../Laptop.css"

import Casing from "../components/laptop/Casing"
import Keyboard from "../components/laptop/Keyboard"

const Laptop = (props)=> {
    let {name, color, madeIn} = props
    return(
        <div className={"laptop"}>
            <Casing color = {color}/>
            <Keyboard name={name} madeIn = {madeIn}/>
        </div>
    )
}
export default Laptop