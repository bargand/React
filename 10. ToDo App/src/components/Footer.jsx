import React from "react";
import "./Footer.css";

const Footer = () => {
  const d = new Date();
  let year = d.getFullYear();
  return (
    <>
      <div className="footer">
        <div className="brand">
          <h2>BARGAND</h2>
        </div>
        <div className="copyright">Copyright {year}, All Rights Reserved.</div>
      </div>
    </>
  );
};

export default Footer;
