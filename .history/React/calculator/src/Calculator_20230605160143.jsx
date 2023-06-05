import React from "react";
import "./index.css";

const Calculator = () => {
  return (
    <div>
      <div className="screen"></div>
      <div className="numpad">
        <div className="firstRow">
          <button>C</button>
          <button>%</button>
          <button><</button>


        </div>
      </div>
    </div>
  );
};

export default Calculator;
