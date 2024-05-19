import React, { useState } from "react";
import "./Card.css";

const Card = ({ title, content, onContentChange }) => {
  return (
    <div className="card" style={{ border: "1px solid #e3e3e3" }}>
      <img
        src="https://img.freepik.com/free-vector/laptop-with-program-code-isometric-icon-software-development-programming-applications-dark-neon_39422-971.jpg"
        alt=""
        style={{ width: "200px" }}
      />
      <div className="title">{title}</div>
      <div className="content">{content}</div>
      <button
        className="btn"
        onClick={() => {
          onContentChange("New Content");
        }}
      >
        Change Content
      </button>
    </div>
  );
};

export default Card;
