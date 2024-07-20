import { useState } from "react";

function App() {
  const [todos, setCount] = useState([
    {
      title: "todo-1",
      description: "go to gym from 7-9",
      completed: false,
    },
    {
      title: "todo-2",
      description: "learn Cohort-1 from 9-11",
      completed: true,
    },
    {
      title: "todo-3",
      description: "erripuku",
      completed: true,
    },
    {},
  ]);

  return (
    <>
      <div>
        {todos.map((todo) => {
          return <Todo title={todo.title} description={todo.description} />;
        })}
      </div>
    </>
  );
}

function Todo(props) {
  return (
    <div>
      <h1>{props.title}</h1>
      <h2>{props.description}</h2>
    </div>
  );
}

export default App;
