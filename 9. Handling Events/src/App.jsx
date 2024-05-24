import { useState } from 'react'
import './App.css'

function App() {

  let onClick=()=>{
    console.log("Hi I Am On Click Button")
  }
  let keyDown=()=>{
    console.log("you pushes a keyboard key")
  }
  let Loded=()=>{
    console.log('you browser is load')
  }

  return (
    <>
    <div onLoad={Loded}>
      <button onClick={onClick}>OnClick Events</button>
      <input type="text" name="hi" onKeyDown={keyDown}/>
    </div>
    </>
  )
}

export default App
