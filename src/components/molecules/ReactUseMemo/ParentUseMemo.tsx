import React, { FC, Fragment, useState, useMemo } from "react";
import ComputationWithoutMemo from "./ComputationWithoutMemo";
import ComputationWithMemo from "./ComputationWithMemo";

// import MemoComponents from "./MemoComponents";
const defination = `const cachedValue = useMemo(calculateValue, dependencies)`;
const definationOne = `The React useMemo Hook returns a memoized value.
Think of memoization as caching a value so that it does not need to be recalculated.
`;
const ParentUseMemo: FC<any> = () => {
  const [inputNumber, setInputNumber] = useState(5);
  const [otherNumber, setOtherNumber] = useState(0);

  return (
    <Fragment>
      <a
        href="https://react.dev/reference/react/useMemo#usememo"
        target="_balnk"
        rel=""
      >
        Document
      </a>
      <br />
      useMemo is a React Hook that lets you cache the result of a calculation
      between re-renders.
      <pre dangerouslySetInnerHTML={{ __html: defination }} />
      <pre dangerouslySetInnerHTML={{ __html: definationOne }} />
      {/* <div>ComputationWithoutMemo</div>
      <div>
        <ComputationWithoutMemo
          number={inputNumber}
          otherNumber={otherNumber}
        />

        <button onClick={() => setInputNumber((prevNumber) => prevNumber + 1)}>
          Increment
        </button>
        <button onClick={() => setOtherNumber((prevNumber) => prevNumber + 1)}>
          otherNumber Button
        </button>
      </div> */}
      <div>ComputationWithMemo</div>
      <div>
        <ComputationWithMemo number={inputNumber} otherNumber={otherNumber} />

        <button onClick={() => setInputNumber((prevNumber) => prevNumber + 1)}>
          Increment
        </button>
        <button onClick={() => setOtherNumber((prevNumber) => prevNumber + 1)}>
          otherNumber Button
        </button>
      </div>
    </Fragment>
  );
};
export default ParentUseMemo;
