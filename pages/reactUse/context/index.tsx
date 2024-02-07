import { FC, Fragment } from "react";

import { ParentContext } from "@/molecules";

export default function contextPage() {
  return (
    <Fragment>
      <div>
        <a
          href="https://www.youtube.com/watch?v=j3j8St50fNY&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3&index=38"
          target="_blank"
        >
          Tutorial
        </a>
      </div>
      <br />

      <h2>Context</h2>
      <ParentContext />
    </Fragment>
  );
}
contextPage.requireAuth = true;
