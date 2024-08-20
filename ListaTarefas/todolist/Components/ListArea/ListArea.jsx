import React from "react"
import './listArea.css'
const ListArea = ({children})=>{
    return(
        <article className="listArea">
                {children}
        </article>
    )
}

export default ListArea;