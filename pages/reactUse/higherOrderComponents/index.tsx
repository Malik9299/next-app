import { FC, Fragment } from "react";

import { ParentHigherOrder } from "@/molecules";

export default function higherOrderComponents() {
  return (
    <Fragment>
      <h2>React Higher Order Components(HOC): </h2>
      <ParentHigherOrder />
    </Fragment>
  );
}
higherOrderComponents.requireAuth = true;
