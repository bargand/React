import React from "react";

const Button = ({ Click }) => {
  return (
    <div>
      <button className="btn" onClick={Click}>
        Change Name
      </button>
    </div>
  );
};

export default Button;
