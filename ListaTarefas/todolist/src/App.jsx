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



const getCurrentDate = () => {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  return new Date().toLocaleDateString('pt-BR', options);
};



function App({
  placeholder="Procurar tarefa",
  type= "Text"
}) {

  const [tarefas, setTarefas ] = useState([
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

  const completarTarefa = (id)=>{
    const newTarefas = [...tarefas]

    newTarefas.map((tarefa)=> tarefa.id === id ? tarefa.IsCompleted = !tarefa.IsCompleted : tarefa);
    setTarefas(newTarefas);
  };

  const removerTarefa=(id)=>{
    //cria uma variavell com todas as tarefas
    const newTarefas = [...tarefas]

    //filtro para retornar os ids diferentes do id selecionado
    const filteredTarefas = newTarefas.filter((tarefa=>
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

        { tarefas.map((tarefa)=>(
          
          <Task key={tarefa.id} tarefa={tarefa} removerTarefa={removerTarefa} completarTarefa={completarTarefa}/>
        ))}


       </ListArea>
      {/* <Button
        type="Button"
        textButton="Nova tarefa"
      /> */}
      <Button 
        type="submit"
        textButton="Nova tarefa"
      ></Button>
      </Main>
{/* 
      <Modal
          visible={showModal}
          setShowModal={setShowModal}
          setTarefas={setTarefas}
      /> */}
    </>
  )
}

export default App
