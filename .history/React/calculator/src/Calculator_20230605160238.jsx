import React from "react";
import "./index.css";

const Calculator = () => {
  return (
    <div>
      <div className="screen"></div>
      <div className="numpad">
        <div className="firstRow">
          <button>7</button>
          <button>8</button>
          <button>9</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
