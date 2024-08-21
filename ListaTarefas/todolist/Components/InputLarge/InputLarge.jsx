import React from "react";
import './InputLarge.css'
const InputLarge = ({ onChange, type, placeholder, name, id, value})=>{
    return(
        <input
        
        className="InputLarge"
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        name={name}
        id={id}
        value={value}
        >
        
        </input>
    )
}

export default InputLarge;