import React, { useState } from "react";
import ListArea from "../../Components/ListArea/ListArea";
import InputLarge from "../../Components/InputLarge/InputLarge";
import Button from "../../Components/Button/Button";
import ReactModal from 'react-modal'

const Modal =({
    placeholder="Procurar tarefa",
    type= "Text",
    visible,
    setShowModal,
    setTarefas,
    ...rest
})=>{
    const [inputValue, setInputValue] = useState('');
    const handleConfirm=()=>{
        if(inputValue.trim()){
            setTarefas([...Tarefas, inputValue]);// Atualiza o estado com uma nova tarefa
            setInputValue(''); 
            setShowModal(false);
        } 
    }

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    return(

        
        <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel='Atualizar Tarefa'
        style={customStyles}
      >
        <ListArea>
          

            
            <InputLarge
              placeholder={placeholder}
              type={type}
              value={txtTask}
              onChange={(e) => setTxtTask(e.target.value) }
            />

            <Button
              textButton="Confirmar Tarefa"
              type="button"
              onClick={() => addTarefa()}
            />

         
        </ListArea>
      </ReactModal>

    )
}

export default Modal;