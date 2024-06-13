import React, { useContext,useEffect } from "react";
import { counterContext } from "../context/Context";
import { useNavigate } from "react-router-dom";

const Counter = () => {
  const { count, setCount } = useContext(counterContext);
  const navigate = useNavigate()

  useEffect(() => {
    if (count === 0) {
      navigate("./")
    }
    else if (count < 0) {
      navigate("./decrease")
    }
    else if (count > 0) {
      navigate("./increase")
    }
    else{
      alert("I Dont Understand")
    }
  }, [count, navigate])
  

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
