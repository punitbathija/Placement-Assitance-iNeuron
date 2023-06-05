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
          <button>/</button>
        </div>
        <div className="secondRow">
          <button>4</button>
          <button>5</button>
          <button>6</button>
          <button>X</button>
        </div>
        <div className="thirdRow">
          <button>3</button>
          <button>2</button>
          <button>1</button>
          <button>+</button>
        </div>
        <div className="fourthRow">
          <button>0</button>
          <button>.</button>
          <button>=</button>
          <button>-</button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
