import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Body from "./components/Body";
import Card from "./components/Card";

const App = () => {
  return (
    <>
      <div className="app">
        <Navbar />
        <Body />
        <div className="cards">
          <Card title="CARD TITLE 1" description="CARD DESCRIPTION 1" />
          <Card title="CARD TITLE 2" description="CARD DESCRIPTION 2" />
          <Card title="CARD TITLE 3" description="CARD DESCRIPTION 3" />
          <Card title="CARD TITLE 4" description="CARD DESCRIPTION 4" />
          <Card title="CARD TITLE 5" description="CARD DESCRIPTION 5" />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
