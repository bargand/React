import React, { useContext } from 'react';
import { counterContext } from '../context/Context';

const Increase = () => {
  const { count, setCount } = useContext(counterContext);

  return (
    <div>
      <h2>The Increasing Value Is {count}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>
    </div>
  );
};

export default Increase;
