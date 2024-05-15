import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [value, setValue] = useState(0);
  return (
    <>
      <div className="App">
        <Navbar MyName = "Bargand"/>
        <div className="container">{value}</div>
        <button className="btn" id="btn1" onClick={()=>{
          setValue(value+1)
        }}>Increase Here</button>
        <button className="btn" id="btn2" onClick={()=>{
          setValue(value-1)
        }}>Increase Here</button>
        <Footer/>
      </div>
    </>
  );
}

export default App;
