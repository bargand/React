import React from "react";
import "./Body.css";
import { useState } from "react";

const Body = () => {
  const [value, setValue] = useState("Bargand");

  setTimeout(() => {
    setValue("Debargha Nandi");
  }, 1000);

  return (
    <>
      <div className="body">
        <h1>{value}</h1>
      </div>
    </>
  );
};

export default Body;
