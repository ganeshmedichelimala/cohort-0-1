import { useEffect, useState } from 'react'
import axios from 'axios'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
 const [todos,setTodos] = useState([])
 useEffect(()=>{
   axios.get("https://sum-server.100xdevs.com/todos")
  .then(function(response){
    setTodos(response.data.todos)
  })
 },[])

  return (
    <>
     {todos.map(todo => <Todo key={todo.id}  title={todo.title} description = {todo.description} />)}
    </>
  )
}

function Todo(props){
  return (
    <div>
      <h2>{props.title}</h2>
      <h4>{props.description}</h4>
    </div>
  )
}

export default App
