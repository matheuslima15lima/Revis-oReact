import React, { useState } from "react";
import ListArea from "../../Components/ListArea/ListArea";
import InputLarge from "../../Components/InputLarge/InputLarge";
import Button from "../../Components/Button/Button";

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

        
         <ListArea>
            <InputLarge
                 placeholder={placeholder}
                 type={type}
                 onChange={handleInputChange()}
            />

            <Button
                textButton="Confirmar Tarefa"
                type="submit"
                onClick={()=>handleConfirm()}
            />
         </ListArea>   

    )
}

export default Modal;