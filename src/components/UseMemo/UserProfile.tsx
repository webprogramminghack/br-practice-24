import React, { useState, useEffect, useMemo } from "react";

type UserProfileProps = {
  user: { name: string; age: number };
};

const UserProfile: React.FC<UserProfileProps> = ({ user }) => {
  useEffect(() => {
    console.log("Fetching user data from the server....");
  }, [user]);
  return (
    <div>
      <h2>User Profile</h2>
      <p>Name : {user.name}</p>
      <p>Age : {user.age}</p>
    </div>
  );
};

export const WithoutUseMemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const user = { name: "ucup", age: 30 };

  return (
    <div>
      <h1>Without useMemo Example</h1>
      <UserProfile user={user} />
      <p>count : {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};

export const WithUseMemo: React.FC = () => {
  const [count, setCount] = useState(0);
  const user = useMemo(() => ({ name: "ucup", age: 30 }), []);

  return (
    <div>
      <h1>With useMemo Example</h1>
      <UserProfile user={user} />
      <p>Count : {count}</p>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
    </div>
  );
};
