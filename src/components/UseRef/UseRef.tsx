import React, { useState, useEffect, useRef } from "react";

const UseRefComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const sumbitCountRef = useRef(0);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    sumbitCountRef.current++;
    setMsg(`Halo, ${name}! (Form disubmit ${sumbitCountRef.current}x)`);
  };

  return (
    <div>
      <h1>useRef Demo</h1>
      <form onClick={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Masukkan nama..."
        />
        <button type="submit">Kirim</button>
      </form>
      <p>{msg}</p>
    </div>
  );
};

export default UseRefComponent;
