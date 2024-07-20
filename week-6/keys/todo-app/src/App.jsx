import { useState } from "react";
function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Todo - 1",
      description: "Learn React as soon as possible",
    },
    {
      id: 2,
      title: "Todo - 2",
      description: "Learn Python as soon as possible",
    },
    {
      id: 3,
      title: "Todo - 3",
      description: "Learn DSA as soon as possible",
    },
  ]);
  function addTodo() {
    setTodos([...todos,{
      id : todos.length +1,
      title : todos.length + 1,
      description : Math.random()
    }])
  }

  return (
    <>
      <button onClick={addTodo} style={{ padding: 10, margin: 10 }}>
        Add Todo
      </button>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo}></Todo>
      ))}
    </>
  );
}

function Todo({ todo }) {
  return (
    <div>
      <h1>{todo.title}</h1>
      <p>{todo.description}</p>
    </div>
  );
}

export default App;
