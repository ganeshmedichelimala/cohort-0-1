import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [inputValue, setInputvalue] = useState(1)
  let sum = 0
  for (let i = 1;i <= inputValue;i++){
    sum += i
  }


  return (
   <>

   <input type="text" onChange={function(e){
    setInputvalue(e.target.value)
   }} placeholder='Enter a number for sum'/>
   <h4>sum from 1 to {inputValue} is {sum}</h4>
    <button onClick={function(){
      setCount(count+1)
    }}>counter : {count}</button>
   </>
  )
}

export default App
