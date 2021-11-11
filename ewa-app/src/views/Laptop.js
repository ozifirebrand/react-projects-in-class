import React from "react";
import Casing from "../components/laptop/Casing"
import Keyboard from "../components/laptop/Keyboard"
import Screen from "../components/laptop/Screen"
import "../Laptop.css"
const Laptop = ()=> {
    return(
        <div className={"laptop"}>
            <Screen/>
            <Keyboard/>
            <Casing/>
        </div>
    )
}
export default Laptop