import { useState, useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  //Method 1
  //It will run in every render
  useEffect(() => {
    console.log("I Will Run In Every Render");
  });

  //Method 2
  //It Will Run One Time When Pahe Is Render
  useEffect(() => {
    console.log('It Will Run One Time When Page Is Render')
  }, [])

  //Method 3
  //It Will Run When Only Value Is Change That Provides in his array
  useEffect(() => {
    console.log('Count Value Is Changed')
  }, [count]) 

  return (
    <>
    <Navbar color={"RED"}/>
      <h1>useEffect Hook</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
