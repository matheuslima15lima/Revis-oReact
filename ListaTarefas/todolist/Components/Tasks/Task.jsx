import React, { useState } from 'react'
import './Task.css'
import ReactModal from 'react-modal';
import ListArea from '../ListArea/ListArea';
import InputLarge from '../InputLarge/InputLarge';
import Button from '../Button/Button';
const Task = ({ atualizarTarefa, txtTask,
   setTxtTask, tarefa, customStyles, 
   fecharModal, abrirModal, modalIsOpen,
    completarTarefa ,removerTarefa}) => {
    const [showModal, setShowModal] = useState(false);
    
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
                <button className='Button-Icon'
                  onClick={abrirModal}
                >
                <img className='Cancel' src='../../src/assets/Edit.svg' alt='Botão de editar tarefa '/>
                </button>
               
            </div>



             
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel='Criar Tarefa'
        style={customStyles}
      >
        <ListArea>
          

            
            <InputLarge
              placeholder= {tarefa.text}
              type="Text"
              value={txtTask}
              onChange={(e) => setTxtTask(e.target.value) }
            />

            <Button
              textButton="Atualizar"
              type="button"
              onClick={() => atualizarTarefa()}
            />

         
        </ListArea>
      </ReactModal>
        </div>
        
    )
}

export default Task;