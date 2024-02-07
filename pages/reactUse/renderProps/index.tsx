import { FC, Fragment } from "react";

import { ParentRenderProps } from "@/molecules";

export default function renderProps() {
  return (
    <Fragment>
      <h2>Render Props: </h2>
      <ParentRenderProps />
    </Fragment>
  );
}
renderProps.requireAuth = true;
