import React, { useState } from "react";
import { counterContext } from "../context/Context";
import Increase from "./Increase";

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <counterContext.Provider value={{count}}>
        <h1>{count}</h1>
        <div className="btn">
          <button
            onClick={() => {
              setCount(count + 1);
            }}
          >
            Increase
          </button>
          <button
            onClick={() => {
              setCount(count - 1);
            }}
          >
            Decrease
          </button>
        </div>
      </counterContext.Provider>
    </div>
  );
};

export default Counter;
