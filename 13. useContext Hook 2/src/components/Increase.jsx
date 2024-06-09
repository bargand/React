import React, { useContext } from 'react';
import { counterContext } from '../context/Context';

const Increase = () => {
  const { count } = useContext(counterContext);

  return (
    <div>
      <h2>The Increasing Value Is {count}</h2>
    </div>
  );
};

export default Increase;
