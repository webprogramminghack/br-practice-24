import React, { useEffect, useState } from "react";

const AsyncSetState: React.FC = () => {
  const [count, setCount] = useState<number>(0);
  const [log, setLog] = useState<string[]>([]);

  const handleClick = () => {
    setCount((count) => count + 1);
    setLog((prev) => [...prev, `Clicked. count is still : ${count}`]);
  };

  useEffect(() => {
    setLog((prev) => [...prev, `Count updated to : ${count}`]);
  }, [count]);

  return (
    <div>
      <h1>Count : {count}</h1>
      <button onClick={handleClick}>Tombol Tambah</button>
      <hr />
      <h2>Log : </h2>
      <ul>
        {log.map((entry, id) => (
          <li key={id}>{entry}</li>
        ))}
      </ul>
    </div>
  );
};

export default AsyncSetState;
