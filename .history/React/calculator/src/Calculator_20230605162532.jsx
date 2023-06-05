import React, { useState } from "react";
import "./index.css";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
    } catch (error) {
      setResult("Error");
    }
  };

  const handleButtonClick = (value) => {
    setInput((prevInput) => prevInput + value);
  };

  return (
    <div className="body">
      <input
        type="text"
        className="screen"
        value={input}
        onChange={handleInputChange}
      />
      <div className="numpad">
        <div className="firstRow">
          <button className="btn">7</button>
          <button className="btn">8</button>
          <button className="btn">9</button>
          <button className="btn">/</button>
        </div>
        <div className="secondRow">
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn">X</button>
        </div>
        <div className="thirdRow">
          <button className="btn">3</button>
          <button className="btn">2</button>
          <button className="btn">1</button>
          <button className="btn">+</button>
        </div>
        <div className="fourthRow">
          <button className="btn">0</button>
          <button className="btn">.</button>
          <button className="btn equal">=</button>
          <button className="btn">-</button>
        </div>
        <h1>| |....CASIO....| |</h1>
      </div>
    </div>
  );
};

export default Calculator;
