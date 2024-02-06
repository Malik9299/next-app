import Link from "next/link";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <div>working...</div>
      <div>Running Pages Index Page</div>
      <Link href="/user">http://localhost:15000/user</Link>
      <br />
      <h2>Use of getStaticPaths</h2>
      <h3>fallback: false</h3>
      <Link href="/posts">link: http://localhost:15000/posts</Link>
      <br />
      <h3>fallback: true</h3>
      <Link href="/blogs">link: http://localhost:15000/blogs</Link>
      <br />
      <h3>fallback: default</h3>
      <Link href="/data">link: http://localhost:15000/data</Link>
      <br />
      <h2>React Use</h2>
      <Link href="/reactUse">link: http://localhost:15000/reactUse</Link>
      <h2>Next Auth</h2>
      <Link href="/nextAuth">link: http://localhost:15000/nextAuth</Link>
    </Fragment>
  );
}
Home.requireAuth = true;
