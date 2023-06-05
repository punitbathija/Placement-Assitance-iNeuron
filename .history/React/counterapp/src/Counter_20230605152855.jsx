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
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2>
      <button
        onClick={incrementCounter}
        style={{
          padding: "10px",
          margin: "10px",
          height: "30px",
          width: "200px",
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
          width: "200px",
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
