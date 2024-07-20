import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(0);  
  const [todos, setTodos] = useState([])
  useEffect(()=>{
    const fetchTodos = async ()=>{
      const response = await fetch("https://sum-server.100xdevs.com/todos")
      const data = await response.json()
      setTodos(data.todos)
    }
    fetchTodos();
  },[counter])


  return (
    <>
      <button onClick={() => {
        setCounter(counter + 1);
      }}>Get Todos</button>
      <ul>
        {todos.map(todo=>(
          <li key={todo.id}>
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </li>
        ))}
      </ul>
    </>
    
  );
}

export default App;