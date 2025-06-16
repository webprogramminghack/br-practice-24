import React, { useEffect, useState } from "react";

const BatchedStateUpdates: React.FC = () => {
  const [totalScore, setTotalScore] = useState(0);
  const [percentage, setPercentage] = useState(0);

  const handleScoreUpdate = () => {
    setTotalScore((prev) => prev + 10); // Tambahkan 10 ke totalScore
  };

  useEffect(() => {
    setPercentage((totalScore / 100) * 100);
  }, [totalScore]);

  console.log("Component is rendering...");

  return (
    <div>
      <h1>Total Score: {totalScore}</h1>
      <h2>Percentage: {percentage}%</h2>
      <button onClick={handleScoreUpdate}>Increase Score</button>
    </div>
  );
};

export default BatchedStateUpdates;
