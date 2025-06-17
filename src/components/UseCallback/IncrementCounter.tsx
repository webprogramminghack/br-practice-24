import React, { useState } from "react";

const ParentComponent: React.FC = () => {
  const [count, setCount] = useState(0);

  const incrementCounter = () => {
    setCount((prev) => prev + 1);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Current Count : {count}</p>
      <ChildComponent onIncrement={incrementCounter} />
    </div>
  );
};

type ChildComponentProps = {
  onIncrement: () => void;
};

const ChildComponent: React.FC<ChildComponentProps> = ({ onIncrement }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onIncrement}>Increment Parent Counter</button>
    </div>
  );
};

export default ParentComponent;
