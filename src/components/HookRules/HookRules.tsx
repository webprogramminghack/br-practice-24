import React, { useState, useEffect, useCallback } from "react";

const ConditionalHookExample: React.FC = () => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("");

  if (count > 5) {
    // ❌ Salah: Memanggil hook di dalam kondisi
    setMessage("Count is greater than 5!");
  }

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
    </div>
  );
};

export default ConditionalHookExample;
