import React from "react";
import Home from "./components/Home";
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import About from './components/About'
import Increase from './components/Increase'
import Decrease from './components/Decrease'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route element={<Home/>} path="/"/>
        <Route element={<About />} path="/about" />
        <Route element={<Increase />} path="/increase" />
        <Route element={<Decrease />} path="/decrease" />
      </Routes>
    </div>
  );
};

export default App;
