import { FC, Fragment } from "react";

import { ParentMemo } from "@/molecules";

export default function reactMemo() {
  return (
    <Fragment>
      <h2>React.memo: </h2>
      <ParentMemo />
    </Fragment>
  );
}
reactMemo.requireAuth = true;
