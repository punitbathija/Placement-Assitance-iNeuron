import React from "react";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Counter</h1>
    </div>
  );
};

export default Counter;
