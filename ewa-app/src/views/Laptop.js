import React from "react";
import "../Laptop.css"

import Casing from "../components/laptop/Casing"
import Keyboard from "../components/laptop/Keyboard"

const Laptop = (props)=> {
    let {name, color, black} = props
    return(
        <div className={"laptop"}>
            <Casing color = {color}/>
            <Keyboard name={"Apple"}/>
            <Keyboard name={"Hp"}/>
        </div>
    )
}
export default Laptop