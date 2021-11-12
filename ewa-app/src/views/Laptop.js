import React from "react";
import "../Laptop.css"

import Casing from "../components/laptop/Casing"
import Keyboard from "../components/laptop/Keyboard"
import Screen from "../components/laptop/Screen"
const Laptop = ()=> {
    return(
        <div className={"laptop"}>
            <Casing/>
            <Keyboard/>
        </div>
    )
}
export default Laptop