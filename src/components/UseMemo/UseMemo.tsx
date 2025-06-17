import React, { useState, useMemo } from "react";

const factorial = (n: number): number => {
  console.log("Calculate factorial...");
  if (n <= 0) return 1;
  return n * factorial(n - 1);
};

const UseMemoExample: React.FC = () => {
  const [number, setNumber] = useState(5);
  const [text, setText] = useState("");

  const memoizedFactorial = useMemo(() => factorial(number), [number]);

  return (
    <div>
      <h1>useMemo Example</h1>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <p>
        Factorial of {number} is : {memoizedFactorial}
      </p>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type Something...."
      />
      <p>{text}</p>
    </div>
  );
};

export default UseMemoExample;
