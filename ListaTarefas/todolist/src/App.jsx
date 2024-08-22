import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from '../Components/Main/Main'
import ListArea from '../Components/ListArea/ListArea'
import Title from '../Components/Title/Title'
import Input from '../Components/Input/Input'
import Modal from './Modal/Modal'
import Button from '../Components/Button/Button'
import Task from '../Components/Tasks/Task'

import React from 'react'
import ReactModal from 'react-modal'
import InputLarge from '../Components/InputLarge/InputLarge'



// Código necessário para os recursos de acessibilidade
ReactModal.setAppElement('#root');



const getCurrentDate = () => {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  return new Date().toLocaleDateString('pt-BR', options);
};



function App({
  placeholder = "Procurar tarefa",
  type = "Text"
}) {





  const customStyles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0, 0, 0, 0.75)'
    },
    content: {
      display: 'flex',
      alignItems:'center', 
      justifyContent:'center',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '700px',
      height: '500px',
      border: '1px solid #ccc',
      background: '#fff',
      // overflow: 'auto',
      // WebkitOverflowScrolling: 'touch',
      borderRadius: '4px',
      outline: 'none',
      padding: '20px'
    }
  };




  // Hook que demonstra se a modal está aberta ou não
  const [modalIsOpen, setIsOpen] = useState(false);




  // Função que abre a modal
  function abrirModal() {
    setIsOpen(true);
  }


  // Função que fecha a modal
  function fecharModal() {
    setIsOpen(false);
  }

  const [tarefas, setTarefas] = useState([
    {
      id: 1,
      text: "Criar funcionalidade de cadastro de usuario",
      IsCompleted: false
    },
    {
      id: 2,
      text: "Criar listagem de usuários",
      IsCompleted: false
    },
    {
      id: 3,
      text: "Criar funcionalidade de deletar usuários",
      IsCompleted: false
    },



  ]);

  // const tarefasLista = [
  //   "Fazer projeto",
  //   "Testar projeto",
  //   "Concluir projeto"
  // ];
  // const [count, setCount] = useState(0)
  // const DataAtual = Date.now();

  const [showModal, setShowModal] = useState(false);


  const [value, setValue] = useState("");
  const handleSubmit =(e)=>{
    e.preventDefault();
    if(!value) return;

  }


    const addTarefa=(text)=>{
      //variavel que mantem os items na lista e adiciona um novo
      const newTarefas= [...tarefas,{
        id: Math.floor(Math.random() * 10000),
        text,
        IsCompleted: false,
      },
    ];

      setTarefas(newTarefas);
    }

  const completarTarefa = (id) => {
    const newTarefas = [...tarefas]

    newTarefas.map((tarefa) => tarefa.id === id ? tarefa.IsCompleted = !tarefa.IsCompleted : tarefa);
    setTarefas(newTarefas);
  };

  const removerTarefa = (id) => {
    //cria uma variavell com todas as tarefas
    const newTarefas = [...tarefas]

    //filtro para retornar os ids diferentes do id selecionado
    const filteredTarefas = newTarefas.filter((tarefa =>
      tarefa.id !== id ? tarefa : null
    ));
    setTarefas(filteredTarefas);
  }
  return (
    <>
      <Main>
        <ListArea>
          <Title>
            {getCurrentDate()}
          </Title>
          <Input
            placeholder={placeholder}
            type={type}
          >
          </Input>

          {tarefas.map((tarefa) => (

            <Task key={tarefa.id} tarefa={tarefa} removerTarefa={removerTarefa} completarTarefa={completarTarefa} />
          ))}


        </ListArea>
        {/* <Button
        type="Button"
        textButton="Nova tarefa"
      /> */}
        <Button

          onClick={() => abrirModal()}
          type="button"
          textButton="Nova tarefa"
        ></Button>
      </Main>

      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={fecharModal}
        contentLabel='Criar Tarefa'
        style={customStyles}
      >
        <ListArea>
          <InputLarge
            placeholder={placeholder}
            type={type}
            // onChange={handleInputChange()}
          />

          <Button
            textButton="Confirmar Tarefa"
            type="submit"
            onClick={() => fecharModal()}
          />
        </ListArea>
      </ReactModal>
    </>
  )
}

export default App
