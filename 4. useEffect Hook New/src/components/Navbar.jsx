import React, { useState, useEffect } from "react";

const Navbar = (props) => {
  const [Name, setName] = useState("Debargha");

  useEffect(() => {
    alert("Name is change")
  }, [Name]);

  return (
    <>
      <div>I am Navbar of {props.name} website</div>
      <h1
        onClick={
          (() => {
            setName("debu");
          })
        }
      >
        I am {Name}
      </h1>
    </>
  );
};

export default Navbar;

