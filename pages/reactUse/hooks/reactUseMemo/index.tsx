import { FC, Fragment } from "react";

import { ParentUseMemo } from "@/molecules";

export default function reactUseMemo() {
  return (
    <Fragment>
      <h2>React.memo: </h2>
      <ParentUseMemo />
    </Fragment>
  );
}
reactUseMemo.requireAuth = true;
