import { FC, Fragment } from "react";

import {
  MountingLifecycleMethods,
  UpdatingLifecycleMethods,
} from "@/molecules";

export default function lifecycleMethods() {
  return (
    <Fragment>
      <h2>React Pure Components: </h2>
      <h3>Component Mounting Lifecycle Methods: </h3>
      <MountingLifecycleMethods name="ABC" />
      <h3>Component Updating Lifecycle Methods: </h3>
      <UpdatingLifecycleMethods name="ABC" />
    </Fragment>
  );
}
lifecycleMethods.requireAuth = true;
