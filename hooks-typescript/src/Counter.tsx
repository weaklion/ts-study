import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <p>you clicked {count} times </p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  );
};

export default Counter;