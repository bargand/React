import "./App.css";
import { useState } from "react";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="App">
        <div className="container">{value}</div>
        <button className="btn" id="btn1" onClick={()=>{
          setValue(value+1)
        }}>Increase Here</button>
        <button className="btn" id="btn2" onClick={()=>{
          setValue(value-1)
        }}>Increase Here</button>
      </div>
    </>
  );
}

export default App;
