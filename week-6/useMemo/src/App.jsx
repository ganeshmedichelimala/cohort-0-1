import { useState, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const count = useMemo(() => {
    console.log("memo got logged");
    let sum = 0;
    const numberValue = Number(inputValue);
    console.log("Calculating sum for inputValue:", numberValue);
    if (!isNaN(numberValue)) {
      for (let i = 1; i <= numberValue; i++) {
        sum += i;
      }
    }
    return sum;
  }, [inputValue]);

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          const value = e.target.value;
          const numberValue = Number(value);
          console.log("Input value changed:", value, "Parsed number:", numberValue);
          setInputValue(numberValue);
        }}
        placeholder="Enter a number for sum"
      />
      <h4>
        Sum from 1 to {inputValue} is {count}
      </h4>
      <button onClick={() => {
        console.log("Counter incremented:", counter + 1);
        setCounter(counter + 1);
      }}>
        Counter: {counter}
      </button>
    </>
  );
}

export default App;
