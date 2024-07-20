import { useState } from "react";
import React   from "react"
function App() {
  const [title, setTitle] = useState("My name is Ganesh");
  function updateTitle() {
    setTitle("My name is " + Math.random());
  }

  return (
    <div>
      <button onClick={updateTitle}>Update Title</button>
      <Header title={title}></Header>
      <Header title="My name is Medichelimala"></Header>
    </div>
  );
}

const Header = React.memo(function Header({ title }) {
  return <div>{title}</div>;
});

export default App;
