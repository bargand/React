import React,{useState} from 'react'
import "./App.css"
import Navbar from './components/Navbar'

const App = () => {
  const [count, setCount] = useState(0)
  return (
    <>
    <Navbar count={count}/>
    <div className='app'>
      <button onClick={()=>{setCount(count+1)}}>{count} Click</button>
    </div>
    </>
  )
}

export default App
