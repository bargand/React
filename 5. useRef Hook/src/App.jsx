import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  // const [back, setBack] = useState("red")

  const ref = useRef()

  useEffect(() => {
    console.log(`Re-rendering....`);
  });

  return (
    <div className="app">
      <button
        ref={ref}
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Count Is {value}{" "}
      </button>
      <button onClick={()=>{ref.current.style.display = "none"}}>Change The Background To</button>
    </div>
  );
};

export default App;
