import React from "react";
import './Button.css'
const Button = ({textButton, type, onClick})=>{
    return(
        <button className="Button"
            type={type}
            onClick={onClick}
        >
        {textButton}
        </button>
    )
}

export default Button;