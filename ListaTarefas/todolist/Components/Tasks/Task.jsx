import React from 'react'
import './Task.css'
const Task = ({ tarefa, completarTarefa , removerTarefa }) => {
    return (
        

       
        <div className='Container-Task'>
            <div className='Check-Container'>

                <button className='Check'
                        style={{  backgroundColor: tarefa.IsCompleted? '#1E123B' :'#BDA4FF'}}
                        onClick={()=> completarTarefa(tarefa.id)}
                ></button>
                <h1 className='Text-Task'>{tarefa.text}</h1>
            </div>

            <div className='Check-Container'>
               <button 
               className='Button-Icon'
                onClick={()=> removerTarefa(tarefa.id)}
               >
               <img className='Cancel' src='../../src/assets/Cancel.svg' alt='Botão de deletar tarefa '/>
                </button> 
                <button className='Button-Icon'>
                <img className='Cancel' src='../../src/assets/Edit.svg' alt='Botão de editar tarefa '/>
                </button>
               
            </div>
        </div>
        
    )
}

export default Task;