import { FC, Fragment } from "react";

import { ParentComponentMAP } from "@/molecules";

export default function methodsAsProps() {
  return (
    <Fragment>
      <h2>Methods As Props: </h2>
      <ParentComponentMAP />
    </Fragment>
  );
}
methodsAsProps.requireAuth = true;
