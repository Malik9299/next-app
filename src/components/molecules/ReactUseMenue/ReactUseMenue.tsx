import React from "react";
// import { useSession, signIn, signOut } from "next-auth/react";
import {
  DownOutlined,
  SmileOutlined,
  ReactIcon,
  HomeOutlined,
  LogoutOutlined,
  UserOutlined,
} from "@/icons";
import type { MenuProps } from "antd";
import { Dropdown, Space } from "@/atoms";
import { authSession } from "@/types";

const documents = [
  {
    key: "reactUse",
    label: <a href="/reactUse"> React Use</a>,
    children: [
      {
        key: "ECMAScript",
        label: <a href="/reactUse/esScripting">ECMAScript</a>,
        icon: <ReactIcon />,
      },
      {
        key: "methodsAsProps",
        label: <a href="/reactUse/methodsAsProps">Methods As Props</a>,
        icon: <ReactIcon />,
      },
      {
        key: "reactMemo",
        label: <a href="/reactUse/reactMemo">React.memo</a>,
        icon: <ReactIcon />,
      },
      {
        key: "reactPureComponents",
        label: (
          <a href="/reactUse/reactPureComponents">React Pure Components</a>
        ),
        icon: <ReactIcon />,
      },
      {
        key: "lifecycleMethods",
        label: (
          <a href="/reactUse/lifecycleMethods">Components Lifecycle Methods</a>
        ),
        icon: <ReactIcon />,
      },
      {
        key: "higherOrderComponents",
        label: (
          <a href="/reactUse/higherOrderComponents">Higher Order Components</a>
        ),
        icon: <ReactIcon />,
      },
      {
        key: "renderProps",
        label: (
          <a href="/reactUse/renderProps">
            Render Props Using Class Components
          </a>
        ),
        icon: <ReactIcon />,
      },
      {
        key: "renderProps",
        label: (
          <a href="/reactUse/renderPropsFC">
            Render Props Using Functional Components
          </a>
        ),
        icon: <ReactIcon />,
      },
      {
        key: "context",
        label: <a href="/reactUse/context">Context</a>,
        icon: <ReactIcon />,
      },
    ],
  },
  {
    key: "ReactLibraries",
    label: "React Libraries",
    children: [
      {
        key: "NextAuth",
        label: <a href="/nextAuth">NextAuth</a>,
        icon: <SmileOutlined />,
      },
    ],
  },
];

// const signInOption = {
//   key: " signIn",
//   label: (
//     <a
//       onClick={(e) => {
//         signIn();
//         e.preventDefault();
//       }}
//       href="/api/auth/signin"
//       rel="Sign In"
//     >
//       Sign In
//     </a>
//   ),
//   icon: <HomeOutlined />,
// };

// const signOutOption = {
//   key: " signOut",
//   label: (
//     <a
//       onClick={(e) => {
//         signOut();
//         e.preventDefault();
//       }}
//       href="/api/auth/signout"
//       rel="Sign Out"
//     >
//       Sign Out
//     </a>
//   ),
//   icon: <LogoutOutlined />,
// };

const ReactUseMenue: React.FC<any> = ({ itemName }) => {
  // const { data: session, status } = useSession() as {
  //   data: authSession | null;
  //   status: string;
  // };

  // const userName = {
  //   key: " User",
  //   label: session?.user?.first_name ?? null,
  //   icon: <UserOutlined />,
  // };
  // const userOption = status === "authenticated" ? userName : null;

  // const logedIOptions =
  //   status === "loading" || status === "unauthenticated"
  //     ? signInOption
  //     : signOutOption;

  // const profile = [userOption, logedIOptions];

  // const items: MenuProps["items"] = itemName == "Docs" ? documents : profile;
  const items: MenuProps["items"] = itemName == "Docs" ? documents : documents;
  return (
    <Dropdown menu={{ items }} placement="bottomRight" arrow>
      <a onClick={(e) => e.preventDefault()}>
        <Space>
          {itemName}
          <DownOutlined />
        </Space>
      </a>
    </Dropdown>
  );
};

export default ReactUseMenue;
