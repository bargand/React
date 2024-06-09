import React, { useContext } from "react";
import { counterContext } from "../context/Context";

const Counter = () => {
  const { count, setCount } = useContext(counterContext);

  return (
    <div>
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
    </div>
  );
};

export default Counter;
