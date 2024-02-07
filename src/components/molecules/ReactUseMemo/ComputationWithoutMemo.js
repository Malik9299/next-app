import React from "react";

const ComputationWithoutMemo = ({ number, otherNumber }) => {
  console.log(`otherNumber=> ${otherNumber}`);
  const computeFactorial = (num, otherNumber) => {
    console.log(`Computing factorial for ${num}...`);
    if (num <= 1) return 1;
    return num * computeFactorial(num - 1);
  };

  const factorial = computeFactorial(number, otherNumber);

  return (
    <div>
      <p>Number: {number}</p>
      <p>Factorial: {factorial}</p>
    </div>
  );
};
export default ComputationWithoutMemo;
