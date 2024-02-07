import { FC, Fragment } from "react";

import { ParentComponentPure } from "@/molecules";
import { post } from "@/types";

interface Blogs {
  blogs: post[];
}

export default function reactPureComponents() {
  return (
    <Fragment>
      <h2>React Pure Components: </h2>
      <ParentComponentPure />
    </Fragment>
  );
}
reactPureComponents.requireAuth = true;
