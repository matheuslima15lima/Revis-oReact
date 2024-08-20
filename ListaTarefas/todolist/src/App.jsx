import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Main from '../Components/Main/Main'
import ListArea from '../Components/ListArea/ListArea'
import Title from '../Components/Title/Title'
import Input from '../Components/Input/Input'
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
function App({
  placeholder="Procurar tarefa",
  type= "Text"
}) {
  const [count, setCount] = useState(0)
  const DataAtual = Date.now();
  return (
    <>
      <Main>
       <ListArea>
      <Title>
       Terça-feira, 24 de julho 
      </Title>
        <Input
          placeholder={placeholder}
          type={type}
        ></Input>

       </ListArea>
      </Main>

    </>
  )
}

export default App
