import React from "react";
import './Input.css';

const Input =({ onChange, type, placeholder, name, id, value })=>{
    return(
        <input
            className="Input"
            onChange={onChange}
            type={type}
            placeholder={placeholder}
            name={name}
            id={id}
            value={value}
        >
         {/* <img src='./assets/Search.svg'></img> */}
        </input>
    )
}

export default Input;