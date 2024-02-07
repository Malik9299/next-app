import { FC, Fragment } from "react";

import { ParentRenderPropsFC } from "@/molecules";

export default function renderPropsFC() {
  return (
    <Fragment>
      <h2>Render Props in Functional Components: </h2>
      <ParentRenderPropsFC />
    </Fragment>
  );
}
renderPropsFC.requireAuth = true;
