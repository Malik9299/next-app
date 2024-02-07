import React, { useMemo } from "react";

const ComputationWithMemo = ({ number, otherNumber }) => {
  console.log(`otherNumber=> ${otherNumber}`);
  const computeFactorial = (num, otherNumber) => {
    console.log(`Computing factorial for ${num}...`);
    if (num <= 1) return 1;
    return num * computeFactorial(num - 1);
  };

  // Use useMemo to memoize the result of computeFactorial
  const factorial = useMemo(
    () => computeFactorial(number, otherNumber),
    [number]
  );

  return (
    <div>
      <p>Number: {number}</p>
      <p>Factorial: {factorial}</p>
    </div>
  );
};
export default ComputationWithMemo;
