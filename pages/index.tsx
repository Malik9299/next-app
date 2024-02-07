import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <h1>Links</h1>
      <h2>React JS</h2>
      <Link
        href="https://legacy.reactjs.org/docs/getting-started.html"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://legacy.reactjs.org/docs/getting-started.html
      </Link>
      <br />
      <Link
        href="https://react.dev/learn"
        target="_blank"
        rel="noopener noreferrer"
      >
        https://react.dev/learn
      </Link>
      <br />
      <h2>nextjs</h2>
      <Link href="https://nextjs.org/">https://nextjs.org/</Link>
      <br />
      <h2>tailwindcss</h2>
      <Link href="https://tailwindcss.com">https://tailwindcss.com</Link>
      <br />
    </Fragment>
  );
}
Home.requireAuth = true;
