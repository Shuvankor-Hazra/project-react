import React from "react";
import "./Btn.css";

const Btn = (props) => {
  return (
    <div className="btn-area">
      <button>{props.btnName}</button>
    </div>
  );
};

export default Btn;
