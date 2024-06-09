import React, { useState } from "react";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Increase from './components/Increase'
import Decrease from './components/Decrease'
import { counterContext } from "./context/Context";
import Counter from './components/Counter';

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <counterContext.Provider value={{ count, setCount }}>
      <div>
        <Navbar />
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<About />} path="/about" />
          <Route element={<Increase />} path="/increase" />
          <Route element={<Decrease />} path="/decrease" />
          <Route element={<Counter />} path="/counter" />
        </Routes>
      </div>
    </counterContext.Provider>
  );
};

export default App;
