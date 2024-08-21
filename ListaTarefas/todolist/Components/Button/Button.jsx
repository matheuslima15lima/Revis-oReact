import React from "react";
import './Button.css'
const Button = ({textButton, type})=>{
    return(
        <button className="Button"
            type={type}
        >
        {textButton}
        </button>
    )
}

export default Button;