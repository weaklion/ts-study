import React, { useState, useEffect } from 'react';

const CounterTitle = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;

    return () => {
      document.title ="React TypeScript Hooks";
    }
  },[count]
  );

  return (
    <div className="counter">
      <p>you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
};

export default CounterTitle;
