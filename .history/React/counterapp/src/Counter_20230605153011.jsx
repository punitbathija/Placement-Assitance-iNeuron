import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  const decrementCounter = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
  return (
    <div style={{ border: "1px solid black" }}>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button
        onClick={incrementCounter}
        style={{
          padding: "10px",
          margin: "10px",
          height: "30px",
          width: "100px",
          background: "orange",
        }}
      >
        +
      </button>
      <button
        onClick={decrementCounter}
        style={{
          padding: "10px",
          margin: "10px",
          height: "30px",
          width: "100px",
          background: "orange",
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
