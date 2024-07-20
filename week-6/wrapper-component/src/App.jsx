import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
    <CardWrapper child={"hi from 1st Card"}>
      
    </CardWrapper>
    <CardWrapper child={"Hi there from second Card"}>
      
    </CardWrapper>
    </>
  )
}
// function TextComponent(){
//   return(
//     <>
//       <div>
//         LOGO
//       </div>
//     </>
//   )
// }

// function TextComponent2(){
//   return(
//     <>
//       <div>
//         <h1>Hi This is Title</h1>
//         <h3>This is title description</h3>
//         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia quos officia obcaecati. Fuga, debitis vel! Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae necessitatibus fugit est ipsum deleniti eaque eum incidunt nihil amet praesentium. Explicabo quibusdam molestiae voluptate animi ipsa! Enim vero ipsum assumenda!
//         </p>
//       </div>
//     </>
//   )
// }



function CardWrapper({child}){
  return (
    <>
      <div style={{border:"2px solid black"}}>
        {child}
      </div>
    </>
  )
}

export default App
