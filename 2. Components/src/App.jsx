import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css"
import Body from "./components/Body";

const App = () => {
  return (
    <>
    <div className="app">
      <Navbar/>
      <Body/>
      <Footer/>
    </div>
    </>
  );
};

export default App;
