import React, { useState, useEffect, useRef } from "react";

const App = () => {
  const [value, setValue] = useState(0);

  const a = useRef(0)

  useEffect(() => {
    a.current = a.current + 1
    console.log(`Re-rendering....${a.current}`);
  });

  return (
    <div className="app">
      <button
        onClick={() => {
          setValue(value + 1);
        }}
      >
        Count Is {value}{" "}
      </button>
    </div>
  );
};

export default App;
