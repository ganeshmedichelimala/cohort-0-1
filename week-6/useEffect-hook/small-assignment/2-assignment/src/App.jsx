import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from "axios"

function App() {
  const [selectedId, setSelectedid] = useState(1)

  return (
    <>
      <button onClick={function(){
        setSelectedid(1)
      }}>1</button>
       <button onClick={function(){
        setSelectedid(2)
      }}>2</button>
       <button onClick={function(){
        setSelectedid(3)
      }}>3</button>
       <button onClick={function(){
        setSelectedid(4)
      }}>4</button>

      <Todo id={selectedId} />
    </>
  )
}

function Todo({ id }) {
  const [todo, setTodo] = useState({})

  useEffect(() => {
    fetch(`https://sum-server.100xdevs.com/todo?id=${id}`)
      .then(async function(res) {
        const json = await res.json();
        setTodo(json.todo);
      })
  }, [id])

  return (
    <div>
      <h1>{todo.title}</h1>
      <h4>{todo.description}</h4>
    </div>
  )
}

export default App
