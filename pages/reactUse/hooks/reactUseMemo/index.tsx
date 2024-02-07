import { FC, Fragment } from "react";

import { ParentUseMemo } from "@/molecules";

export default function reactUseMemo() {
  return (
    <Fragment>
      <h2>useMemo</h2>
      <ParentUseMemo />
    </Fragment>
  );
}
reactUseMemo.requireAuth = true;
