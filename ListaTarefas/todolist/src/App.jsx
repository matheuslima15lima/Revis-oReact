import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from '../Components/Main/Main'
import ListArea from '../Components/ListArea/ListArea'
import Title from '../Components/Title/Title'
import Input from '../Components/Input/Input'
import Modal from './Modal/Modal'
import Button from '../Components/Button/Button'

// import './App.css'
// import '../Styles/Style.css' 

// const date = new Date();
// function formatDate(date, format) {
//   const map = {
//       mm: date.getMonth() + 1,
//       dd: date.getDate(),
//       aa: date.getFullYear().toString().slice(-2),
//       aaaa: date.getFullYear()
//   }

//   return format.replace(/mm|dd|aa|aaaa/gi, matched => map[matched])
// }


const getCurrentDate = () => {
  const options = { weekday: 'long', day: 'numeric', month: 'long' };
  return new Date().toLocaleDateString('pt-BR', options);
};



function App({
  placeholder="Procurar tarefa",
  type= "Text"
}) {

  const [tarefas, setTarefas ] = useState(["Fazer projeto","Começar a execução do projeto", "Testar Projeto"]);

  // const tarefasLista = [
  //   "Fazer projeto",
  //   "Testar projeto",
  //   "Concluir projeto"
  // ];

  const [showModal, setShowModal] = useState(false);
  // const [count, setCount] = useState(0)
  // const DataAtual = Date.now();
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
