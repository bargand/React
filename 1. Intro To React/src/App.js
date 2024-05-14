import './App.css';
import { useState } from 'react';
import "./App.css"

function App() {
  const [value, setValue] = useState(0)
  return (
    <>
    <div className="App">
      <div className="container">
        {value}
      </div>
      <button className='btn' onClick={()=>{
        setValue(value + 1)
      }}>Increase Here</button>

      <button className='btn' onClick={()=>{
        setValue(value - 1)
      }}>Decrease Here</button>
    </div>
    </>
  );
}

export default App;
