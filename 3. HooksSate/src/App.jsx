import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import Body from "./components/Body";
import Card from "./components/Card";

const App = () => {
  const [cards, setCards] = useState([
    { title: "CARD TITLE 1", content: "Content for Card 1" },
    { title: "CARD TITLE 2", content: "Content for Card 2" },
    { title: "CARD TITLE 3", content: "Content for Card 3" },
    { title: "CARD TITLE 4", content: "Content for Card 4" },
    { title: "CARD TITLE 5", content: "Content for Card 5" },
  ]);

  const handleContentChange = (index, newContent) => {
    const updatedCards = [...cards];
    updatedCards[index].content = newContent;
    setCards(updatedCards);
  };

  return (
    <>
      <div className="app">
        <Navbar />
        <Body />
        <div className="cards">
          {cards.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              onContentChange={(newContent) =>
                handleContentChange(index, newContent)
              }
            />
          ))}
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
