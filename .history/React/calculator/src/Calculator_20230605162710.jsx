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
          <button className="btn" onClick={() => handleButtonClick("7")}>
            7
          </button>
          <button className="btn" onClick={() => handleButtonClick("8")}>
            8
          </button>
          <button className="btn" onClick={() => handleButtonClick("9")}>
            9
          </button>
          <button className="btn" onClick={() => handleButtonClick("/")}>
            /
          </button>
        </div>
        <div className="secondRow">
          <button className="btn" onClick={() => handleButtonClick("4")}>
            4
          </button>
          <button className="btn " onClick={() => handleButtonClick("5")}>
            5
          </button>
          <button className="btn" onClick={() => handleButtonClick("6")}>
            6
          </button>
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
