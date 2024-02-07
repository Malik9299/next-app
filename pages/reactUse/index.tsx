import { FC, Fragment } from "react";

import Link from "next/link";

// import { manageReactUse } from "@/templates";
export default function reactUse() {
  return (
    <Fragment>
      <h2>React Use</h2>
      <br />
      <ul>
        <li>ECMAScript</li>
        <li>
          <strong>Methods as Props: </strong>How child component communicate
          with parent component
        </li>
        <li>React.memo</li>

        <li>
          <strong>Component Mounting Lifecycle Methods: </strong>constructor,
          static getDerivedStateFromProps, render and componentDidMount
        </li>
        <li>Pure components</li>
        <li>Components Lifecycle Methods</li>
        <li>Higher Order Components</li>
      </ul>

      <strong>ECMAScript: </strong>
      <Link href="/reactUse/esScripting">link: /reactUse/esScripting</Link>
      <br />

      <strong>Methods As Props: </strong>
      <Link href="/reactUse/methodsAsProps">
        link: /reactUse/methodsAsProps
      </Link>
      <br />

      <strong>React.memo: </strong>
      <Link href="/reactUse/reactMemo">link: /reactUse/reactMemo</Link>
      <br />
      <strong>useMemo: </strong>
      <Link href="/reactUse/reactUseMemo">link: /reactUse/reactUseMemo</Link>
      <br />

      <strong>React Pure Components: </strong>
      <Link href="/reactUse/reactPureComponents">
        link: /reactUse/reactPureComponents
      </Link>
      <br />

      <strong>Components Lifecycle Methods: </strong>
      <Link href="/reactUse/lifecycleMethods">
        link: /reactUse/lifecycleMethods
      </Link>
      <br />
      <strong>Higher Order Components </strong>
      <Link href="/reactUse/higherOrderComponents">
        link: /reactUse/higherOrderComponents
      </Link>
      <br />
      <strong>Render Props using Class Components </strong>
      <Link href="/reactUse/renderProps">link: /reactUse/renderProps</Link>
      <br />

      <strong>Render Props using Functional Components </strong>
      <Link href="/reactUse/renderPropsFC">link: /reactUse/renderPropsFC</Link>
      <br />
      <strong>Context </strong>
      <Link href="/reactUse/context">link: /reactUse/context</Link>
      <br />
    </Fragment>
  );
}
reactUse.requireAuth = true;
