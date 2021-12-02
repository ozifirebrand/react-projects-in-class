import React from "react";

const Input = (props)=>{
    let {field, onChange, value} = props
    return(
        <div className={"input-container"}>
            <p>{field.label}</p>
            <input value={value} name={field.name} onChange={onChange} placeholder={field.placeholder}/>
        </div>
    )
}
export default Input