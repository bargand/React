import React, { useState } from "react";
import Button from "./components/Button";

const App = () => {
  const [content, setContent] = useState("Riya Nandi");
  return (
    <div>
      <h1>{content}</h1>
      <Button
        Click={() => {
          setContent("Riya Nandi Pandit");
        }}
      />
    </div>
  );
};

export default App;
