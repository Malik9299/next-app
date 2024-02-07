import React, { FC, Fragment } from "react";

const MemoComponents: FC<any> = ({ name }) => {
  console.log("Rendering Memo Component");

  return (
    <Fragment>
      MemoComponents
      <div>{name}</div>
    </Fragment>
  );
};

export default React.memo(MemoComponents);
